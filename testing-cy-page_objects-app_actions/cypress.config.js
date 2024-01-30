const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://lojaebac.ebaconline.art.br'
  },
    projectId: 'yhug',
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

