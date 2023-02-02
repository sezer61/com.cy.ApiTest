/// <reference types="Cypress"/>

describe ('get api user tests',() =>{

    it('get users',()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users/205512',
            headers : {
                'Authorization' : "Bearer d4be357b4288cd2940c854458e41aac05391e2a287b325243949b5c0f9bd143e"
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.email).to.eq("butt_dharani@buckridge.org")
        })
    })
    it('get users 2',()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users/208616',
            headers : {
                'Authorization' : "Bearer d4be357b4288cd2940c854458e41aac05391e2a287b325243949b5c0f9bd143e"
            }
        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(208616)
            expect(res.body.name).to.eq("Agastya Agarwal")
            expect(res.body.email).to.eq("agastya_agarwal@schiller-bashirian.io")
            expect(res.body.gender).to.eq("male")
            expect(res.body.status).to.eq("active")

        })
    })
})