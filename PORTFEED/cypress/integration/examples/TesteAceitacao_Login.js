describe('Teste Login', () => {
    it('Clicar o Login"', () => {
      cy.visit('http://localhost:3000/Feed')
  
      cy.contains('Login').click()

      cy.url().should('include', '/Logar')

      cy.get('.username')
      .type('pedrojoaquim')
      .should('have.value', 'pedrojoaquim')

      cy.get('.password')
      .type('senha')
      .should('have.value', 'senha')

      cy.contains('Salvar').click()
    })
  })