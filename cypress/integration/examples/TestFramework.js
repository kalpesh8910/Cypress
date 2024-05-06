/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/ProductPage'

const { data } = require("ospath")

describe('Test Framework', function() {
    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(fixtureData) {
            console.log("Fixture data:", fixtureData); // Logging fixture data for debugging
            this.data = fixtureData;
        })
    })
            
    it('First Test Case', function() { 

        const homepage = new HomePage()
        const productpage = new ProductPage()

        Cypress.env('url') // get url from cypress.config

        console.log("URL:", this.data.url); // Logging URL for debugging

        // It will pause the execusion
        // cy.pause()

        // Open the URL
        cy.visit(Cypress.env('url')+"/angularpractice/shop");
      //  cy.visit(this.data.url);

        // Click on home link
        homepage.clickHomeLink().click();
        
        // Enter name
        homepage.enterName().type(this.data.name);
       
        // Enter email
        homepage.enterEmail().type(this.data.Email);
        
        // Enter password
        homepage.enterPassword().type(this.data.Password);

        // Select the gender
        cy.get('select').select(this.data.gender);

        // Verify two way data binding example input text
        homepage.getTwoWayDataBinding().should('have.value',this.data.name)

        // Verify minlenght attribute
        homepage.verifyMinLength().should('have.attr', 'minlength', '2')

        // Verify the student check box is disabled or enabled
        homepage.verifyStudentCheckbox().should('not.be.disabled')

        // Click on shop button
        homepage.clickShopButton().click()

        this.data.productName.forEach(function(element){

        cy.selectProduct(element)
        })

        // Click on checkput top button
        productpage.clickCheckoutlink().click()

        // get the product amount and sum of both the product
        var sum = 0
        cy.get("tr td:nth-child(4) strong").each(($el, index, $list)=>{

            //cy.log($el.text())
            const amount = $el.text()
            var res = amount.split(" ")
            var res = res[1].trim()
            cy.log(res)
            sum = Number(sum) +Number(res)
                      
        }).then(function()
    {
        cy.log('Actual amount',sum) // it will give the sum of both the prodcut
    })

        // Get the total amount

        cy.get('h3 strong').then(function(element)
        {
            const totalAmount = element.text()
            var res = totalAmount.split(" ")
            var Total = res[1].trim()
            cy.log('Expected amount',Number(Total))
            expect(Number(Total)).to.equal(sum)
        })
        
        // Click on checkout button
        productpage.clickCheckOutButton().click()
        
        // Enter the India in the input box
        productpage.enterLocation().type('India')
        cy.wait(8000)

        // Select the India from drop down
        productpage.selectCountry().click()

        // Click on terms & condition checkbox
        productpage.agreeCheckbox().click()

        // Click on purchase
        productpage.clickOnPurchase().click()

        // Verify the success text
       // productpage.getTextSuccessMSg().should('have.text', productpage.getTextSuccessMSg())
       
       productpage.getTextSuccessMSg().then(function(element)
    {
        const actualText = element.text()
        cy.log(actualText)
        expect(actualText.includes('Success')).to.be.true
    })
       
    });

   
});
