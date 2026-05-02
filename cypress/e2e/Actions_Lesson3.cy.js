describe('Action Lesson', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/actionsLesson.html'); //to visit the page before each test case to make sure that each test case starts with a clean state of the application
  });
  it('Click Action Command', () => {
        // cy.get('.btn').click("top") //to click on the element at the top of it
        cy.get('.btn').click({multiple:true}) //to click on the element at the bottom of it
        cy.get('#btn0').click({force:true}) //to click on the element even if it is not visible
        // cy.get('');
  });

  it('Type Command', () => {
    cy.get("[placeholder='Type your name']").type("Mustafa Alayasa");//single qoutation in the place holders because he should understand that its an one element not 3 elemnets 
    //commands that are used inside of type command
    //.esc to press the escape key
    //.enter to press the enter key
    //.tab to press the tab key
    //.selectall to select all the text in the input field
    //.clear to clear the text in the input field
    //.type("text", {delay:100}) to type the text with a delay of 100 milliseconds between each character
    //enter the text in the input field and then press the enter key instead of typing the text and then pressing the enter key in two separate commands
    // cy.get("[placeholder='Type your name']").type("Mustafa Alayasa{enter}");
    cy.get('#myTextField').type("ahmad","{pagedown}"); //to press the page down key
    cy.get("[name = 'input_0']").type("test", {force: true, delay: 1000}); //to type the text with a delay of 100 milliseconds between each character and to force the command to be executed even if the element is not visible or not enabled
    // cy.pause() //to pause the test and to be able to see the state of the application at that moment and to be able to debug the test(for debugging)
    cy.get("[placeholder='Type your name']").type("{pageup}"); //to press the page up key //it should be typeable element to be able to use the type command on it, if the element is not typeable then it will throw an error because it cannot type on it
    //.type("text", {force: true}) (covered by another elemnet)to force the command to be executed even if the element is not visible or not enabled, it should be used with caution because it can cause unexpected behavior in the test and it can also cause the test to fail if the element is not interactable

});

it('Select Command', () => {
    //select for dropdowns and select options from the dropdown
    //select(text or value or index(where he is in the options), options) to select the option from the dropdown by its text or value or index

    cy.get('#country').select("Egypt"); //to select the option with the text "Egypt" from the dropdown
    cy.pause()
    cy.get('#country').select("jordan_country"); //to select the option with the value "jordan_country" from the dropdown
    cy.pause()
    cy.get('#country').select(0); //to select the option with the index 0 from the dropdown
    //with index 3 it will give error because there are only 3 options in the dropdown and the index starts from 0 so the last option has the index 2
    })

it('Check Command and uncheak', () => {
    //check for checkboxes and radio buttons
    //uncheck for checkboxes only because radio buttons cannot be unchecked
    
    //check(value or text or index(where he is in the options), options) to check the checkbox or radio button by its value or text or index
    //check('value', {force: true}) to check the checkbox or radio button by its value and to force the command to be executed even if the element is not visible or not enabled, it should be used with caution because it can cause unexpected behavior in the test and it can also cause the test to fail if the element is not interactable
    cy.get('#Banana').check().uncheck() //to check the checkbox with the value "Banana"
    cy.get('[name="snack4"]').check().uncheck(); //to check the checkbox with the name "snack4" and then uncheck it
    cy.get('[type=checkbox]').check(['Banana','Fries','le'])
    cy.get('#developer').check() //to check the radio button with the value "developer"
    cy.get('#tester').check() //to check the radio button with the value "tester"
    cy.reload() //to reload the page and to reset the state of the application to the initial state before the test was executed, it is useful to be used in the afterEach hook to make sure that each test starts with a clean state of the application

})
it('focus and blur command', () => {
    cy.get('#myTextField').focus() //to focus on the input field with the id "myTextField"
    cy.get('#myTextField').blur() //to blur the input field with the id "myTextField"

    
})
 it('triggers command', () => {
    cy.get('#trigger_btn').trigger("mouseover").pause().trigger("mouseleave") //to trigger the mouseover event on the element with the id "trigger_btn" and then to trigger the mouseout event on the same element, it is used to test the hover functionality of the element because when we hover on the element it will trigger the mouseover event and when we move the mouse away from the element it will trigger the mouseout event
    //mousedown like click 
    cy.get('#btn1').trigger("mousedown");
    })

  it('Double click command', () => {
    cy.get('#dbClick').dblclick() //to double click on the element with the id "double_click_btn"
    //{multiple:true} to double click on the element with the id "double_click_btn" even if there are more than one element with the same id, it will double click on all the elements with the same id
      cy.get('#dbClick').dblclick({multiple:true,force:true}) //to double click on the element with the id "double_click_btn" even if there are more than one element with the same id and to force the command to be executed even if the element is not visible or not enabled, it should be used with caution because it can cause unexpected behavior in the test and it can also cause the test to fail if the element is not interactable

    })
});