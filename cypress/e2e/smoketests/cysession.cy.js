      import login from "../../pageobject/loginpage.pom";
      import logindata from '../../fixtures/PIM/logincreds.json';
      import addemployee from "../../pageobject/addemployeepom";
     // import addEmployee from '../../fixtures/PIM/addemployee.json';
      import dashboard from "../../pageobject/dashboardpage.pom";
      
      
      describe('orange hrm',()=>{
        beforeEach(()=>{
            cy.session('login',()=>{
                cy.visit('/web/index.php/auth/login')
                cy.get(login.usernameInput()).type(logindata.username)
                cy.get(login.passwordInput()).type(logindata.password)
                cy.get(login.loginbutton()).click()
            })
        })
        it('validate dashboard',()=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
            cy.wait(2000)
        })
        it('validate pim',()=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
            cy.wait(2000)
        })
        it('validate addemployee',()=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee')
            // cy.get(addemployee.firstnameInputdat()).type(addemployee.firstname)
            // cy.get(addemployee.lastnameInputdat()).type(addemployee.lastname)
            // cy.get(addemployee.savebutton()).click()
            cy.addemployee("nagu","mani")
        })
      })