describe('checkbox control demo in cypress',()=>{
    it('checkbox control demo test',()=>{
       cy.visit('http://automationpractice.com/index.php')
       cy.contains('Women').click()
       //check the checkboxes and verify
       cy.get('.checkbox').check().parent().should('have.class','checked')

       //uncheck the checkboxes and verify
       cy.get('.checkbox').uncheck().parent().should('not.have.class','checked')

    })
})