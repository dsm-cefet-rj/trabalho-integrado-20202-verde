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
	
	cy.contains('CRIAR NOVO').click()

	cy.get('.nome_projeto')
      .type('Teste Nome')
      .should('have.value', 'Teste Nome')

	cy.get('.desc_projeto')
      .type('Descrição teste')
      .should('have.value', 'Descrição teste')

	cy.get('.info_projeto')
      .type('Testando info')
      .should('have.value', 'Testando info')

      cy.contains('Salvar').click()
	
    })
  })