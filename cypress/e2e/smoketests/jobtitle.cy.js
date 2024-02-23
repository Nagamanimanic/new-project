 import data from "../../fixtures/Admin/addjobtitle.json"
 
 
 describe('verify add job title funtionality ', () => {
    it('verifying adding jobtitle', () => {

      
        cy.visit(Cypress.env("endpoint"))
       // cy.wait(20000)
        
       cy.get('input[name="username"]',{timeout:40000}).type(Cypress.env("username"))
        cy.get('input[type="passwordert"]').type(Cypress.env("password"))
        cy.get('button[type="submit"]').click()

        cy.contains('Time at Work').should('be.visible')
        
        
        cy.contains('Admin').click()
        cy.contains('Job').click()
        cy.contains('Job Titles').click()
        cy.contains('Add').click()
        let randomtext=(Math.random()+1).toString(36).substring(7);
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > form > div:nth-child(1) > div > div:nth-child(2) > input').type(data.jobtitle+randomtext)
        cy.get('[placeholder="Type description here"]').type(data.jobdiscription)
            
        cy.get('[type="submit"]').click()
        cy.contains('Successfully Saved').should('be.visible')


    })

})