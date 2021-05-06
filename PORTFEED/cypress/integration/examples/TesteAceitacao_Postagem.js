describe('Teste Cria Projeto', () => {
    it('Criar o User"', () => {
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
	
	cy.contains('Posts').click()

	cy.contains('CRIAR POST').click()



	cy.get('.postagem')
      .type('Postagem criaaaadaaaaaa')
      .should('have.value', 'Postagem criaaaadaaaaaa')

      cy.contains('Salvar').click()
	
    })
  })