

describe('mouseactions',()=>{
    it('clickactions',()=>{
        cy.visit('https://www.programsbuzz.com/')
        cy.get('div[class="slide__description"]').rightclick({force:true})
        cy.log('check the contextmenu')
        cy.contains('Tutorials').trigger("mouseover")
        cy.log('Hovering on Tutorials')
        cy.contains('Contact').dblclick({force:true})
    })
    it.only('scrollintoview',()=>{
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.get("#Debugging-tests").scrollIntoView()
    })
})