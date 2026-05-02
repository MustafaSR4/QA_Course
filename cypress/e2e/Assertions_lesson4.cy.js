describe('Assertions Lesson', () => {
  
  //assertion for comparing the actual value with the expected value and to validate that the actual value is equal to the expected value
  //assertion with should (chainers) Chaniers : 
// visible => should(“be.visible”).
// hidden => should(“be.hidden”).
// attr => should(“have.attr”,”value”).
// css => should(“have.css”,”css-property”,”value”).
// class=> should(“have.class”,”value”).



 // سؤال رزان
  //input field using should( "have.value", "text") to validate that the input field has the value "text"
  //and cannot be used with contains instead of (have.value)
    it('Select Command', () => {
    //select for dropdowns and select options from the dropdown
    //select(text or value or index(where he is in the options), options) to select the option from the dropdown by its text or value or index
    cy.visit('http://127.0.0.1:5500/actionsLesson.html');

    cy.get('#country').find("option").first().should("be.selected") //be.selected to validate that the option is selected
     })

     it("Assertion (should)", () => {
        cy.visit('http://127.0.0.1:5500/actionsLesson.html');
        cy.get('h1').should("contain", "QA Course") //to validate that the h1 element contains the text "QA Course" 
        cy.get("#hiddenElemnt").should ("exist").should("not.be.visible")//to validate that the element exists in the page
        //be.hidden & not.be.visible to validate that the element is hidden in the page 
        // cy.get("").should ("not.exist")//to validate that the element does not exist in the page
        // cy.get("").should ("be.visible")//to validate that the element is visible in the page
        cy.pause();
        cy.get("[placeholder='Type your name']").type("Mustafa Alayasa").type("Mustafa Alayasa")
        cy.get('#Banana').check() //to check the checkbox with the value "Banana"
        cy.get('[name="snack4"]').check()
        cy.get('#Banana').should("be.checked")
        cy.get('[name="snack4"]').should("be.checked") //to validate that the checkbox with the value "Banana" is checked
        cy.get('[type="number"]').type("22").should("have.value", "22") //to validate that the input field has the value "22"
        cy.get('#country').select("Palestine").find("option").first().should("be.selected")
        //assertion go with the last action command that we have executed
        //THIS IS TEST CASE FOR THE LOGIN PAGE 
        //should("be.enabled"),should("be.disabled") to validate for example the login button that should be disabled when the data are not typed and it should be enabled when the data are typed 
        })

      it.only('validate that user can open google website', () => {  
        cy.visit('http://127.0.0.1:5500/actionsLesson.html');
        //should after get command then we can use and() to chain the assertions together
        cy.get('#trigger_btn').trigger("mouseover").should("have.css", "background-color", "rgb(255, 255, 0)").and('contain','Trigger') //to validate that the background color of the element with the id "trigger_btn" is yellow when we hover on it
        cy.get("[placeholder='Type your name']").type("Mustafa Alayasa")
        cy.reload() //to reload the page and to reset the state of the application to the initial state before the test was executed, 
        cy.get("[placeholder='Type your name']").should("be.empty") //to validate that the input field with the id "testField" is empty
        //and() TO CHAIN THE ASSERTIONS TOGETHER

        cy.pause();
        cy.get('.google').click() 
        //cy.url() to get the current URL of the page and to validate that the user is on the correct page after clicking on the google link
        cy.url().should("eq", "https://www.google.com/") //to validate that the current URL of the page is equal to(expected) "https://www.google.com/"
        // cy.get('#SIvCob').should("contain", "google") //to validate that the element with the id "SIvCob" contains the text "google"
      })

    
    
    
    
    
    
    
    
    
    
});





