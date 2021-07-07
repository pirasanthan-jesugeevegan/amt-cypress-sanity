Given('the user selects actor {string}', (elementSelector) => {
  cy.url().then(($url) => {
    if ($url.includes('/people')) {
      cy.selectActor(elementSelector);
    } else {
      cy.visit('/people');
      cy.selectActor(elementSelector);
    }
  });
});
