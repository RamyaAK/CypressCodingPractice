describe('elements of Worth2Read.com Test',()=>{
   it('Verify if the Heading Name is Worth2Read.com',()=>{
      cy.visit("");
      cy.contains('Worth2Read');
      cy.contains('Worth2Read').click();
      cy.url().should('include','ramyakulkarni');
      cy.contains('Continue reading').click();
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#search-2 > .search-form > label > .search-field').click();
      cy.get('#search-2 > .search-form > label > .search-field').type('Indian bengak{backspace}l');
      cy.get('#search-2 > .search-form > .search-submit').click();
      /* ==== End Cypress Studio ==== */
   });

   /* === Test Created with Cypress Studio === */
   it('New Title Test', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('https://ramyakulkarni.wordpress.com/');
      /* ==== End Cypress Studio ==== */
   });
});