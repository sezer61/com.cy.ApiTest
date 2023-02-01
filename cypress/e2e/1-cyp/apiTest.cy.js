/// <reference types="Cypress"/>

describe('Api Test', () => {
    it('Headers -1 ', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/1')
        .its('headers')
        .its('content-type')
        .should('include','application/json; charset=utf-8')

    })
        it('Headers -2 ', () => {
            cy.request({
                url:'https://pokeapi.co/api/v2/pokemon/1',
                method:'GET'
            }).then((response) => {
                expect(response.headers).to.have.property('content-type').and.to.be.include('application/json; charset=utf-8')
            
                
            })
        })
})