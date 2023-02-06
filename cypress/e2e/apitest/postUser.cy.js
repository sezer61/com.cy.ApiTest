/// <reference types="Cypress"/>

const dataJson=require('../../fixtures/createus.json')

describe('post user request',()=>{
    let accessToken='315111cb321d8c90f47968eaab712f5576c81389cd3a7c19acc1e681fb9ab757';
    let randomText=""
    let testEmail=""

    it('create user test', () => {

        var pattern="ABCDEFGHIJKLMNOPRQRSTUWXYZABCDEFGHİJKLMNOPRSTUWXYZ"
        for(var i=0; i<10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        testEmail=randomText+"@gmail.com"
        cy.fixture('createus').then((payload)=>{

        
        cy.request({




            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: { 'Authorization':'Bearer ' + accessToken 
            },
            body:{
                "name": dataJson.name,
                "gender": dataJson.gender,
                "email": testEmail,
                "status": dataJson.status
            }


        

        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).has.property('email',testEmail)
            expect(res.body).has.property('name',dataJson.name)
            expect(res.body).has.property('status',dataJson.status)
            expect(res.body).has.property('gender',dataJson.gender)
        })
    })
})

})