/// <reference types="Cypress"/>

describe('Api Test', () => {
    it('Json Place Holder Status ', () => {
        cy.request('https://jsonplaceholder.typicode.com/posts/22')
        .its('status')
        .should('eq',200)

    })
    it('Json Place Holder GET ', () => {
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts/22',
            method:'GET'
        }).then((response) => {
            expect(response.body).to.be.include({userId:3})
            expect(response.body).to.be.include({id:22})
            expect(response.body).to.be.include({title:'dolor sint quo a velit explicabo quia nam'})
            expect(response.body).to.be.include({body:'eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse'})
            
        })
    })
})
