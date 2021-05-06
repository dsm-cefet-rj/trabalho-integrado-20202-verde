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
	
	cy.contains('Testando Titulo').click()

	cy.contains('Usuário').click()

    cy.contains('editar').click()

	cy.get('.nome_perfil')
      .type(' trocou nome')

	cy.get('.bio_perfil')
      .type(' trocou Bio')

	cy.get('.areaAt_perfil')
      .type(' trocou área')

      cy.contains('Salvar').click()
	
    })
  })