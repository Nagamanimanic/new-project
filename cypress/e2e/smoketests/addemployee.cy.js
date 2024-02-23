  import logindata from '../../fixtures/PIM/logincreds.json'
  import addemployeedata from '../../fixtures/PIM/addemployee.json'
  import login from '../../pageobject/loginpage.pom'
  import dashboard from '../../pageobject/dashboardpage.pom'
  import addemployee from '../../pageobject/addemployeepom'
  describe('verify addemployee functionality',() => { 
     //for(let i=0;i<=9;i++){


    //   var creds =
    //   { 
    //   username : "Admin",
    //   password : "admin123"
    //  }
     
    it.only('verify addemployee with mandatory details',()=> {
      
        cy.visit('web/index.php/auth/login')
       // login.loginwithcreds(creds.username,creds.password)
        cy.get(login.usernameInput()).type(logindata.username)
        cy.get(login.passwordInput()).type(logindata.password)
        cy.get(login.loginbutton()).click()
      // cy.contains(dashboard.dashboardmenu()).should('be.visible')
       cy.addemployee("mani","c")
        // cy.contains(dashboard.pimmenu()).click()
        // cy.contains(addemployee.addemployeesubmenu()).click()
        // cy.get(addemployee.firstnameInput()).type(addemployeedata.firstname)
        // cy.get(addemployee.lastnameInput()).type(addemployeedata.lastname)
       // cy.get(addemployee.savebutton()).click()
    })
        
        it('verify addemployee with mandatory details',()=> {
      
          cy.visit('web/index.php/auth/login')
          login.loginwithcreds(creds.username,creds.password)
          // cy.get(login.usernameInput()).type('Admin')
          // cy.get(login.passwordInput()).type('admin123')
          // cy.get(login.loginbutton()).click()
          cy.contains(dashboard.dashboardmenu()).should('be.visible')
          cy.contains(dashboard.pimmenu()).click()
          cy.contains(addemployee.addemployeesubmenu()).click()
    
          cy.get(addemployee.savebutton()).click()
          cy.contains(addemployee.requiredtext()).should('be.visible')
         // cy.contains('Required').should('be.visible')
          
      
    })
    })