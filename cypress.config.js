const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      true
    },
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "video": false,
    "experimentalSessionAndOrigin": true
  },
});
