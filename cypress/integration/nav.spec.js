describe('Nav', () => {
  before(() => {
    cy.visit('/');
  });
  it('Verify nav contains movie & People', () => {
    cy.get('[data-test=nav]').then((el) => {
      expect(el).to.contain('Movie');
      expect(el).to.contain('People');
    });
  });

  it('Verify nav link navigate to the right page', () => {
    cy.get('[data-test=nav]').should('be.visible');
    cy.get('[href="/people"]').should('be.visible').click();
    cy.url().should('contain', '/people');
  });
});
