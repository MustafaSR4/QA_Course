Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes('Failed to unlock selected booth') ||
    err.message.includes('unlockElement is missing')
  ) {
    return false;
  }

  return true;
});

describe('Booth Selection', () => {
  const baseUrl = 'http://localhost:5173';
  const eventId = '3de26626-a852-4dd6-b509-2e90e2b7185d';

  const boothSelectionUrl = `${baseUrl}/vendor2/event/${eventId}`;

  const loginPhoneNumber = '595501554';
  const password = 'mustafa@123';

  const availableBoothSelector = '[data-testid="booth-map-item"]:not([disabled])';

  function loginAndOpenBoothSelection() {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit(`${baseUrl}/login`);

    cy.get('#phoneNumber').type(loginPhoneNumber);
    cy.get("[data-slot='button']").click();

    cy.contains('Continue with Password').click();

    cy.get('#password').type(password);
    cy.get("[type='submit']").click();

    cy.wait(1000);

    cy.visit(boothSelectionUrl);

    cy.get('#booth-selection-page', { timeout: 15000 }).should('exist');

    cy.get('[data-testid="booth-map-item"]', { timeout: 15000 }).should(
      ($items) => {
        expect($items.length).to.be.greaterThan(0);
      }
    );
  }

  function clickAvailableBooth(index = 0) {
    cy.get(availableBoothSelector, { timeout: 15000 })
      .eq(index)
      .scrollIntoView()
      .click({ force: true });

    cy.get('#booth-details-sidebar', { timeout: 10000 }).should('exist');
  }

  function clickAvailableBoothAndSaveId(index = 0, aliasName = 'selectedBoothId') {
    cy.get(availableBoothSelector, { timeout: 15000 })
      .eq(index)
      .invoke('attr', 'data-booth-id')
      .as(aliasName);

    cy.get(availableBoothSelector, { timeout: 15000 })
      .eq(index)
      .scrollIntoView()
      .click({ force: true });

    cy.get('#booth-details-sidebar', { timeout: 10000 }).should('exist');
  }

  function closeBoothSidebarIfOpen() {
    cy.get('body').then(($body) => {
      if ($body.find('#booth-sidebar-back-button').length > 0) {
        cy.get('#booth-sidebar-back-button').click({ force: true });
      }
    });
  }

  function addBoothToCart(index = 0) {
    clickAvailableBooth(index);

    cy.get('#booth-add-to-cart-button')
      .scrollIntoView()
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    cy.contains(
      'Booth added to cart. Use the cart icon to continue payment.',
      { timeout: 10000 }
    ).should('be.visible');

    cy.get('#booth-cart-summary', { timeout: 10000 }).should('exist');
  }

  function assertBoothCartCount(expectedCount) {
    cy.get('#booth-cart-summary', { timeout: 10000 }).should('exist');

    cy.get('[data-testid="booth-cart-count"]')
      .should('be.visible')
      .and('contain', `${expectedCount} booth`);

    cy.get('[data-testid="booth-header-cart-count"]', { timeout: 10000 })
      .should('be.visible')
      .and('contain', `${expectedCount}`);
  }

  beforeEach(() => {
    loginAndOpenBoothSelection();
  });

  afterEach(() => {
    cy.window().then((win) => {
      Object.keys(win.localStorage).forEach((key) => {
        if (
          key.includes('tazkarago:booth-cart') ||
          key.includes('tazkarago:active-booth-cart-key') ||
          key.includes('tazkarago:active-cart-key')
        ) {
          win.localStorage.removeItem(key);
        }
      });
    });
  });

  it('Should load booth selection page correctly', () => {
    cy.get('#booth-selection-page').should('exist');
    cy.get('#booth-selection-header').should('exist');
    cy.get('#booth-list-panel').should('exist');
    cy.get('#booth-map-panel').should('exist');
    cy.get('#booth-header-cart-button').should('exist');
    cy.get('#booth-status-legend').should('exist');
  });

  it('Should show empty cart message when opening cart with no booths', () => {
    cy.get('#booth-header-cart-button').click();

    cy.contains('Your cart is empty.', { timeout: 10000 }).should('be.visible');
  });

  it('Should open booth details when selecting an available booth', () => {
    clickAvailableBooth(0);

    cy.get('#booth-details-sidebar').should('exist');

    cy.get('[data-testid="booth-sidebar-name"]')
      .should('exist')
      .and('be.visible');

    cy.get('#booth-add-to-cart-button')
      .scrollIntoView()
      .should('be.visible')
      .and('not.be.disabled');
  });

  it('Should add one valid booth to cart', () => {
    addBoothToCart(0);

    assertBoothCartCount(1);

    cy.get('[data-testid="booth-cart-total"]').should('exist');
    cy.get('#booth-cart-timer').should('contain', 'Hold expires in');
  });

  it('Should allow adding multiple booths to cart', () => {
    addBoothToCart(0);

    closeBoothSidebarIfOpen();

    addBoothToCart(1);

    assertBoothCartCount(2);
  });

  it('Should allow adding three different booths to cart', () => {
    addBoothToCart(0);

    closeBoothSidebarIfOpen();

    addBoothToCart(1);

    closeBoothSidebarIfOpen();

    addBoothToCart(2);

    assertBoothCartCount(3);
  });

  it('Should not allow adding the same booth twice', () => {
    addBoothToCart(0);

    cy.get('#booth-add-to-cart-button')
      .scrollIntoView()
      .should('be.visible')
      .and('be.disabled');

    cy.contains('Booth already in cart').should('be.visible');

    assertBoothCartCount(1);
  });

  it('Should show cart summary after adding a booth', () => {
    addBoothToCart(0);

    cy.get('#booth-cart-summary').should('exist');
    cy.get('[data-testid="booth-cart-count"]').should('contain', '1 booth');
    cy.get('[data-testid="booth-cart-total"]').should('exist');
    cy.get('#booth-cart-timer').should('contain', 'Hold expires in');
  });

  it('Should navigate to cart page from header cart button', () => {
    addBoothToCart(0);

    cy.get('#booth-header-cart-button').click();

    cy.url({ timeout: 10000 }).should('include', '/cart');
  });

  it('Should navigate to cart page from cart summary button', () => {
    addBoothToCart(0);

    closeBoothSidebarIfOpen();

    cy.get('#booth-cart-open-button')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    cy.url({ timeout: 10000 }).should('include', '/cart');
  });

  it('Should clear booth cart when Clear button is clicked', () => {
    addBoothToCart(0);

    closeBoothSidebarIfOpen();

    cy.get('#booth-cart-clear-button')
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    cy.contains(
      'Booth cart cleared locally. Backend unlock API is still missing.',
      { timeout: 10000 }
    ).should('be.visible');

    cy.get('#booth-cart-summary').should('not.exist');
    cy.get('[data-testid="booth-header-cart-count"]').should('not.exist');
  });

  it('Should make booth available again after clearing cart', () => {
    clickAvailableBoothAndSaveId(0, 'selectedBoothId');

    cy.get('#booth-add-to-cart-button')
      .scrollIntoView()
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    cy.contains(
      'Booth added to cart. Use the cart icon to continue payment.',
      { timeout: 10000 }
    ).should('be.visible');

    closeBoothSidebarIfOpen();

    cy.get('#booth-cart-clear-button')
      .scrollIntoView()
      .click({ force: true });

    cy.contains(
      'Booth cart cleared locally. Backend unlock API is still missing.',
      { timeout: 10000 }
    ).should('be.visible');

    cy.get('@selectedBoothId').then((boothId) => {
      cy.get(`[data-testid="booth-map-item"][data-booth-id="${boothId}"]`, {
        timeout: 10000,
      })
        .should('exist')
        .and('not.be.disabled');
    });
  });

 it('Should clear cart automatically when 1 minute timer expires and allow reserving the same booth again', () => {
  clickAvailableBoothAndSaveId(0, 'expiredBoothId');

  cy.get('#booth-add-to-cart-button')
    .scrollIntoView()
    .should('be.visible')
    .and('not.be.disabled')
    .click();

  cy.contains(
    'Booth added to cart. Use the cart icon to continue payment.',
    { timeout: 10000 }
  ).should('be.visible');

  cy.get('#booth-cart-summary', { timeout: 10000 }).should('exist');

  cy.get('#booth-cart-timer')
    .should('exist')
    .and('contain', 'Hold expires in');

  cy.wait(65000);

  cy.get('#booth-cart-summary', { timeout: 15000 }).should('not.exist');

  cy.get('body').then(($body) => {
    expect($body.find('[data-testid="booth-header-cart-count"]').length).to.eq(0);
  });

  closeBoothSidebarIfOpen();

  cy.get('@expiredBoothId').then((boothId) => {
    cy.get(
      `[data-testid="booth-map-item"][data-booth-id="${boothId}"]:not([disabled])`,
      { timeout: 20000 }
    )
      .should('exist')
      .scrollIntoView()
      .click({ force: true });
  });

  cy.get('#booth-details-sidebar', { timeout: 10000 }).should('exist');

  cy.get('#booth-add-to-cart-button')
    .scrollIntoView()
    .should('be.visible')
    .and('not.be.disabled')
    .click();

  cy.contains(
    'Booth added to cart. Use the cart icon to continue payment.',
    { timeout: 10000 }
  ).should('be.visible');

  assertBoothCartCount(1);
});

  it('Should not reset timer when adding another booth', () => {
    addBoothToCart(0);

    cy.get('#booth-cart-timer').should('contain', 'Hold expires in');

    cy.wait(30000);

    cy.get('#booth-cart-timer').should(($timer) => {
      const text = $timer.text();

      expect(text).to.not.include('01:00');
    });

    closeBoothSidebarIfOpen();

    addBoothToCart(1);

    cy.get('#booth-cart-timer').should(($timer) => {
      const text = $timer.text();

      expect(text).to.not.include('01:00');
    });

    assertBoothCartCount(2);
  });

  it('Should toggle Under $50 filter', () => {
    cy.get('#booth-filter-under-50-button').should('be.visible').click();

    cy.get('[data-testid="booth-visible-count"]').should('contain', 'Showing');
  });

  it('Should toggle VIP filter', () => {
    cy.get('#booth-filter-vip-button').should('be.visible').click();

    cy.get('[data-testid="booth-visible-count"]').should('contain', 'Showing');
  });

  it('Should change sorting to Price', () => {
    cy.get('#booth-sort-trigger').click();

    cy.get('[data-testid="booth-sort-price-option"]')
      .should('be.visible')
      .click();

    cy.get('#booth-sort-trigger').should('contain', 'Price');
  });

  it('Should change sorting to Deal score', () => {
    cy.get('#booth-sort-trigger').click();

    cy.get('[data-testid="booth-sort-deal-score-option"]')
      .should('be.visible')
      .click();

    cy.get('#booth-sort-trigger').should('contain', 'Deal score');
  });

  it('Should change sorting to Zone', () => {
    cy.get('#booth-sort-trigger').click();

    cy.get('[data-testid="booth-sort-zone-option"]')
      .should('be.visible')
      .click();

    cy.get('#booth-sort-trigger').should('contain', 'Zone');
  });

  it('Should use booth map zoom controls', () => {
    cy.get('#booth-map-zoom-in-button')
      .should('be.visible')
      .and('not.be.disabled')
      .click();

    cy.get('#booth-map-zoom-out-button')
      .should('be.visible')
      .and('not.be.disabled')
      .click();
  });

  it('Should close booth details sidebar using back button', () => {
    clickAvailableBooth(0);

    cy.get('#booth-sidebar-back-button')
      .scrollIntoView()
      .should('be.visible')
      .click();

    cy.get('#booth-details-overlay').should('have.class', '-translate-x-full');
  });
});