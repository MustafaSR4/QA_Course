const { defineConfig } = require("cypress");
const fs = require('fs-extra');
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";


module.exports = defineConfig({
  //if i wanna play with height and width of the page i can use viewportWidth and viewportHeight(for checking the responsiveness of the page)
  allowCypressEnv: true, //to allow us to use environment variables in the cypress.config.js file and we can access them using Cypress.env() method in the test cases and we can also set them using the command line when we run the test cases using npx cypress run --env key=value  

  e2e: {
        specPattern: "cypress/e2e/**/*.feature", //.feature for feature files and only show them 
                // specPattern: "cypress/e2e/**/*.{feature,cy.js}", //.feature for feature files and only show them 

     async setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  on("before:run", async () => {
    await fs.remove("cypress/QAReport");
  });

  return config;
},
    baseUrl: "https://www.saucedemo.com/",

    // viewportWidth: 1280,//to set the width of the page to 1280 pixels when we run the test cases and this is useful for checking the responsiveness of the page and for taking screenshot for the test cases that are failed and for the test cases that are passed and for all test cases with a specific width and height
    // viewportHeight: 720,//to set the height of the page to 720 pixels when we run the test cases and this is useful for checking the responsiveness of the page and for taking screenshot for the test cases that are failed and for the test cases that are passed and for all test cases with a specific width and height
    // watchForFileChanges: false, //to stop the test from running automatically when we change the code
    screenshotOnRunFailure: false, //(default value) to take screenshot for the test case that is failed its just for npx cypress run not for npx cypress open because in npx cypress open we can take screenshot for the test case that is failed by clicking on the test case that is failed and then clicking on the screenshot button in the test runner
    //  screenshotsFolder: "cypress/QAscreenshots", //to specify the folder where the screenshots will be saved
    trashAssetsBeforeRuns: true, //to delete the screenshots and videos that are taken for the test cases that are failed before running the test cases again to avoid confusion between the old screenshots and videos and the new ones
    video: false, //to enable video recording for the test cases that are failed and for the test cases that are passed and for all test cases
    //videoUploadOnPasses: true, (its for version 13 in cypress)//to disable video recording for the test cases that are passed and enable it for the test cases that are failed
   // videosFolder: "cypress/QAvideos", //to specify the folder where the videos will be saved
   // videoCompression: 0:51, //to specify the level of compression for the videos that are recorded for the test cases that are failed and for the test cases that are passed and for all test cases (the value can be between 0 and 51, where 0 means no compression and 51 means maximum compression)
   // videoUploadOptions: { //to specify the options for uploading the videos that are recorded for the test cases that are failed and for the test cases that are passed and for all test cases to a cloud storage service like AWS

   reporter: "mochawesome",
      reporterOptions: {
        reportDir: "cypress/QAReport", // where to save in directory
        overwrite: false,
        html: true,
        json: false,
        timestamp: "mmddyyyy_HHMMss"
      },
  },
});
