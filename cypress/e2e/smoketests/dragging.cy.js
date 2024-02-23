describe('dragging',()=>{
    it('example for dragging',()=>{
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
        cy.get('#menu-fried-chicken').drag('#plate-items')
       // cy.get('#menu-ice-cream').drag('#plate-items')
    })
    it('draganddrop without plugin',()=>{
      const dataTransfer=new DataTransfer();
      cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')

      cy.get('#menu-hamburger').trigger('dragstart',{
        dataTransfer
      })
      cy.get('#plate-items').trigger('drop',{
        dataTransfer
      })
      cy.get('#menu-ice-cream').trigger('dragstart',{
        dataTransfer
      })
      cy.get('#plate-items').trigger('drop',{
        dataTransfer
      })
    })
})
