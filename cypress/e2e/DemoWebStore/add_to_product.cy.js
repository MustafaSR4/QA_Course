describe("2. a-add to product in DemoWebstore", () => {
   
   //before() is used to run a block of code once before all the test cases in the describe block one time only, it is used to set up the preconditions for the test cases, it is also used to avoid code duplication in the test cases
   //beforeEach() is used to run a block of code before each test case in the describe block, it is used to set up the preconditions for the test cases, it is also used to avoid code duplication in the test cases
   //after(() => {
    //    //to run a  once after all the test cases in the describe block one time only, it is used to clean up the state of the application after the test cases are executed, it is also used to avoid code duplication in the test cases
    //} 
    //afterEach(() => {
    //    //to run a block of code after each test case in the describe block, it is used to clean up the state of the application after each test case is executed, it is also used to avoid code duplication in the test cases
    //})

    before(() => {
        //custom command ro login by adding login steps with the fixture data in the commands.js file and then using the custom command in the test case to login to the demo web shop
        cy.loginToDemoWebShop();

       
   })
    
    it.only('validate that the user can add products to the shopping cart .', () => {
        cy.visit('https://demowebshop.tricentis.com/books');
        cy.get(".item-box").contains('a','Computing and Internet').parents('.details').find("input[value='Add to cart']").click() 
        // cy.get('.cart-qty').should('contain', '1')
        cy.get('.content').should('be.visible').and('contain', 'The product has been added');

})
//delete product from cart using API and using UI + API (add product to cart using API and delete it using UI or add product to cart using UI and delete it using API)
//network tab in the browser dev tools to find the API endpoint for adding product to cart and deleting product from cart
//headers and body of the request to find the required parameters for adding product to cart and deleting product from cart
    after(() => {
            // cy.get('.ico-cart').first().click()
            
            // //invoke the API endpoint for deleting product from cart and pass the required parameters in the body of the request
            // //then for the value of the cart item id we can use invoke('val') to get the value of the input field that contains the cart item id and then pass it in the body of the request for deleting product from cart
            // //value of the cart item id from the checkbox that it used to delete the product from cart
            // cy.get('[name="removefromcart"]').invoke('val').then((value) => {
            //     cy.log(value);
            //     cy.request('POST', 'https://demowebshop.tricentis.com/cart',{removefromcart:'${value}'})
            // })
            //delete product from cart using UI
            //2 b-Create a test case to validate that the user can delete products from the shopping cart . (using UI)
            cy.get('.ico-cart').first().click()
            cy.get('[name="removefromcart"]').check()
            cy.get('.update-cart-button').click()

        
})
})
        