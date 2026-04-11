///< reference types="cypress" />
//describe for scenario of the login functionality page
//it for the specific test case, it should visit the home page and validate the login functionality using valid email and valid password, then validate the login functionality using valid email and invalid password
//check login functionality for the title of the page
//baseUrl is the url of the page that we want to test, we can use it in the test cases instead of writing the full url every time


//data-test id is an attribute that we can use to locate the elements on the page, it is more stable than other locators like class or id because it is not affected by the changes in the design of the page
//element selector is the way to locate the element on the page, we can use different types of selectors like id, class, data-test id, etc. but it is recommended to use data-test id because it is more stable than other selectors
//cy.get(".class") to get the element that has the class "class"
//cy.get("#id") to get the element that has the id "id"
//cy.get("[data-test-id='test']") to get the element that has the data-test id "test"
//cy.contains("text") to get the element that contains the text "text"
//cy.contains("h1", "text") to get the h1 element that contains the text "text"
//cy.contains("h1", "text").click() to click on the h1 element that contains the text "text"
//cy.url() to get the url of the page
//cy.title() to get the title of the page

  it('validate that the user can login successfully using valid email and valid password', () => {
    //steps of the test case
        cy.visit("/");
        cy.get("#user-name").type("standard_user");
        // cy.get(".input_error.form_input error").type("secret_sauce"); //i put space between error and form if form is in input error and there is error because its 2 selectors not one selector
         cy.get("#password").type("secret_sauce");
         cy.get("[name=login-button]").click();
        //  cy.contains("login").click()
         cy.get("button"); //to know how many buttons are there in the page
         cy.contains("Products"); //to check if the text "Products" is present in the page
         //.contains is used to check if the text is present in the page, it is more stable than other selectors because it is not affected by the changes in the design of the page
         
         cy.get("#react-burger-menu-btn").click(); //to click on the menu button
          cy.get(".menu-item").first();
          cy.get("a").filter(".menu-item") //to filter the elements that have the class "menu-item" and get the first one
           cy.get("a").not(".menu-item")//to get the elements that do not have the class "menu-item"
           cy.get(".pricebar").first().find("button").click(); //to find the button inside the element that has the class "pricebar" and click on it
           //.find() is used to find the child elements of the element that we have selected, it is more stable than other selectors because it is not affected by the changes in the design of the page
           cy.get(".pricebar").first().children("button").click(); //to find the button that is a child of the element that has the class "pricebar" and click on it
           //.children() is used to find the child elements of the element that we have selected, it is more stable than other selectors because it is not affected by the changes in the design of the page
           cy.get(".inventory_item_price").first().parents(".inventory_item").find("button").click(); //to find the button that is a child of the parent element of the element that has the class "pricebar" and click on it
           //.parent() (الاب المباشر )is used to find the parent element of the element that we have selected, it is more stable than other selectors because it is not affected by the changes in the design of the page
          //parents() ( مش الاب المباشر)is used to find the parent elements of the element that we have selected, it is more stable than other selectors because it is not affected by the changes in the design of the page
        
        //cy.contains("h3", "Demos") //to check if the text "Demos" is present in the h3 element, it is more stable than other selectors because it is not affected by the changes in the design of the page
        //if there are than one element of h3 so it will pick the first one that contains the text "Demos"
        
        //test
        
         //these commands after get command
        // cy.url();
        // cy.contains("Login").click();
  });

  //  it('validate that the user cant login successfully using valid email and invalid password', () => {
  //   cy.visit("/");
  // });

  // it('validate that the user cant login successfully using invalid email and valid password', () => {
  //   cy.visit("/");
  // });
// });