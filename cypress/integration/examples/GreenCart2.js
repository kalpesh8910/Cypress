    /// <reference types="Cypress" />

describe('My First Test Suite', function()
{
    it('My First Test Case', function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('ca')

        cy.wait(2000)

        // Parent child chaining
        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {

            const textveg = $e1.find('h4.product-name').text()
            if(textveg.includes('Cashews'))
            {
                cy.wrap($e1).find('button').click()
            }   
        })

        // Click on bag image
        cy.get('.cart-icon > img').click()
        cy.wait(2000)

        // Click on proceed to checkout
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.wait(2000)

        // Click on place order
        cy.contains('Place Order').click()
    })

})