class MinhaContaPage{
     getUsuarioLogado() {
        return  cy.get('#__next h4')
  
    }
}
export default new MinhaContaPage