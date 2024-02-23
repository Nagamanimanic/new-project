import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

import login from "../../pageobject/loginpage.pom";
import dashboard from "../../pageobject/dashboardpage.pom";

Given('User launch the apllication', () => {
    Cypress.on("uncaught:exception", () => {

        return false;
    });


    cy.visit('/web/index.php/auth/login')

})

Then('User Enter username {string} and password {string}', (username, password) => {

    cy.ge(login.usernameInput()).type(username)
    cy.get(login.passwordInput()).type(password)

})

// Then('User enter creds', () => {

//     cy.xpath(login.usernameInput()).type(data.username)
//     cy.get(login.passwordInput()).type(data.password)

// })




And('User clicks on login button', () => {

    cy.get(login.submitbutton()).click()

})

Then('User should be navigated to dashboardpage', () => {

    //cy.contains(dashboard.timeandworkcard()).should('be.visible')
    //or
    cy.get(dashboard.dashboardmenu()).should('be.visible')

    //or

    // cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

    // //or

    // cy.url().should("include", "web/index.php/dashboard/index")


})

Then('User should get login error message', () => {

    cy.contains(login.errormessageInput()).should("be.visible")

})