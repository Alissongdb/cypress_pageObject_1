const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    baseUrl:'https://www.automationpratice.com.br',
    defaultCommandTimeout: 5000,
    viewportHeight: 1920,
    viewportWidth: 1080,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
