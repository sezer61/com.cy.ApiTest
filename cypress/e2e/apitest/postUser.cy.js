/// <reference types="Cypress"/>

describe('post user request',()=>{
    let accessToken='315111cb321d8c90f47968eaab712f5576c81389cd3a7c19acc1e681fb9ab757';

    it('create user test', () => {
        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: { 'Authorization':'Bearer ' + accessToken 
            },
            body:{
                "name": "Test Automations",
                "gender": "female",
                "email": "cntaww@gmail.com",
                "status": "active"
            }


        

        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).has.property('email','cntaww@gmail.com')
            expect(res.body).has.property('name','Test Automations')
            expect(res.body).has.property('status','active')
            expect(res.body).has.property('gender','female')
        })
    })
})