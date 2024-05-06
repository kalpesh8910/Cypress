

describe('Image and Text differences', ()=>{

    //eye.setApiKey("xqzD6ut5RJJnuZ111TknadPwkq2wnsPTVhIpFI54kxNRs110");
   // const apiKey = xqzD6ut5RJJnuZ111TknadPwkq2wnsPTVhIpFI54kxNRs110;


    it('works', ()=>{

        cy.visit('https://the-internet.herokuapp.com/dynamic_content');

        cy.eyesOpen({

            appName: 'herokuall!',
            testName: 'Verify Image and Text differences..',
            browser: {width:800, height:600},
        });

        cy.eyesCheckWindow('Dynamic Image and text');
     //   cy.get('button').click();
      //  cy.eyesCheckWindow('Click!');
        cy.eyesClose();

    })

})