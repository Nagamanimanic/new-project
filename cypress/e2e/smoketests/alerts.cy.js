    describe("alerts", () =>{
         
        beforeEach(()=>{
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        })
    

        it('simple alerts',  () =>{
            cy.contains('Click for JS Alert').click();

            cy.on('window:alert',(alert)=>{
                expect(alert).to.equal('I am a JS Alert')
                return true

            })
        })
        it('confirm alerts with -ok',  () => {
            cy.contains('Click for JS Confirm').click();
            cy.on('windows:Confirm',(Alert)=>{
                expect(Alert).to.equal('I am a JS Confirm')
                return true;

            })
        })
        it('confirm alerts with cancel',()=>{
            cy.contains('Click for JS Confirm').click();
            cy.on('windows:Confirm',()=>{
               // expect(Alert).to.equal('I am a JS Confirm')
                return false;

            })
        })
        it('prompt alerts with ok',()=>{
            cy.window().then((win)=>{
            cy.stub(win,'prompt').returns("nagamani"); 
            cy.contains('Click for JS Prompt').click();
            })
            cy.on('windows:Prompt',(Alert)=>{
                expect(Alert).to.equal('I am a JS Prompt')
                return true;

            })
        })
        it('prompt alerts with cancel',()=>{
            cy.window().then((win)=>{
            cy.stub(win,'prompt').callsFake(() =>null)
            cy.contains('Click for JS Prompt').click();
           // cy.on('windows:Prompt',()=>{
               // expect(Alert).to.equal('I am a JS Prompt')
               // return false;
            })
        })
    })

