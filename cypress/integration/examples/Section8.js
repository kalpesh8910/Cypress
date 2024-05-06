/// <reference types="Cypress" />

import { func } from "assert-plus"


describe('Test Suite', function(){


    it('Practice Test Cases', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        // Basically cypress auto accept alerts.

        // Click on Alert popup
        cy.get('#alertbtn').click()

        // Click on confirm popup
        cy.get('#confirmbtn').click()

        // Window Alert popup
        // when we fire this event then popup will open. otherwise withous this it will not open
        cy.on('window:alert', (str)=>
        {   
            // Mocha
             expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })  

        // Window Confirm popup
        cy.on('window:confirm', (str)=>
        {   
            // Mocha
             expect(str).to.equal('Hello , Are you sure you want to confirm?')
        }) 
})

})