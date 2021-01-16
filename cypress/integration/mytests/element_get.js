describe('check element get concept',()=>{

    it('get element test',()=>{
        cy.visit('https://www.freshworks.com')
        cy.contains('WOW! TELL ME MORE').click()
        cy.url().should('include','/crm')
    })
})