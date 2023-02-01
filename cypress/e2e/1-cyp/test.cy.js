/// <reference types="Cypress"/>



describe("ScauceDemo Login deneme", () => {

    it("Basarili login sayfa test", () => {
        cy.visit("https://www.amazon.com")
        
    })
    it("Basarili login sayfa test2", () => {
        cy.visit("https://www.amazon.de")
        
        cy.title().should('include',"Amazon.de:")
    })
})