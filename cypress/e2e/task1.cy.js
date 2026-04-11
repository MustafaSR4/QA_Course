describe('TASK 1', () => {
    it('Title', () => {
        cy.visit("https://demowebshop.tricentis.com/register");
        cy.get("[alt='Tricentis Demo Web Shop']");
    });

    it('Login button', () => {
        cy.visit("https://demowebshop.tricentis.com/register");
       cy.get(".ico-login").click();
    })

    it('Search store', () => {
        cy.visit("https://demowebshop.tricentis.com/register");
       cy.get("#small-searchterms")
    })
    
    it('Register title', () => {
        cy.visit("https://demowebshop.tricentis.com/register");
        cy.contains("h1", "Register")

    })
    it('Male', () => {
        cy.visit("https://demowebshop.tricentis.com/register");
        cy.get("#gender-male").click();
       
    })
     it('Last name field', () => {
        cy.visit("https://demowebshop.tricentis.com/register");
        cy.get("#LastName").type("Alayasa",{delay: 1000});
    })

    it('Email txt', () => {
        cy.visit("https://demowebshop.tricentis.com/register");
        cy.get("[for='Email']")
    })
    it('Gift card', () => {
        cy.visit("https://demowebshop.tricentis.com/register");
        cy.get("a[href='/gift-cards']")

    
    })
    it.only('Manufacturers', () => {
        cy.visit("https://demowebshop.tricentis.com/register");
        
    })
    it('Register button', () => {
        cy.visit("https://demowebshop.tricentis.com/register");
        
    })
    it('Subscribe button', () => {
        cy.visit("https://demowebshop.tricentis.com/register");
        
    })
     it('Contact us button', () => {
        cy.visit("https://demowebshop.tricentis.com/register");
        
    })
     it('My Account', () => {
        cy.visit("https://demowebshop.tricentis.com/register");
        
    })
    
     it('NewLetter field', () => {
        cy.visit("https://demowebshop.tricentis.com/register");
        
    })
});