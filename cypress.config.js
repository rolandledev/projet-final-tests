const { defineConfig } = require('cypress');
const mochawesome = require('cypress-mochawesome-reporter/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configurer mochawesome reporter
      mochawesome(on);

      // Ajoutez d'autres event listeners ici si nécessaire
    },
    video: true, // Activer l'enregistrement vidéo
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: false,
    },
  },
});
