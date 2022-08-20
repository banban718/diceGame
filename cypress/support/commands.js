// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { selectors } from './selectors';

Cypress.Commands.add('fillPlayerOneName', (name) => {
    cy.get(selectors.nameInput).first().type(name);
    cy.get(selectors.submitButton).first().click();
});

Cypress.Commands.add('fillPlayerTwoName', (name) => {
    cy.get(selectors.nameInput).last().type(name);
    cy.get(selectors.submitButton).last().click();
});

Cypress.Commands.add('assertWelcomeMessage', (name) => {
    cy.get(selectors.sixFace).should('be.visible');
    cy.contains(`Welcome ${name}`).should('be.visible');
});

Cypress.Commands.add('rollFirstDie', () => {
    cy.get(selectors.sixSidedDie).first().click({force: true});
    cy.wait(1500);
});

Cypress.Commands.add('assertPlayerResults', (name) => {
    cy.contains(`Welcome ${name}`).should('be.visible');
    cy.contains(`${name} rolled a `).should('be.visible');
    cy.contains(`Total Score: `).should('be.visible');
});

Cypress.Commands.add('rollSecondDie', () => {
    cy.get(selectors.sixSidedDie).last().click({force: true});
    cy.wait(1500);
});

Cypress.Commands.add('assertAlertMessage', () => {
    cy.on('window:alert', (txt) => {
        expect(txt).to.contains("You can only roll this button ")
    })
})


// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

