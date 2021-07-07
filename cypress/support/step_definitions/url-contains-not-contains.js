Given('the url contains {string}', (assertionValue) => {
  cy.url().should('contain', assertionValue);
});

Given('the field {string} does not contain {string}', (assertionValue) => {
  cy.url().should('not.to.contain', assertionValue);
});
