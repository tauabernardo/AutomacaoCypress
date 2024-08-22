describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get("input[id='username']").type("tomsmith")
    cy.get("input[id='password']").type("SuperSecretPassword!")
    cy.get('button[type = "submit"]').click();
  })
})