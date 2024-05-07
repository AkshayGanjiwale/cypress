const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'e2e/**/*.cy.{js,jsx,ts,tsx}',
    watchForFileChanges: false,
    defaultCommandTimeout: 6000,
    chromeWebSecurity: false,
    env: {
      baseURL : ""
  },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
