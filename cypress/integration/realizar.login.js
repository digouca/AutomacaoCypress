/// <reference types="cypress" />

import LoginPage from '../pageObjects/login'
import MinhaContaPage from '../pageObjects/minhaConta'

context('Login', () => {
    let data
    before(() => {
        cy.fixture('usuario').then( dadosUsuario =>{
            data = dadosUsuario
        });
    });

    beforeEach(() => {
        cy.visit('http://altoqi-dev-817989462.sa-east-1.elb.amazonaws.com')
    });
    it('com usuario cadastrado visualizar minha conta', () => {
        cy.get('.h-full > :nth-child(2) > .StyledButton__Button-sc-bv92mm-0').click()
       

        //PAGEOBJETCS
        LoginPage.login(data.email, data.senha)
        MinhaContaPage.getUsuarioLogado().should('contain', 'Teste Final109')

    });
});