const { defineConfig } = require("cypress");
//const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
//const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

//async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  //await preprocessor.addCucumberPreprocessorPlugin(on, config);

  //on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  //return config;
//}

module.exports = defineConfig({
  projectId: "vx4zfa",
 // chromeWebSecurity:false,
  defaultCommandTimeout: 8000,
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://rahulshettyacademy.com/",
  },

  retries: {
    runMode: 1,
  },

  //projectId: "3ahn58",

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
 //   setupNodeEvents,
    //specPattern: "cypress/integration/examples/*.js",
   // specPattern: "cypress/integration/ApplitoolsTest/*.js",
    specPattern: "cypress/integration/examples/*.js",
   // specPattern: "cypress/integration/examples/BDD/*.feature",
    screenshotsFolder: "cypress/screenshots",
  },
});


require('@applitools/eyes-cypress')(module);
