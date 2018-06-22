describe('Kitchen Sink Website', function(){
    it('visits the correct site', function(){
        cy.visit('https://example.cypress.io/')
    });
    it('finds the link type and clicks on it', function(){
        cy.contains('type').click();
        cy.url().should('include', '/commands/actions')
    })
    it('should submit a coupon code', function(){
        cy.get('#couponCode1').type('this is rockin jo');
        cy.get('.action-form').submit().next().should('contain', 'Your form has been submitted!')
    })
})

//contains get things from content
//get gets things from html