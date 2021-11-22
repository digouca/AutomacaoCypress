class CadastroPage{
  cadastro(nome, sobreNome, email, senha){
      cy.get('#name').type(nome, {log: false})
      cy.get('#lastname').type(sobreNome, {log: false})
      cy.get('#email').type(email, {log: false})
      cy.get('#password').type(senha, {log: false})
      cy.get('.select__indicators > .mr-2').click()
      cy.get('#react-select-2-option-3').click()
      cy.get('.StyledButton__Button-sc-bv92mm-0').click()
      
  }
}
export default new CadastroPage 