describe('TASK 2', () => {
     beforeEach(() => {
        cy.visit('https://automationexercise.com/'); 
      });

      it('Validate that a new user can successfully register using the Signup  page.', () => {
        cy.visit('https://automationexercise.com/login');
        cy.get('[data-qa="signup-name"]').type("Mustafa Alayasa");
        cy.get('[data-qa="signup-email"]').type(`mustafa${Date.now()}@gmail.com`);
        cy.get('[data-qa="signup-button"]').click();
        cy.get('#id_gender1').check() 
        cy.get('#password').type("123456");
        cy.get('#days').select("16");
        cy.get('#months').select("June");
        cy.get('#years').select("2004");
        cy.get('#newsletter').check() 
        cy.get('#first_name').type('mustafa') 
        cy.get('#last_name').type('alayasa')
        cy.get('#company').type('test')
        cy.get('#address1').type('test')
        cy.get('#address2').type('test')
        cy.get('#country').select("United States")
        cy.get('#state').type('test')
        cy.get('#city').type('test')
        cy.get('#zipcode').type('12345')
        cy.get('#mobile_number').type('1234567890')
        cy.get('[data-qa="create-account"]').click();
        cy.contains("Account Created!").should("be.visible") 
      })

      it('Validate that an existing user can log in using valid credentials.', () => {
        cy.visit('https://automationexercise.com/login');
        cy.get('[data-qa="login-email"]').type(`mustasyc4@gmail.com`);  
        cy.get('[data-qa="login-password"]').type("123456");
        cy.get('[data-qa="login-button"]').click();
        cy.contains("Logged in as").should("be.visible")     
      })

      it('Validate that the correct results appear when using search bar using valid  product names',() =>{
        cy.visit('https://automationexercise.com/products');
        cy.get('#search_product').type("winter top");
        cy.get('#submit_search').click();
         cy.contains('p', 'Winter Top').should('be.visible')
      })
      it('Validate that the correct results appear when using search bar using invalid product names',() =>{
        cy.visit('https://automationexercise.com/products');
        cy.get('#search_product').type("summer top");
        cy.get('#submit_search').click();
        cy.get('.product-image-wrapper').should('have.length', 0)    
      })
      it('Validate that a user can add a product to the shopping cart from the product details page. .', () => {
        cy.visit('https://automationexercise.com/products');
        cy.visit('https://automationexercise.com/products');
        cy.get('#search_product').type("winter top");
        cy.get('#submit_search').click();
        cy.get ('[href="/product_details/5"]').click();
        cy.get('.btn-default.cart').click();
        cy.contains('.text-center', 'Your product has been added to cart.').should('be.visible')   

      })
      it('Validate that a logged-in user can add a review to a product.', () => {
        cy.visit('https://automationexercise.com/login');
        cy.get('[data-qa="login-email"]').type(`mustasyc4@gmail.com`);  
        cy.get('[data-qa="login-password"]').type("123456");
        cy.get('[data-qa="login-button"]').click();
        cy.visit('https://automationexercise.com/products');
        cy.get('#search_product').type("winter top");
        cy.get('#submit_search').click();
        cy.get ('[href="/product_details/5"]').click();
        cy.get('#name').type("Mustafa Alayasa");
        cy.get('#email').type(`mustasyc@gmail.com`);
        cy.get('#review').type("This is a great product!");
        cy.get('#button-review').click();
        cy.contains('.alert-success.alert', 'Thank you for your review.').should('be.visible')   
      })

});