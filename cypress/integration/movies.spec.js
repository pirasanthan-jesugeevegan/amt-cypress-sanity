describe('Movies', () => {
  it('Should list all movies on the home page', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > a').should('contain', 'WALL');
  });
});
