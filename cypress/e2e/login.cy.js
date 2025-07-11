describe('Login Flow', () => {
    it('should successfully login with registered user', function () {
      cy.fixture('loginData').then((data) => {
        const email = data.email;
        const password = data.password;
  
        cy.visit('http://localhost:3000/login');
  
        cy.get('[data-cy="login-email"]').type(email);
        cy.get('[data-cy="login-password"]').type(password);
        cy.get('[data-cy="login-submit"]').click();
  
      });
    });
  });
  