describe('Back and forward movement in cypress',()=>{

    it('Simulating and testing the back and forward movement in cypres',()=>{
        cy.visit('')
        cy.contains('Quotes for you').click()
        cy.go('back')
        cy.wait(200)
        cy.go('forward') 
    })
})