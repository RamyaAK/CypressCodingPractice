describe('Best way to use click on a button in Cypress',()=>{

    it('test using submit button in cypress', ()=>{
        //best way to click on the button with matching text in cypress is cy.get('[data-cy=submit]').click()
        cy.visit('')
        cy.get('.site-title > a').click()

        //cy.get('#search-2 > .search-form > label > .search-field').type('Quotes')
       // cy.get('#search-2 > .search-form > .search-submit').click()

    })
})