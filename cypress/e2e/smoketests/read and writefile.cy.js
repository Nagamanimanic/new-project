

 describe('example for read and write file',()=>{
    it('writefile',()=>{
        cy.writeFile('cypress/fixtures/readwrite/datawrite',"mani/n")
    })
    it('writefile',()=>{
        cy.writeFile('cypress/fixtures/readwrite/data2write',"hari\n")
    })
    it('add files',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('span[class="B_NuCI"]').then((txt))
        var textvalue=txt.text()
        cy.log(textvalue)
        cy.writeFile('cypress/fixtures/readwrite/data3write',textvalue)
        cy.writeFile('cypress/fixtures/readwrite/flipkart.json',{menutext:textvalue})
    })
    it('to append the data',()=>{
        cy.writeFile('cypress/fixtures/readwrite/data2write',"radha",{flag:'a+'})
    })
    it('to create json data',()=>{
        cy.writeFile('cypress/fixtures/readwrite/data5write.json',{firstname:"radha",lastname:"mani"})
    })
    it.only('readfile example',()=>{
    cy.readFile('cypress/fixtures/pim/logincreds.json').its('username').should('eq','Admin')
    cy.readFile('cypress/fixtures/pim/logincreds.json').should('exist')

    cy.readFile('cypress/fixtures/readwrite/data2write').should('contain','hari');
    cy.readFile('cypress/fixtures/readwrite/data2write').should('contain','hari\nradha')
})
 })