

import datadrivtwo from '../../fixtures/addemp2/datadrivtwo.json';
import addemployee from "../../pageobject/addemployeepom";
import dashboard from "../../pageobject/dashboardpage.pom";
import login from "../../pageobject/loginpage.pom";
import logindata from '../../fixtures/PIM/logincreds.json'
import { beforeEach } from 'mocha';



describe('automation-datadriven testing', () => {
 beforeEach(()=>{
  cy.session('login session',()=>{
    cy.visit('/web/index.php/auth/login')
    cy.get(login.usernameInput()).type(logindata.username)
    cy.get(login.passwordInput()).type(logindata.password)
    cy.get(login.loginbutton()).click()
  })
 })
  datadrivtwo.forEach((data) => {
    it("verify add employee mandatory details", () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')
      cy.addemployee(data.firstname, data.lastname)
      cy.contains(addemployee.successmessage()).should('be.visible')
    })
  })
})





