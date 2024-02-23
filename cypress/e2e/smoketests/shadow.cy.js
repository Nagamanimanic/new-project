describe('shadow',()=>{
    it('example for shadow',()=>{
        cy.visit('http://watir.com/example/shadow-dom.html')
        cy.get('#shadow-host').shadow().find('input[type="text"]').type('mani')
        cy.get('#shadow-host').shadow().find('input[type="checkbox"]').check()
    })
})