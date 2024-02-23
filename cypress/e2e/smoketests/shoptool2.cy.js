import register from '../../fixtures/shoptools/register.json'
import regidata from '../../pageobject/shoptools.po'
  describe('verify register', () => {

       before(function () {
        cy.fixture('register').then(function(data){
            this.data=data;
        })
       })

         it('verify register with details', () =>  {
        cy.visit('https://shop.demoqa.com/my-account/')
        cy.get(regidata.usernameInput()).type(this.data.username)
        cy.get(regidata.mailidInput()).type(this.data.email)
        cy.get(regidata.weakpassword()).type(this.data.weakpassword)
        cy.get(regidata.registerbutton()).should("have.attr", "disabled", "disabled")
        cy.get(regidata.weakpassword()).clear()
        cy.get(regidata.strongpassword()).type(this.data.strongpassword)
        cy.get(regidata.registerbutton()).click()
        cy.contains(regidata.errormessageInput()).should("be.visible")
        cy.get(regidata.loginusernameshow()).should('have.attr','value','mani')


    })
  })