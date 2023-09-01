describe('Checkout', () =>{
  it('Add Item From Cart Flow', () => {
    cy.visit('http://localhost:4200')
    cy.get('input[data-cy="input-name"]').type('mnalwafi')
    // cy.wait(1000)
    cy.get('input[data-cy="input-password"]').type('123456')
    // cy.wait(1000)
    cy.get('button[data-cy="btn-login"]').click()
    // cy.wait(1000)
    cy.get('button[data-cy="btn-add-menu-item-to-cart"]').first().click()
    cy.get('input[data-cy="input-cart-item-amount"]').first().should('have.value', 1).then(() => {
      cy.get('button[data-cy="btn-add-menu-item-to-cart"]').first().click()
      cy.get('input[data-cy="input-cart-item-amount"]').first().should('have.value', 2)
      cy.get('span[data-cy="text-cart-item-total-price"]').first().invoke('html').should('include', '30,000').then(() => {
        cy.get('button[data-cy="btn-add-menu-item-to-cart"]').first().click()
        cy.get('input[data-cy="input-cart-item-amount"]').first().should('have.value', 3)
        cy.get('span[data-cy="text-cart-item-total-price"]').first().invoke('html').should('include', '45,000')
      })
    })
  })

  it('Remove Item From Cart Flow', () => {
    cy.visit('http://localhost:4200')
    cy.get('input[data-cy="input-name"]').type('mnalwafi')
    // cy.wait(1000)
    cy.get('input[data-cy="input-password"]').type('123456')
    // cy.wait(1000)
    cy.get('button[data-cy="btn-login"]').click()
    // cy.wait(1000)
    cy.get('button[data-cy="btn-add-menu-item-to-cart"]').first().click().then(() => {
      cy.get('button[data-cy="btn-add-menu-item-to-cart"]').first().click()
      cy.get('input[data-cy="input-cart-item-amount"]').first().should('have.value', 2).then(() => {
        cy.get('button[data-cy="btn-remove-item-from-cart"]').first().click()
        cy.get('input[data-cy="input-cart-item-amount"]').first().should('have.value', 1)
          cy.get('span[data-cy="text-cart-item-total-price"]').first().invoke('html').should('include', '15,000').then(() => {
          cy.get('button[data-cy="btn-remove-item-from-cart"]').eq(0).click()
          cy.get('button[data-cy="btn-checkout"]').should('not.exist')
        })
      })
    })
  })

  it('Checkout Flow', () => {
      cy.visit('http://localhost:4200')
      cy.get('input[data-cy="input-name"]').type('mnalwafi')
      // cy.wait(1000)
      cy.get('input[data-cy="input-password"]').type('123456')
      // cy.wait(1000)
      cy.get('button[data-cy="btn-login"]').click()
      cy.get('li[data-cy="menu-item"]').should('exist').then(() => {
        cy.get('button[data-cy="btn-add-menu-item-to-cart"]').click({ multiple: true })
        // cy.wait(1000)
        cy.get('button[data-cy="btn-checkout"]').click()
        // cy.wait(1000)
        cy.get('div[data-cy="alert-message"]').should('be.exist')
        cy.get('li[data-cy="cart-item"]').should('not.exist')
      })
      // cy.wait(1000)
    })
  })
