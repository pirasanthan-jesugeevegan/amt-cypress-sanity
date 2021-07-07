import * as selectors from '../mappings-importer.js';

Given(
  'the field {string} contains {string}',
  (elementSelector, assertionValue) => {
    cy.get(selectors[elementSelector]).should((elementSelector) => {
      expect(elementSelector).to.contain(assertionValue);
    });
  }
);

Given(
  'the field {string} does not contain {string}',
  (elementSelector, assertionValue) => {
    cy.get(selectors[elementSelector]).should((elementSelector) => {
      expect(elementSelector).not.to.contain(assertionValue);
    });
  }
);
