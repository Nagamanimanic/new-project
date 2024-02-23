
import register from '../../fixtures/shoptools/register.json'
import regidata from '../../pageobject/shoptools.po'
  describe('verify register', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      
      console.error('Uncaught Exception:', err.message);
      
      return false;
  });
  
         it('verify register with details', () =>  {
        cy.visit('https://shop.demoqa.com/my-account/')
        cy.get(regidata.usernameInput()).type(register.username)
        cy.get(regidata.mailidInput()).type(register.email)
        cy.get(regidata.weakpassword()).type(register.weakpassword)
        cy.get(regidata.registerbutton()).should("have.attr", "disabled", "disabled")
        cy.get(regidata.weakpassword()).clear()
        cy.get(regidata.strongpassword()).type(register.strongpassword)
        cy.get(regidata.registerbutton()).click()
        cy.contains(regidata.errormessageInput()).should("be.visible")
        cy.get(regidata.loginusernameshow()).should('have.attr','value','mani')


    })
  })