/// <reference types="Cypress" />

import { func } from "assert-plus"


describe('Handle Check boxes', function(){


    it('First Check box', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        cy.wait(2000)
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.wait(2000)
        cy.get('input[type="checkbox"]').check(['option1', 'option3'])

    // Static Drop-down

        cy.get('select').select('option2').should('have.value','option2')

    // Dynamic Drop-down

        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($e1, index, $list) => { 

           if($e1.text()==="India") 
           {
            $e1.click()
           }    
    })

    cy.get('#autocomplete').should('have.value', 'India')

    // Element Displayed Example:
    // Verify text box is visible 
    cy.get('#displayed-text').should('be.visible')

    // Click on Hide button 
    cy.get('#hide-textbox').click()

    // Verify text box is not displayed
    cy.get('#displayed-text').should('not.be.visible')

    // Click on show button
    cy.get('#show-textbox').click()

    // Verify text box is visible
    cy.get('#displayed-text').should('be.visible')

// Raio buttons

    cy.get('[value="radio3"]').check().should('be.visible')


})

})