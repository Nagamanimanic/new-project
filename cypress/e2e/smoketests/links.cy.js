describe('work with links',()=>{
    it('links',()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('a').should('have.length',356)
        cy.get('a').contains('Commons').click()
        cy.origin('https://commons.wikimedia.org/wiki/Main_Page',()=>{
            cy.url().should('include','wiki/Main_Page')
            cy.url().should('eq','https://commons.wikimedia.org/wiki/Main_Page')
            cy.get('.mainpage-welcome-sitename').should('contain.text','Wikimedia Commons')
        })
    })
    //when we dont know the length
    it('dont know length',()=>{
        cy.visit('https://commons.wikimedia.org/wiki/Main_Page')
        cy.get('a').its('length').then((elementlength)=>{
            var lengthcount=elementlength
            cy.log(lengthcount)
            expect(lengthcount).to.be.within(600,700)
        })
    })
    it('section know length',()=>{
        cy.visit('https://commons.wikimedia.org/wiki/Main_Page')
        cy.get('.vector-menu-content-list').eq(8).find("a").its('length').then((elelength)=>{
            cy.log(elelength)
            expect(elelength).to.equal(3)
        })
    })
        //extract text from element
        it('extract text',()=>{
            cy.visit('https://commons.wikimedia.org/wiki/Main_Page')
            cy.get('.mainpage-box-content').eq(6).then((txt)=>{
                var eletext=txt.text()
                cy.log(eletext)
            })
        })
        it.only('extract text',()=>{
            cy.visit('https://commons.wikimedia.org/wiki/Main_Page')
            cy.get('a[href="/wiki/Special:RecentChanges"]').then((txt)=>{
                var eletext2=txt.text()
                cy.log(eletext2)
            })
        })
    })

