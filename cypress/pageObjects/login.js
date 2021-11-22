class LoginPage{
    login(email, senha){
        cy.get('#email').type(email, {log: false})
        cy.get('#password').type(senha, {log: false})
        cy.get('.StyledButton__Button-sc-bv92mm-0').click()
    }
}
export default new LoginPage 