

        // describe('test suite',() =>{
        //     it('testcase',function(){
        //         cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        //         cy.contains('ADD TO CART').click({multiple:true})
        //     })
        // })


       
                
        //  describe('test suite',() =>{
        //     it('testcase',function(){
        //         cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')        
        //         cy.get('.nomargin').uncheck()
                
        //     })
        // })

        describe('test suite',() =>{
            it('testcase',function(){
                cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
                cy.get("select[name^='DOB_Month']").select("MAY")
            })
        })



