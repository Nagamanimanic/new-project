     
       class addemployeepage{
                addemployeesubmenu(){
                return 'Add Employee'
                }
             
               firstnameInput(){
                return 'input[name="firstName"]'
               }
               lastnameInput(){
                return 'input[placeholder="Last Name"]'
               }
               savebutton(){
               return 'button[type="submit"]'
               }
               successmessage(){
               return 'Successfully Saved'
               }
                requiredtext(){
        return ' * Required'
       }
       loginwithcreds(username,password){
         cy.get(login.usernameInput()).type(username)
         cy.get(login.passwordInput()).type(password)
         cy.get(login.loginbutton()).click()
          }
         }
    const addemployee= new addemployeepage()

       export default addemployee;






















       



        