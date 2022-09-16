describe('login page', () => {
    beforeEach(() => {
      cy.visit('/');
    })

    it('all informations are present', () => {
      cy.contains('Home')
      cy.contains('Menu')
      cy.contains('Login')
      cy.contains('Top-secret')
    })

    it('allows user to register', () => {
      cy.contains('h1','Login')
    })

    it('requires valid form',() => {
      cy.get('input').should('have.class', 'ng-invalid')
        
    })
    
    it('go to page register', () => {
      cy.get('Button').contains('New Account').click()
    })

})  
    
 describe('create new account', () => {   
    it('shows register page', () => {
      cy.url().should('include','register')
    })
    
    it('shows user to register',() => {
      cy.get('input[placeholder*="Username"]').type('Lagg')
    })

    it('requires valid form',() =>{
      cy.get('input').should('have.class', 'ng-invalid')
      cy.contains('I accept the terms and conditions')
      cy.get('Button').contains('Submit')
    })

    it('forgot password', () =>{
      cy.contains('..')
    })

})