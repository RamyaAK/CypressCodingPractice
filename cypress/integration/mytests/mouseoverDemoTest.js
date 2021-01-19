describe('Mouseover functionality test in cypress',()=>{
    it('Testing how to mouseover in cypress',()=>{
        cy.visit('https://www.spicejet.com')
        cy.contains('Login / Signup').trigger('mouseover')
        cy.contains('SpiceClub Members').trigger('mouseover')
        cy.contains('Sign up').click()
    })
})