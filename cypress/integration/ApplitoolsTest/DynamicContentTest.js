

describe('Herokuapp', ()=>{

    //eye.setApiKey("xqzD6ut5RJJnuZ111TknadPwkq2wnsPTVhIpFI54kxNRs110");
   // const apiKey = xqzD6ut5RJJnuZ111TknadPwkq2wnsPTVhIpFI54kxNRs110;

    it('works', ()=>{

        cy.visit('https://the-internet.herokuapp.com/dynamic_content');

        cy.eyesOpen({

            appName: 'Test Cases 2',
            testName: 'Dynamic Content changes Test Case!',
            browser: {width:800, height:600},
        });

        cy.eyesCheckWindow('Home Screen');
       // cy.get('button').click();
      //  cy.eyesCheckWindow('Click!');
        cy.eyesClose();

    })

})