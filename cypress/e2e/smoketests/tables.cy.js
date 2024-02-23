
  describe('tables',()=>{
    it('example of table',()=>{
        cy.visit('https://money.rediff.com/sectors/bse/auto')
        cy.xpath('//table[@class="dataTable"]/thead/tr/th').should('have.length','6')
        cy.xpath('//table[@class="dataTable"]/tbody/tr').should('have.length','16')
        cy.xpath('//table[@class="dataTable"]/tbody/tr[1]/td[6]').then((txt)=>{
            var change=txt.text()
            cy.log(change).to.equal(+1.64)


        //    cy.xpath('//table[@class="dataTable"]/tbody/tr[4]').within(()=>{
        //         cy.get('td').eq(4).then((ele)=>{
        //         var differ=ele.text()
        //         cy.log(differ).to.equal('2335.00')
        //         })
        //         cy.get('td').eq(0).should('contains.text','Apollo Tyres Ltd.')
        // //    })
        //    cy.get('.dataTable>tbody').contains('MRF Ltd.').parent().parent().within(()=>{
        //     cy.get('td').eq(3).then((ele)=>{
        //         cy.log("prev price: "+ele.text())
        //     })
        //    })
        // cy.get('.dataTable> tbody > tr').each((rows)=>{
        //     cy.wrap(rows).within((celldata)=>{
        //         cy.log(celldata.text())
        //     })
        // })

        })
    })
})
  