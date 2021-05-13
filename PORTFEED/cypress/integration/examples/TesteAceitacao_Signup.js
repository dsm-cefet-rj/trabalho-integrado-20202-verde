describe('Teste SignUp/Criar Perfil', () => {
    it('Criar o User"', () => {
      cy.visit('http://localhost:3000/Feed')
  
      cy.contains('Signup').click()

      cy.url().should('include', '/Registrar')

      cy.get('.username')
      .type('Testeando Teste')
      .should('have.value', 'Teste_auto')

      cy.get('.password')
      .type('senha')
      .should('have.value', 'senha')

      cy.contains('Salvar').click()

	cy.get('.nome_perfil')
      .type('Teste Nome')
      .should('have.value', 'Teste Nome')

	cy.get('.bio_perfil')
      .type('Bio teste')
      .should('have.value', 'Bio teste')

	cy.get('.areaAt_perfil')
      .type('Testando área')
      .should('have.value', 'Testando área')

      cy.contains('Salvar').click()
	
    })
  })