/// <reference types="Cypress" />

import { func } from "assert-plus"


describe('Calendar test', function(){

    it('verify date selection', function(){

       const monthNumber = "12";
       const date = "12";
       const year = "2028";
       const expectedList = [monthNumber, date, year];

      // Visit the webiste  
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers');

      // Click on Deleivery date input field
      cy.get('.react-date-picker__inputGroup').click();

      // Click on Month
      cy.get('.react-calendar__navigation__label').click();
    
      // Click on Year
      cy.get('.react-calendar__navigation__label').click();
      
      // Select year
      cy.contains("button", year).click();
        
      // Select monthnumber
      cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click() 

      // Select date
      cy.contains("abbr", date).click();

      // Assertion
        cy.get(".react-date-picker__inputGroup__input").each(($e1, index)=>
    {
        cy.wrap($e1).invoke('val').should('eq', expectedList[index])
    })

    })

})