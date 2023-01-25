describe('Test 1 Login', () => {
  it('passes', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.get('#btn-make-appointment').click();
    cy.get('#txt-username').clear('J');
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').clear('T');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
    cy.get('h2').should('have.text', 'Make Appointment');
  })
})