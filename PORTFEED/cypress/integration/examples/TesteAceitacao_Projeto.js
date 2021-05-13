describe('Teste Cria Projeto', () => {
    it('Criar o User"', () => {
      cy.visit('http://localhost:3000/Feed')
  
      cy.contains('Signup').click()

      cy.url().should('include', '/Registrar')

      cy.get('.username')
      .type('Teste_auto')
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
	
	cy.contains('CRIAR NOVO').click()

	cy.get('.nome_projeto')
      .type('Teste Nome')
      .should('have.value', 'Teste Nome')

	cy.get('.desc_projeto')
      .type('Descrição teste')
      .should('have.value', 'Descrição teste')

      cy.get('.img_projeto')
      .type('https://thumbs.dreamstime.com/z/homem-maduro-com-sorriso-do-computador-20855484.jpg')

	cy.get('.info_projeto')
      .type('Testando info')
      .should('have.value', 'Testando info')

      cy.contains('Salvar').click()
	
      cy.pause()

      cy.contains('Teste Nome').click()

    cy.contains('Editar').click()

	cy.get('.nome_projeto')
      .type(' trocou nome')

	cy.get('.desc_projeto')
      .type(' trocou descrição')

      cy.get('.img_projeto').clear()

      cy.get('.img_projeto').type('https://previews.123rf.com/images/nyul/nyul1108/nyul110800198/10373403-senior-people-using-laptop-computer-smiling-.jpg')

	cy.get('.info_projeto')
      .type(' trocou info')

      cy.contains('Salvar').click()

    })
  })