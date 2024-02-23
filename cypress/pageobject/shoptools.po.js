     class register{
        usernameInput(){
            return '#reg_username'
        }
        mailidInput(){
            return 'input[name="email"]'
        }
        weakpassword(){
            return '#reg_password'
        }
       
            strongpassword(){
                return '#password'
            }
            registerbutton(){
                return '.woocommerce-Button'
            }
            errormessageInput(){
                return 'Error:'
            }
            loginusernameshow(){
                return '#username'
            }
             }
             const regidata = new register()
             export default regidata;


     