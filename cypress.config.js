const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //if i wanna play with height and width of the page i can use viewportWidth and viewportHeight(for checking the responsiveness of the page)
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com/",

    // viewportWidth: 1280,
    // viewportHeight: 720,
    // watchForFileChanges: false, //to stop the test from running automatically when we change the code
  },
});
