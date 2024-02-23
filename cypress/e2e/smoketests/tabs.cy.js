


       describe('test suite',()=>{
        it('work with tabs',()=>{
            Cypress.on("uncaught:exception",(err,runnable)=>{
                return false;
            })
            cy.visit('https://www.cypress.io/')
            
            cy.contains('Installing Cypress').invoke('removeAttr','target').click({force:true})
            
            cy.url().should('include','https://docs.cypress.io/guides/getting-started/installing-cypress')
        })

        //flipcart
        it('add to cart in flipcart',()=>{
            Cypress.on("uncaught:exception",(err,runnable)=>{
                return false;
            })
       cy.visit('https://www.flipkart.com/')
       cy.get('input[name="q"]').type('shoe for women').click({force:true})
       cy.get('span[class="B_NuCI"]').invoke('removeAttr','target').click({force:true})
       cy.url().should('include','https://www.flipkart.com/layasa-sneakers-women/p/itm6e7605e058a36?pid=SHOGK8JH6GECEZBG&lid=LSTSHOGK8JH6GECEZBGQFE3KO&marketplace=FLIPKART&q=shoe+for+women&store=osp%2Fiko&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=en_Xwc7K2urzaYgf_Js87JT0leSOI4lZ_AnCaTiqQZXMDvWJBmkppzr0Ip_oHvKcjSoz29ig1RyMxlaVH54Lx0H0g%3D%3D&ppt=sp&ppn=sp&ssid=f4rho7lu1c0000001708325264699&qH=8fe1ae373edf1aa3s://www.flipkart.com/?q=shoes+for+women&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&as-pos=1&as-type=HISTORY')
            
       // cy.get('span[class="B_NuCI"]').invoke('removeAttr','target').click({force:true})
        
       // cy.url().should('include','https://www.flipkart.com/search?q=shoes+for+women&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off&as-pos=1&as-type=HISTORY')
       cy.get('button[class="_2KpZ6l _2U9uOA _3v1-ww"]').click()
})
})




describe('test suite',()=>{
    it.only('work with tabs',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._3sdu8W emupdz').each((prod)=>{
            var textval=prod.text()
            cy.log(textval)
        })
    })
})