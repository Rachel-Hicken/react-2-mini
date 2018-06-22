describe('Form functionality', function(){
    beforeEach(function(){
        cy.visit('/');
    })
    it('textarea can take text', function(){
        cy.get('textarea').type('take out the trash')
        // cy.get()
        cy.contains('take out the trash').should('exists')
    })
    it('should not add a new item when input is empty', function(){
        cy.get('.add').click();
        cy.url().should('contain', '/')
    })
})