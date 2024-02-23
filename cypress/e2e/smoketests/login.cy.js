
    import data from '../../fixtures/logincreds.json'
    import logindata from '../../pageobject/loginpage.pom'
    import login from '../../pageobject/loginpage.pom'
     import dashboard from '../../pageobject/dashboardpage.pom'
    // import dashboard from '../../pageobject/dashboardpage.pom'
     describe('verify login functionality', function() { 

          before("launch the application", () => {
            cy.log("testcase start")
          })

          beforeEach("launch the application", () =>{
          cy.visit('web/index.php/auth/login')
        // cy.contains(login.logo()).should(be.visible)
            })

            afterEach("launch the application", () => {
             cy.log("testcase is completed")
            })

            after("launch the application", () => {
               cy.log("all test cases completed")
            })    
         
     var creds =
     { 
     username : "Admin",
     password : "admin123"
    }
       var credentials=["Admin","admin123"]

     var  menuitems={

        menu1:"Admin",
        menu2:"PIM",
        menu3:"Leave",
        menu4:"My Info"
      }

    it.only('verify login functionality with valid credentials', () => {
        cy.visit('web/index.php/auth/login')
        login.loginwithcreds(creds.username,creds.password)
        // cy.get(login.usernameInput()).type(credentials[0])
        // cy.get(login.passwordInput()).type(credentials[1])
        // cy.get(login.loginbutton()).click()
        cy.contains(dashboard.timeatworkcard()).should('be.visible')

        for(let items in menuitems){
            cy.contains(dashboard.dashboardmenu()).should("be.visible")
       }
       


    })
 it('verify login functionality with valid username and invalid password', () => {
         cy.visit('web/index.php/auth/login')
         cy.xpath(login.usernameInput()).type('Admin')
         cy.get(login.passwordInput()).type('admin1234567')
         cy.get(login.loginbutton()).click()

         cy.contains(login.errormessageInput()).should('be.visible')
          
          
         
     
    
    })

    
    it('verify login functionality with invalid username and valid password', () => {
      // cy.viewport("ipad-mini","landscape")
        cy.visit('web/index.php/auth/login')
        cy.get(login.usernameInput()).type('Adminhgyf')
        cy.get(login.passwordInput()).type('admin123')
        cy.get(login.loginbutton()).click()
        

        cy.contains(login.errormessageInput()).should('be.visible')


        
    })

    
    it('verify login functionality with invalid credentials', () => {
       // cy.viewport(375,667)
        cy.visit('web/index.php/auth/login')
        cy.get(login.usernameInput()).type('Adminhgyf')
        cy.get(login.passwordInput()).type('admin12345678')
        cy.get(login.loginbutton()).click()

        cy.contains(login.errormessageInput()).should('be.visible')



        
    })

    

    })
