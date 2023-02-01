<reference types="Cypress"/>
describe('Api Test', () => {
    it('Headers ', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('headers')
        .its('content-type')
        .should('include','application/json; charset=utf-8')
        
    });
});