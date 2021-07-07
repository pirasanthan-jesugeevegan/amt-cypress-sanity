import * as selectors from '../mappings-importer';
Given('the user clears {string}', (elementSelectorKey) => {
  cy.get(selectors[elementSelectorKey]).clear();
});
