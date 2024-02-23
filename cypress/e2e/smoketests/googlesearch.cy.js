describe('verify addemployee functionality',() => { 
    it.only('verify addemployee with mandatory details',()=> {
      


   cy.visit('https://www.google.com/')
   cy.get('textarea[title="Search"]').type('charminar{enter}')
    })
})