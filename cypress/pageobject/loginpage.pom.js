         
         class loginpage{

            logo(){
                   return 'img[alt="company-branding"]'
            
         }
         usernameInput(){

            return 'input[name="username"]'
         }
         passwordInput(){
            return 'input[type="password"]'
         }
         loginbutton(){
            return 'button[type="submit"]'
         }
         errormessageInput(){
            return 'Invalid credentials'
         }
         loginwithcreds(username,password){
        cy.get(login.usernameInput()).type(username)
        cy.get(login.passwordInput()).type(password)
        cy.get(login.loginbutton()).click()
         }
        
        }
         const login= new loginpage()
        
         export default login;


































         
 