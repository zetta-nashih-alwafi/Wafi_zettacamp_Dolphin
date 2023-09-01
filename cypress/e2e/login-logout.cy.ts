describe('Login or Logout Tests', () => {
  it('Login flow', () => {
      cy.visit('http://localhost:4200')
      cy.get('div[data-cy="login-page"]').should('exist')
      cy.get('button[data-cy="btn-login"]').click()
      cy.get('div[data-cy="login-page"]').should('exist').then(() => {
        cy.get('input[data-cy="input-name"]').should('not.be.disabled').type('mnalwafi')
        cy.get('button[data-cy="btn-login"]').click()
        cy.get('div[data-cy="login-page"]').should('exist').then(() => {
          cy.get('input[data-cy="input-password"]').should('not.be.disabled').type('123456')
          // cy.wait(1000)
          cy.get('button[data-cy="btn-login"]').should('not.be.disabled').click()
          cy.get('div[data-cy="login-page"]').should('not.exist')
          cy.get('a[data-cy="text-navbar-profile-name"]').invoke('html').should('include', 'mnalwafi')
        })
      })
    })

  it('Logout flow', () => {
      cy.visit('http://localhost:4200')
      cy.get('input[data-cy="input-name"]').type('mnalwafi')
      // cy.wait(1000)
      cy.get('input[data-cy="input-password"]').type('123456')
      // cy.wait(1000)
      cy.get('button[data-cy="btn-login"]').click()
      // cy.wait(1000)
      cy.get('button[data-cy="btn-logout"]').click()
      cy.get('div[data-cy="login-page"]').should('exist')
    })
})
