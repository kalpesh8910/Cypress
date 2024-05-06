

describe('Number differences', ()=>{

    //eye.setApiKey("xqzD6ut5RJJnuZ111TknadPwkq2wnsPTVhIpFI54kxNRs110");
   // const apiKey = xqzD6ut5RJJnuZ111TknadPwkq2wnsPTVhIpFI54kxNRs110;


    it('works', ()=>{

        cy.visit('https://applitools.com/helloworld/?diff1');

        cy.eyesOpen({

            appName: 'Hello world!',
            testName: 'Verify number changes..',
            browser: {width:800, height:600},
        });

        cy.eyesCheckWindow('Dynamic Number');
     //   cy.get('button').click();
      //  cy.eyesCheckWindow('Click!');
        cy.eyesClose();

    })

})