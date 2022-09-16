import {getUsernameInput, getPasswordInput, getRemmberMeCheckbox, getSubmitButton } from '../support/login-page.po'

describe('login page' , () => {
    beforeEach(() => { 
        cy.visit('/#/login');
    })

    it('it shows login page', () => {
        cy.contains('h1','Login')
        cy.get('ts-login-form').should('exist')
      })

    it('allows user to login', () => {
        getUsernameInput().type('test')
    })  

    
})