      class createaccount{

        fullnameInput(){
            return 'input[name^="name"]'
        }
        reddifmailid(){
            return '#wrapper'
        }
        password(){
          return '#newpasswd'
        }
        retypepassword(){
          return '#newpasswd1'
        }
        alternateemail(){
          return 'input[name^="altemail"]'
        }
        mobileno(){
          return '#mobno'
        }
        day(){
          return 'select[name^="DOB_Day"]'
        }
        month(){
          return 'select[name^="DOB_Month"]'
        }
        year(){
          return 'select[name^="DOB_Year"]'
        }
        checkbox(){
          return '.nomargin'
        }
        dropques(){
          return 'select[name^="hintq"]'
        }
        answer(){
          return 'input[name^="hinta"]'
        }
        mothersname(){
          return '[name^="mothername"]'
        }
        radiobutten(){
          return 'Female'
        }
        country(){
          return '#country'
        }
        city(){
          return 'select[name^="city"]'
        }
        gender(){
          return 'input[name^="gender"][value="f"]'
        }
      }
      const createdata=new createaccount()
      export default createdata;