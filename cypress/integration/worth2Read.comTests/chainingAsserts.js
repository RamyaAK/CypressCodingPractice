describe('check how to use chaining of the assert methods',()=>{
    it('element get and chaining demo',()=>{
        cy.visit('')
        cy.get('.site-title > a').should('contain', 'Worth2Read.com')
        .get('.entry-title').should('contain', 'Quotes that inspire you to stay motivated in life')
        cy.contains('Continue reading').click()
    })
})