# this is an example for writing the feature file for the login functionality using cucumber and cypress
Feature: check the login functionality 
    Scenario: check the login functionality with valid credentials
        Given  the user opens the website
        When I enter valid email 
        And I enter valid password
        And I click on the login button
        Then I should be logged in successfully

    Scenario: check the login functionality with invalid credentials
        Given I am on the login page
        When I enter invalid email and password
        And I click on the login button
        Then I should see an error message
        
    Scenario: check the login functionality with empty fields
        Given I am on the login page
        When I leave the email and password fields empty
        And I click on the login button
        Then I should see an error message for the required fields