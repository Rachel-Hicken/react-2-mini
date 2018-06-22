describe('List View',function(){
    it('should not have any initial values', function(){
        cy.visit('/');
        cy.get('.list_box').should('exists');
        cy.get('.list_item').should('not.exist')
    })
})