Given('the url contains {string}', (assertionValue) => {
  cy.url().should('contain', assertionValue);
});

Given('the url does not contain {string}', (assertionValue) => {
  cy.url().should('not.to.contain', assertionValue);
});
