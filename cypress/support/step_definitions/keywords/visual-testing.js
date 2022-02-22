import '@percy/cypress';

Given('the user screenshot the page {string} as {string}', (url, value) => {
  cy.url().should('include', url);
  cy.percySnapshot(value);
});

Given(
  'the user screenshot the section of the page as {string} from {string}',
  (value, element) => {
    cy.get(element).should('be.visible');
    cy.percySnapshot(value, {
      domTransformation: (documentClone) => {
        let bioContainer = documentClone.querySelector(element);
        documentClone.querySelector('body').innerHTML = bioContainer.innerHTML;

        return documentClone;
      },
    });
  }
);
