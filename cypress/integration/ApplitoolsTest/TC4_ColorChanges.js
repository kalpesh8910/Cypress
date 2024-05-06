

describe('Color Changes', ()=>{

    //eye.setApiKey("xqzD6ut5RJJnuZ111TknadPwkq2wnsPTVhIpFI54kxNRs110");
   // const apiKey = xqzD6ut5RJJnuZ111TknadPwkq2wnsPTVhIpFI54kxNRs110;


    it('works', ()=>{

        cy.visit('https://applitools.com/helloworld/?diff1');

        cy.eyesOpen({

            appName: 'Hello world!',
            testName: 'Verify Color Changes',
            browser: {width:800, height:600},
        });

        cy.eyesCheckWindow('Main Page');
     //   cy.get('button').click();
      //  cy.eyesCheckWindow('Click!');
        cy.eyesClose();

    })

})