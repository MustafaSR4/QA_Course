// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//add custom command (“loginToDemoWebShop”) to login to the demo web shop and use it in the test cases
//fixture file to store the user data for the demo web shop and use it in the custom command to login to the demo web shop
Cypress.Commands.add('loginToDemoWebShop', () => {
    cy.fixture('user_DemoWebStore').then((user) => {
       
    cy.visit('https://demowebshop.tricentis.com/login');
    cy.get("#Email").type(user.email);
    cy.get("#Password").type(user.password);
    cy.get(".login-button").click();
    })
})
