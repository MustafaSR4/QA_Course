describe ('Delete product from cart in DemoWebstore', () => {
     before(() => {
       cy.visit('https://demowebshop.tricentis.com/login');
       cy.get("#Email").type("mustasyc@gmail.com");
       cy.get("#Password").type("123456");
       cy.get(".login-button").click();
        cy.visit('https://demowebshop.tricentis.com/books');
        cy.get(".item-box").contains('a','Computing and Internet').parents('.details').find("input[value='Add to cart']").click() 
        cy.get('.content').should('be.visible').and('contain', 'The product has been added');
        //adding product to cart using API
        //cy.request('Post','https://demowebshop.tricentis.com/addproducttocart/details/2/1')
})

    it('validate that the user can delete products from the shopping cart .', () => {
        cy.visit('https://demowebshop.tricentis.com/cart');
        cy.get('[name="removefromcart"]').click();
        cy.get('.update-cart-button').click();
        cy.get('.order-summary-content').should('contain', 'Your Shopping Cart is empty!');
    })

});
