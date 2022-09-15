import { contains } from 'cypress/types/jquery';
import { getGreeting } from '../support/app.po';

describe('login page', () => {
    beforeEach(() => {
       cy.visit('/');
    })

    it('greets with login page',() => {
        cy.contains('h1', 'Login')
    })

    it('allows user to register', () => {
        cy.contains('h1','Login');
    })

    it('go to page register', () => {
        cy.get('Button').contains('New Account').click()
    })

    it('requires username',()=> {
        cy.get('input').type('Lagg58')
        cy.get('E-mail').type('delarrasgeraldine@gmail.com')
        cy.get('Phone').type('0665757859')
        cy.get('Password').type('Coyote06*')
        cy.get('Confirm Password').type('Coyote06*')
    })

})

