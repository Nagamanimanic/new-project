   describe('conditional testing',()=>{
    it('exaple',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.title().should('eq','Wikipedia')
    })
    it('if you find wikiyage then click on that',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('body').then((Text)=>{
           if(Text.find('span[data-jsl10n="wikivoyage.name"]').length>0){
            cy.get('span[data-jsl10n="wikivoyage.name"]').click()
            cy.origin('https://www.wikivoyage.org/',()=>{
                cy.title().should('eq','Wikivoyage')
            })
           }
           else{
            cy.get('span[data-jsl10n="wiktionary.name"]').click()
            cy.origin('https://www.wiktionary.org/',()=>{
                cy.title().should('eq','Wiktionary')
            })
           }
        })
    })
   })