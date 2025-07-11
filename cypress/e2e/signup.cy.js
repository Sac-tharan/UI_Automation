describe('Sign Up Flow', () => {
  it('should successfully sign up a new user', function () {
    cy.fixture('signupData').then((data) => {
      const email = data.email;
      const password = data.password;

      cy.visit('http://localhost:3000/signup');

      cy.get('[data-cy="signup-email"]').type(email);
      cy.get('[data-cy="signup-password"]').type(password);
      cy.get('[data-cy="signup-submit"]').click();

    });
  });
});
