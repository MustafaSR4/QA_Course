Feature: SauceDemo Automation Task

  Scenario: Login with standard user
    Given the user opens SauceDemo website
    When the user enters username "standard_user" and password "secret_sauce"
    And the user clicks on the login button
    Then the user should be logged in successfully

  Scenario: Login with problem user
    Given the user opens SauceDemo website
    When the user enters username "problem_user" and password "secret_sauce"
    And the user clicks on the login button
    Then the user should be logged in successfully

  Scenario: Login with performance glitch user
    Given the user opens SauceDemo website
    When the user enters username "performance_glitch_user" and password "secret_sauce"
    And the user clicks on the login button
    Then the user should be logged in successfully

  Scenario: Add product to cart and start checkout
    Given the user opens SauceDemo website
    When the user enters username "standard_user" and password "secret_sauce"
    And the user clicks on the login button
    And the user adds a product to the cart
    And the user opens the cart
    And the user starts checkout
    Then the checkout page should be displayed

  Scenario: Logout successfully
    Given the user opens SauceDemo website
    When the user enters username "standard_user" and password "secret_sauce"
    And the user clicks on the login button
    And the user opens the menu
    And the user clicks on logout
    Then the login page should be displayed