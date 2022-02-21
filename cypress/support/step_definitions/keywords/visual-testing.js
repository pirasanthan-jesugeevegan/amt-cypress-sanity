Given('the user screenshot the page {string} as {string}', (url, value) => {
  cy.url().should('include', url);
  cy.eyesCheckWindow(value);
});

Given(
  'the user screenshot the section of the page as {string} from {string}',
  (value, element) => {
    cy.get(element).should('be.visible');
    cy.eyesCheckWindow({
      tag: value,
      target: 'region',
      selector: element,
    });
  }
);

Given('the user initiates visual testing as {string}', (value) => {
  cy.eyesOpen({
    testName: value,
  });
});
