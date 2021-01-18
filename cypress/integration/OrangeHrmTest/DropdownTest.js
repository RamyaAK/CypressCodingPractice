describe('Test the Dropdown using the select tag in  cypress', ()=>{

    it.skip("Select to test and get a perticular element from the dropdown menue",()=>{
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.get('#Form_submitForm_Country').select('Costa Rica')
        cy.should('have.value','Costa Rica');
        
    })


    it('Google search test dropdowns',()=>{
        cy.visit('https://www.google.com')
        cy.get('.gLFyf').type("cypress tests")

        cy.get('div.jKWzZXdEJWi__suggestions-inner-container').contains('cypress tests').click()
    })
})