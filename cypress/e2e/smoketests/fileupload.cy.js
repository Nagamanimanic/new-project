  describe('fileupload',()=>{
    it('example for upload',()=>{
        cy.visit('https://cgi-lib.berkeley.edu/ex/perl5/fup.html')
        // cy.get('input[name="upfile"]').attachFile('upload/9. ieee-829.pdf')
        // cy.get('input[type="submit"]').click()
        // cy.contains("cgi-lib.pl: Request to receive too much data: 183907 bytes").should('be.visible')
    
    //without plugin 
    cy.get('input[name="upfile').selectFile('cypress/fixtures/upload/xlxltojson.xlsx','cypress/fixtures/upload/samplefile')
    cy.get('input[type="submit"]').click()
    cy.contains("You've uploaded a file. Your notes on the file were:").should('be.visible')
    })
    it('example for download file',()=>{
        cy.downloadFile('https://www.google.com/search?q=mg+hector&tbm=isch&ved=2ahUKEwi1-Mi-0LSEAxVgtGMGHee_DlgQ2-cCegQIABAA&oq=mg&gs_lp=EgNpbWciAm1nKgIIADIIEAAYgAQYsQMyCBAAGIAEGLEDMgQQABgDMggQABiABBixAzILEAAYgAQYsQMYgwEyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyCBAAGIAEGLEDMgQQABgDSJxWUK4FWPg6cAF4AJABBJgB8QGgAY8MqgEFMC45LjG4AQHIAQD4AQGKAgtnd3Mtd2l6LWltZ6gCCcICEBAAGIAEGIoFGEMYsQMYgwHCAg4QABiABBiKBRixAxiDAcICBxAjGOoCGCfCAgoQABiABBiKBRhDiAYB&sclient=img&ei=9tTRZbWlLuDojuMP5_-6wAU&bih=599&biw=1366&rlz=1C1RXQR_enIN1041IN1041#imgrc=POffQUhWCuSgFM','cypress/downloads','imgrc.jpg')
        cy.readFile('cypress/downloads/imgrc').should('exist')
        })
  })