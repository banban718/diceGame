describe('Squid Game e2e tests', () => {
  beforeEach(() => {
    // cy.visit('http://localhost:3000/');
    cy.visit('https://squid-game-dice.herokuapp.com/');
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

