describe('The usage of the find in cypress',()=>{
    it('element find test',()=>{
        cy.visit('')
        cy.get('#recent-posts-2 > ul >').should('have.length', 5)
        cy.get('#recent-posts-2').find('ul').find('a').should('have.length', 5)
        cy.get('#recent-posts-2 > ul >').eq(1).should('contain', 'Indian bengal Tiger')
        cy.contains('Todays talk – Mind Control').click()
        cy.get('.cat-links').should('be.visible')
    })
})