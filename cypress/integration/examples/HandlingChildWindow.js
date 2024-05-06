/// <reference types="Cypress" />

import { func } from "assert-plus"


describe('Handling Child Windows', function(){

    it('Should Handle Child Window', function(){

        // Open the url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.wait(2000)

    //  It will open the new window in same tab, we have removed the target attribute that's whhy.
        cy.get('#opentab').invoke('removeAttr', 'target').click() 
        
        // Click on new tab button
     //   cy.get('#opentab').click() // It will open the window in new tab

        cy.origin("https://www.qaclickacademy.com",()=>
    {
        cy.get("#navbarSupportedContent a[href*='about']").click()

        cy.get('.mt-50 h2').should('contain', 'QAClick Academy ')
    })
        
})

})