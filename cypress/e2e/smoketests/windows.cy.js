


  describe('if there is no target',()=>{
    it('wotrk with windows',()=>{
        Cypress.on('uncaught:exception',()=>{
            return false;
        })
        cy.visit('https://demoqa.com/browser-windows',{
            onBeforeLoad(win){
                cy.stub(win,'open')
            }
        })
        cy.get('#tabButton').click()
        cy.window().its('open').should('be.called')
        cy.visit('https://demoqa.com/sample')
        cy.get('#sampleHeading').should('be.visible')
    })
  })