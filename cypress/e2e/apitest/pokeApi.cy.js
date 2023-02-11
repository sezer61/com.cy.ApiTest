/// <reference types="Cypress"/>

describe ('Rest Api Test With Cypress', function() {
    it('Api Test-Headers Validation', function() {

        cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
          .should('include','application/json; charset=utf-8')
      })
      it('Api Test-Status Validation', function() {

        cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('pokemon')
        cy.get('@pokemon').its('status')
          .should('equal',200)

    })
    it('Api Test-Validate ame Value', function() {

      cy.request('https://pokeapi.co/api/v2/pokemon/25/').as('pokemon')
      cy.get('@pokemon').its('body')
      .should('include',{name: 'pikachu'})
  })
  it.only('Api Test-404 Status Validation', function() {

    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/10000/',
      failOnStatusCode: false,
    }).as('pokemon')
    cy.get('@pokemon').its('status')
      .should('equal',404)

})

})
            
                
          
    
