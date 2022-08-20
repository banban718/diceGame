/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Squid Game e2e tests', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/');
  })

  it('should complete a game of dice rolling with 3 rounds', () => {
    const playerOne = 'Dim Sum';
    const playerTwo = 'French Fries';

    cy.fillPlayerOneName(playerOne);
    cy.assertWelcomeMessage(playerOne);

    cy.fillPlayerTwoName(playerTwo);
    cy.assertWelcomeMessage(playerTwo);

    for(let i = 0; i < 3; i++) {
      cy.rollFirstDie();
      cy.assertPlayerResults(playerOne);
      cy.rollSecondDie();
      cy.assertPlayerResults(playerTwo);
    }
    cy.rollFirstDie();
    cy.assertAlertMessage();

  })
})

