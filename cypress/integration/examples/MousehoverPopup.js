/// <reference types="Cypress" />

import { func } from "assert-plus"


describe('Handling mouse hover popups', function(){

    it('Should Handle mouse hover popup', function(){

       // Open the url
       cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.wait(2000)
       
       // Show the after mouse hover drop down values
    //   cy.get('.mouse-hover-content').invoke('show')
       cy.wait(2000)
       
       // Click on top option
       cy.contains('Top').click({force:true}) // Without mouse hover still we can click on the Top adn Reload button
       cy.wait(2000)

       // Verify top text is showing or not in the url
       cy.url().should('include', 'top')

       
})

})