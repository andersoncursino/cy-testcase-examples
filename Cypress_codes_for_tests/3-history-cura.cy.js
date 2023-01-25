describe('Test 2 History', () => {
  it('passes', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.get('#btn-make-appointment').click();
    cy.get('#txt-username').clear('J');
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').clear('T');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
    cy.get('h2').should('have.text', 'Make Appointment');
    
    /* Create and Appointment */
    
    cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');
    cy.get('#chk_hospotal_readmission').check();
    cy.get('.col-sm-4 > :nth-child(2)').click();
    cy.get('#radio_program_medicaid').check();
    cy.get('#txt_visit_date').click();
    cy.get('tbody > :nth-child(3) > :nth-child(3)').click();
    cy.get('#txt_comment').type('This is a test for comment box.');
    cy.get('#btn-book-appointment').click();
    cy.get('h2').should('have.text', 'Appointment Confirmation');
    
/* Check History */

    cy.get('#menu-toggle > .fa').click();
    cy.get('.sidebar-nav > :nth-child(3) > a').click();
    cy.get('#menu-toggle').click();
    cy.get(':nth-child(4) > a').click();
    cy.get('h2').should('have.text', 'History');
    cy.get('#facility').should('have.text', 'Hongkong CURA Healthcare Center');
    cy.get('#hospital_readmission').should('have.text', 'Yes');
    cy.get('#program').should('have.text', 'Medicaid');
    cy.get('#comment').should('have.text', 'This is a test for comment box.');

  })
})