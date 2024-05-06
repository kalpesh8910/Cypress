    /// <reference types="Cypress" />

describe('My First Test Suite', function()
{
    it('My First Test Case', function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('ca')

        cy.wait(2000)

        cy.get('.product:visible').should('have.length', 4)

        // Parent child chaining
        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').should('have.length', 4)

        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
    {
        console.log('Hello..')
    })
        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {

            const textveg = $e1.find('h4.product-name').text()
            if(textveg.includes('Cashews'))
            {
                cy.wrap($e1).find('button').click()
            }   
        })

        // assert if logo text is displayed or not 
        cy.get('.brand').should('have.text', 'GREENKART')

        // This is to print in logs
        cy.get('.brand').then(function(logoelement)
    {
        cy.log(logoelement.text())

    })
    })

})