

   describe('work with iframes',()=>{
    it('iframe checkbox',()=>{
        cy.visit('https://jqueryui.com/checkboxradio/')
        cy.get('label[for="checkbox-1"]').check()
    })
    it.only('check box using ifarme',()=>{
        cy.visit('https://jqueryui.com/checkboxradio/')
        cy.get('iframe[class="demo-frame"]').then(($ifarme)=>{
            let checkbox2=$ifarme.contents().find('label[for="checkbox-2"]')
            cy.wrap(checkbox2).click()
        })
    })
   })