import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user opens SauceDemo website", () => {
  cy.visit("https://www.saucedemo.com");
});

When("the user enters username {string} and password {string}", (username, password) => {
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
});

When("the user clicks on the login button", () => {
  cy.get("#login-button").click();
});

Then("the user should be logged in successfully", () => {
  cy.url().should("include", "/inventory.html");
  cy.contains("Products").should("be.visible");
});

When("the user adds a product to the cart", () => {
  cy.contains("Add to cart").click();
});

When("the user opens the cart", () => {
  cy.get(".shopping_cart_link").click();
});

When("the user starts checkout", () => {
  cy.get("#checkout").click();
});

Then("the checkout page should be displayed", () => {
  cy.url().should("include", "/checkout-step-one.html");
  cy.get("#first-name").should("be.visible");
  cy.get("#last-name").should("be.visible");
  cy.get("#postal-code").should("be.visible");
});

When("the user opens the menu", () => {
  cy.get("#react-burger-menu-btn").click();
});

When("the user clicks on logout", () => {
  cy.get("#logout_sidebar_link").click();
});

Then("the login page should be displayed", () => {
  cy.get("#login-button").should("be.visible");
});