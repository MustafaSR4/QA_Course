import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"; 

Given("the user opens the website", () => {
    cy.visit("https://demowebshop.tricentis.com/login");
})


When("I enter valid email", () => {
    // cy.get("#user-name").type("standard_user");
})
When("I enter valid password", () => {
    // cy.get("#password").type("secret_sauce");
}

When("I click on the login button", () => {
    // cy.get("#login-button").click();
})

Then("I should be logged in successfully", () => {
    // cy.url().should('include', '/inventory.html');
    // cy.get(".title").should('be.visible').and('contain', 'Products');
    // cy.get(".inventory_item").should('have.length', 6);
})