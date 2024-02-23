    import login from "../../pageobject/loginpage.pom"
    import dashboard from "../../pageobject/dashboardpage.pom"
    import logindata from "../../fixtures/PIM/logincreds.json"
    import addemployee from "../../pageobject/addemployeepom"
    import regidata from '../../pageobject/shoptools.po'
    import registerdata from '../../fixtures/shoptools/register.json'
   
    const     availablefixtures = [
            {
                "name":"datadriven/data1",
                "context":"nagumani"
            },

            {
                "name":"datadriven/data2",
                "context":"harikrishna"
            },

            {
                "name":"datadriven/data3",
                "context":"radhakrishna"
            },

            {
                "name":"datadriven/data4",
                "context":"tejukanna"
            },

            {
                "name":"datadriven/data5",
                "context":"dbsqa"
            }


        ]

        describe("add employee",function (){
            availablefixtures.forEach((afixture)=>{
                describe(afixture.context,()=>{
                    before(function (){
                        cy.fixture(afixture.name).then((data)=>{
                            this.data=data;
                        })
                    })


        it("verify add employee mandatory details",function (){
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get(login.usernameInput()).type(logindata.username)
         cy.get(login.passwordInput()).type(logindata.password)
         cy.get(login.loginbutton()).click()
         cy.contains(dashboard.dashboardmenu()).should("be.visible")
         cy.contains(dashboard.pimmenu()).click()
         cy.contains(addemployee.addemployeesubmenu()).click()
         cy.get(addemployee.firstnameInput()).type(this.data.firstname)
         cy.get(addemployee.lastnameInput()).type(this.data.lastname)
         cy.get(addemployee.savebutton()).click()
         cy.contains(addemployee.successmessage()).should('be.visible')
                            })
                        })
                    })
        })



     describe('verify register functionality',()=>{

        before(function(){
    
            cy.fixture('Register').then(function(data){
    
                this.data=data;
            })
        })
    
       it.only('understanding fixtures',()=>{
          cy.visit('https://shop.demoqa.com/my-account/')
          cy.get('#reg_username').type(this.data.username);
          cy.get('#reg_email').type(this.data.emailaddress);
          //type the weak password
          cy.get('#reg_password').type(this.data.weakpassword);
          cy.get('#reg_password').clear();
          cy.wait(2000);
          cy.get('#reg_password').type(this.data.weakpassword);
          //verify register button is disabled 
          cy.get("button[name='register']").should('be.disabled');
          cy.get("button[name='register']").should("have.attr","disabled","disabled");
           //cleart the password field
      
      //type strong password and type strong password
      cy.get('#reg_password').clear().type(this.data.strongPassword);
      cy.get("button[name='register']").should('not.be.disabled');
      cy.get("button[name='register']").should('be.enabled');
      //clicked on register button
      cy.get("button[name='register']").click();

      //verify the username already exists

      cy.get('#username').should('have.value',this.data.username);
      cy.get('#username').should('have.attr',"value",this.data.username);
       })

})
    