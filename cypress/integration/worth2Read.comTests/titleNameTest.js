describe('elements of Worth2Read.com Test',()=>{

    it('Verify if the Heading Name is Worth2Read.com',()=>{
       cy.visit("");
       cy.contains('Worth2Read');
       cy.contains('Worth2Read').click();
       cy.url().should('include','ramyakulkarni');
       cy.contains('Continue reading').click();
    });

});