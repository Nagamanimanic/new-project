const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
         'baseUrl' : 'https://opensource-demo.orangehrmlive.com/',
         'video':true,
         'pageLoadTimeout':120000,
         'defaultCommandTimeout':20000,
         'viewportWidth':1920,
         'viewportHight':1080,
          'env':  {
         
                 "username": 'Adminuu',
                 "password": 'admin12345',
                 "endpoint": 'https://qa.opensource-demo.orangehrmlive.com/web/index.php/auth/login'
          },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});