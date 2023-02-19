/// <reference types="cypress" />

describe("Test Mobile View Responsivensess",function() {
    
    this.beforeEach("Navigate to Url and set Viewport", function(){
        
        cy.visit("https://katalon-demo-cura.herokuapp.com/profile.php#login")
    })
    it ("Login via incorrenct vredentials",function(){
        cy.viewport("iphone-x");
        cy.get("#txt-username").type("Test");
        cy.get("#txt-password").type("Test")
        cy.get("#btn-login").click
        cy.url().should("not.contain","#appointment");

    })
    it ("Login via incorrenct vredentials",function(){
        cy.get("#txt-username").type("John Doe");
        cy.get("#txt-password").type("ThisIsNotAPassword")
        cy.get("#btn-login").click();
        cy.url().should("contain","#appointment");
        
    })

})