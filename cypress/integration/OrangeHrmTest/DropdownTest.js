describe('Test the Dropdown using the select tag in  cypress', ()=>{

    it("Select to test and get a perticular element from the dropdown menue",()=>{
        cy.visit('https://www.orangehrm.com/orangehrm-30-day-trial/')
        cy.get('#Form_submitForm_Country').select('Costa Rica')
        cy.should('have.value','Costa Rica');
        
    })
})