describe('Telerik', () => {

    it('should have the correct title', () => {
        cy.visit('https://www.telerik.com/support/demos');
        cy.get(".u-s-mb0")
        // cy.get(".track--pricing").click();
        cy.get("[title=Search]").last()
        cy.get("#mobile")
        cy.get("[title='Get it on Google Play']")
        cy.get("[alt='Google-play-icon']")
        cy.get(".TK-Footer-Social-Link").eq(0)
         cy.get(".TK-Footer-Social-Link").find("*").filter("li")


    });
});
/* <a href="#reporting" class="NavAlt-anchor u-b0" aria-label="Reporting" data-sf-ec-immutable="" referrerpolicy="no-referrer-when-downgrade">Reporting &amp; Docs</a> */
//get the element that has the class "NavAlt-anchor" and the class "u-b0" and get the next element and get the next element after that
//