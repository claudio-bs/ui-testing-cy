const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //projectId: 'yhug',
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: true,
      json: true,
    },
    browser: "electron",
    video: true,
    screenshot: true,
    baseUrl: 'http://lojaebac.ebaconline.art.br',
    setupNodeEvents(on, config) {},
  },
});

