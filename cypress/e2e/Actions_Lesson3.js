describe('Action Lesson', () => {
  it('Click Action Command', () => {
    cy.visit('http://127.0.0.1:5500/actionsLesson.html');
        // cy.get('.btn').click("top") //to click on the element at the top of it
        cy.get('.btn').click({multiple:true}) //to click on the element at the bottom of it
        cy.get('#btn0').click({force:true}) //to click on the element even if it is not visible
        // cy.get('');
  });

  it('Type Command', () => {
    cy.visit('http://127.0.0.1:5500/actionsLesson.html');
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

it.only('Select Command', () => {
    //select for dropdowns and select options from the dropdown
    //select(text or value or index(where he is in the options), options) to select the option from the dropdown by its text or value or index
    cy.visit('http://127.0.0.1:5500/actionsLesson.html');

    cy.get('#country').select("Egypt"); //to select the option with the text "Egypt" from the dropdown
    cy.pause()
    cy.get('#country').select("jordan_country"); //to select the option with the value "jordan_country" from the dropdown
    cy.pause()
    cy.get('#country').select(0); //to select the option with the index 0 from the dropdown
    //with index 3 it will give error because there are only 3 options in the dropdown and the index starts from 0 so the last option has the index 2
    })






});