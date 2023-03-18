/// <reference types="cypress" />
describe('Doktar site testi', () => {
    it('Products bölümüne git İphone-X', () => {
      cy.viewport("iphone-x");
      // AutomationExercise sitesine git
      cy.visit('https://automationexercise.com/')

      //Products bölümüne git
      cy.get('a[href="/products"]').click()
      
    })
    it('Products bölümüne git Browser', () => {
      // AutomationExercise sitesine git
      cy.visit('https://automationexercise.com/')
      //Products bölümüne git
      cy.get('a[href="/products"]').click()
    
    })
  })