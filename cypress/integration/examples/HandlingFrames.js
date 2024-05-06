/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

import { func } from "assert-plus"


describe('Handling Frames', function(){

    it('Should Handle frames', function(){

       // Open the url
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.wait(2000)

       cy.frameLoaded('#courses-iframe')

       cy.iframe().find('a[href*="mentorship"]').eq(0).click()

        // Increase wait time after clicking on the link
        cy.wait(5000);

       cy.iframe().find("h1[class*='pricing-title text-white ls-1']").should('have.length', 2)

      
       
      
})

})