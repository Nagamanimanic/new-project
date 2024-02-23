import { And } from 'cypress-cucumber-preprocessor'
import dashboard from '../../pageobject/dashboardpage.pom'
import addemployee from '../../pageobject/addemployeepom'

And('user clicks on pim menu', () => {
    cy.get(dashboard.pimmenu()).should('be.visible')
})
And('user clicks on addemployee submenu', () => {
    cy.get(addemployee.addemployeesubmenu()).click()
})
And(' user enters the first name {string} and lastname {string}', (firstname, lastname) => {
    cy.get(addemployee.firstnameInput()).type(firstname)
    cy.get(addemployee.lastnameInput()).type(lastname)
})
And('user clicks on save button', () => {
    cy.get(addemployee.savebutton()).click()
})
And('user should gets successfully saved message', () => {
    cy.contains(addemployee.successmessage()).should('be.visible')
})
