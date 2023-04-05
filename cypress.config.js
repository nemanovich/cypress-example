const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hb6j2f',
  e2e: {
    baseUrl: 'https://todomvc.com/examples/react',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
