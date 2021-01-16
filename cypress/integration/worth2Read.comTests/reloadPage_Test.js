describe('Reload Test demo in cypress',()=>{
    it('Reload Test',()=>{
        cy.visit('')
        cy.contains('Quotes for you').click()
        cy.reload()
    })
})