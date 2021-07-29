describe('Rock, Paper Scissors', function(){
    it('will ask the user for, and then store, their name', function(){
        cy.visit('/')
        cy.get('#userName').type('Ben')
        cy.get('#submitButton').click()
        cy.get('#nameStored').should('contain', 'Welcome Ben. Click either Rock, Paper or Scissors to start the game.')
    })

    it('will display the options to pick either rock, paper or scissors', function(){
        cy.get('#rockButton')
        cy.get('#paperButton')
        cy.get('#scissorsButton')
        cy.url().should('include', '/name')
    })
})