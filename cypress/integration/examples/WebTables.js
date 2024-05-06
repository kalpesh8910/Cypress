/// <reference types="Cypress" />

import { func } from "assert-plus"


describe('Handling web tables', function(){

    it('Should Handle web tables', function(){

        // Open the url
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => 
        {
          //  cy.log($e1.text())

            const text = $e1.text()

            if(text.includes("Python"))
            {
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){

                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })
        
})

})