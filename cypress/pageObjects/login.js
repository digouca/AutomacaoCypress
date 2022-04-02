class LoginPage{
    login(email, senha){
        cy.get('#email').type(email, {log: false})
        cy.get('#password').type(senha, {log: false})
        cy.get('button[type="submit"]').click()
    }
}
export default new LoginPage 