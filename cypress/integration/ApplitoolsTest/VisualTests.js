

describe('Hello world', ()=>{

    //eye.setApiKey("xqzD6ut5RJJnuZ111TknadPwkq2wnsPTVhIpFI54kxNRs110");
   // const apiKey = xqzD6ut5RJJnuZ111TknadPwkq2wnsPTVhIpFI54kxNRs110;


    it('works', ()=>{

        cy.visit('https://applitools.com/helloworld/');

        cy.eyesOpen({

            appName: 'Hello world!',
            testName: 'my first javaScript test!',
            browser: {width:800, height:600},
        });

        cy.eyesCheckWindow('Main Page');
     //   cy.get('button').click();
      //  cy.eyesCheckWindow('Click!');
        cy.eyesClose();

    })

})