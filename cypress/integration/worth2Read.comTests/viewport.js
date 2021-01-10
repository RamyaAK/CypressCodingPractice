describe('Validate my website on different viewports',()=>{

    before(()=>{
        console.log('Running the below tests'
        )
    })

    beforeEach(()=>{
        cy.visit('')

    })

    it('open in macbook-13',()=>{
        cy.viewport('macbook-13')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in macbook-15',()=>{
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in iphone-x',()=>{
        cy.viewport('iphone-x')
        cy.screenshot()
        cy.wait(200)
    })

    it('open in 600 and 750',()=>{
        cy.viewport(600,750)
        cy.screenshot()
        cy.wait(200)
    })


})