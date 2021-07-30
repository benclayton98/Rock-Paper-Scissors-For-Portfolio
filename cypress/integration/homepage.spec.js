describe('Rock, Paper Scissors', function () {
  it('will ask the user for, and then store, their name', function () {
    cy.visit('/')
    cy.get('#userName').type('Ben')
    cy.get('#submitButton').click()
    cy.get('#nameStored').should('contain', 'Welcome Ben. Click either Rock, Paper or Scissors to start the game.')
  })

  it('will display the options to pick either rock, paper or scissors', function () {
    cy.get('#rockButton')
    cy.get('#paperButton')
    cy.get('#scissorsButton')
    cy.url().should('include', '/name')
  })

  it('can select an option and then display a message confirming which option was picked', function () {
    cy.get('#rockButton').click()
    cy.get('#rockSelected').should('contain', 'You have chosen Rock!')
    cy.url().should('include', '/rock')
  })

  it('will ask the user to click the button to reveal what the CPU picked', function () {
    cy.get('#cpuButton').click()
    cy.url().should('include', '/cpuTurn')
  })

  it('will show the choice of both the user and the cpu before showing the result', function () {
    cy.get('#choiceSelected').should('contain', 'You have chosen')
    cy.get('#cpuChoice').should('contain', 'The CPU has chosen')
    cy.get('#result').should('exist')
  })

  it('will offer the user a chance to play again', function () {
    cy.get('#playAgain').click()
    cy.url().should('include', '/')
  })
})
