//import { describe } from "mocha";
describe("LoginTest", () => {
    it("Test login feature", () => {
        cy.visit("https://auth.testproject.io/auth/realms/TP/protocol/openid-connect/auth?client_id=tp.app&redirect_uri=https%3A%2F%2Fapp.testproject.io%2Fcallback.html&response_type=id_token%20token&scope=openid%20profile&state=eb0d328f10804b738fe4707a19a978cd&nonce=40b04871f2d0445588ef8f5a2987861c")
        cy.contains('Login')
        cy.contains('Login').click()

        cy.get('#username',{timeout:6000}).type('reachouttomaya@gmail.com')
        cy.get('#password').type('MayaSharma123')
        cy.get('#tp-sign-in').click()

    });
}); 