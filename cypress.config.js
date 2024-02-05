const { defineConfig } = require("cypress");

module.exports = defineConfig({
  pageLoadTimeout: 200000,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://lojaebac.ebaconline.art.br'
  },
    projectId: '6qdsw5',
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "mochawesome-report",
      overwrite: false,
      html: false,
      json: true,
    },
    browser: "electron",
    video: false,
    screenshot: true
});

