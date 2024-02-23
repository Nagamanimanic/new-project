import { Given, Then, When, And } from 'cypress-cucumber-preprocessor'
import login from '../../pageobject/loginpage.pom'
import dashboard from '../../pageobject/dashboardpage.pom'

Given('ser launch the application', () => {
    cy.visit('web/index.php/auth/login')
})
Then('user enter the username {string} and password {string}', (username, password) => {
    cy.get(login.usernameInput()).type(username)
    cy.get(login.passwordInput()).type(password)
})
When('user clicks on login button', () => {
    cy.get(login.loginbutton()).click()
})
And('user should navigared to dashboardpage', () => {
    cy.contains(dashboard.dashboardmenu()).should('be.visible')
})
And('user should get errormessage invalid credentials', () => {
    cy.contains(login.errormessageInput()).should('be.visible')
})
