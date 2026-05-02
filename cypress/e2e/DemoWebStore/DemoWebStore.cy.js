describe('Practices', () => {
    
    it('1. a-check that all fields / titles / buttons are visible in the Register form .', () => {
        cy.visit('https://demowebshop.tricentis.com/register');


        cy.contains('h1', "Register").should("be.visible");
        cy.contains('Your Personal Details').should('be.visible')
        cy.contains('Your Password').should('be.visible')
        cy.contains('Gender:').should('be.visible')
        cy.get("[for='gender-male']").should('be.visible')
        cy.get("[for='gender-female']").should('be.visible')
        cy.get(".required").should('be.visible') // (star) required
        cy.contains('First name:').should('be.visible')
        cy.contains('Last name:').should('be.visible')
        cy.contains('Email:').should('be.visible')
        cy.contains('Password:').should('be.visible')
        cy.contains('Confirm password:').should('be.visible')       
        cy.get("#gender-male").should("be.visible");
        cy.get("#gender-female").should("be.visible");
        cy.get("#FirstName").should("be.visible");
        cy.get("#LastName").should("be.visible");
        cy.get("#Email").should("be.visible");
        cy.get("#Password").should("be.visible");
        cy.get("#ConfirmPassword").should("be.visible");
        cy.get('#register-button').should("be.visible");


        })

        it('1. b-Create a test case to check the functionality of creating a new account ( only check the happy scenario )', () => {
           cy.visit('https://demowebshop.tricentis.com/register');
           cy.get("#gender-male").click();
           cy.get("#FirstName").type("Mustafa");
           cy.get("#LastName").type("Alayasa");
           cy.get("#Email").type(`mustafa${Date.now()}@gmail.com`);
           cy.get("#Password").type("123456");
           cy.get("#ConfirmPassword").type("123456");
           cy.get('#register-button').click();
           cy.contains("Your registration completed").should("be.visible") 
           cy.get("a.account").should("contain", "@gmail.com") 
        //    cy.get(".ico-login").should("not.be.visible") // this is bug because after registration the user should be logged in and the login link should not be visible
           cy.get(".ico-logout").should("be.visible")
        })

        it('2. a-Create a test case to validate that the user can add products to the shopping cart .', () => {
            cy.visit('https://demowebshop.tricentis.com/login');
            cy.get("#Email").type("mustasyc@gmail.com");
            cy.get("#Password").type("123456");
            cy.get(".login-button").click();
            cy.visit('https://demowebshop.tricentis.com/books');
            
            //add_to_product.cy.js
        })

//cy.origin() to handle cross-origin issues when we need to interact with elements that are in a different domain than the one we are currently testing, for example when we need to interact with the payment gateway that is in a different domain than the e-commerce website we are testing, we can use cy.origin() to switch to the payment gateway domain and interact with the elements there and then switch back to the e-commerce website domain to continue with the test case
        //delete product from cart using UI ,using API and using UI + API (add product to cart using API and delete it using UI or add product to cart using UI and delete it using API)
        it.only('2. b-Create a test case to validate that the user can delete products from the shopping cart .', () => {
            //delete_product_from_cart.cy.js
            
        })

        it('2. c-Create a test case to validate that the user can update qty for products from the shopping cart .', () => {
            //update_qty.cy.js
        })
        it('3. Add a custom command called “loginToDemoWebShop” and use it .', () => {
            //added the custom command in the commands.js file and used it in the add_to_product.cy.js file
        })

//screenshot and video recording for the test cases for the test cases that are failed and for the test cases that are passed and for all test cases
//cypress documentation for screenshot and video recording
//cypress documentation for custom commands
//npx cypress run whenever we run the test cases the screenshot folder reset 
//npx cypress run --spec "cypress/e2e/add_delete_to_product.cy.js" to run specific test file and take screenshot for the failed test cases in that file only
//cy.screenshot() to take screenshot for the test case at any step in the test case and we can also pass a name for the screenshot as a parameter to the screenshot() method and it will save the screenshot with that name in the screenshots folder
//cy.screenshot({capture:'runner'}) to take screenshot for the whole test runner (the left side of the cypress test runner that contains the list of test cases and the right side that contains the details of the test case that is being executed)
//cy.screenshot({capture:'viewport'}) to take screenshot for the visible part of the page 
//cy.screenshot({capture:'fullPage'}) to take screenshot for the whole page 


    });