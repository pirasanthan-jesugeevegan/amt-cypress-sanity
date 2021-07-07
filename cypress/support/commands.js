// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('selectActor', (actor) => {
  cy.get('.people').should((el) => {
    expect(el).to.contain(actor);
  });
  cy.contains(actor)
    .scrollIntoView()
    .click()
    .then(() => {
      cy.url().should('not.include', '/people');
    });
});
