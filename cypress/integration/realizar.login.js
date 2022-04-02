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
        //cy.get('#__next button[class="StyledButton__Button-sc-bv92mm-0 jfXVrk flex justify-center"]').click()
        cy.contains('#__next button[type="submit"]', 'Fazer login').click()
       
        //PAGEOBJETCS
        LoginPage.login(data.email, data.senha)
        MinhaContaPage.getUsuarioLogado().should('contain', 'Lucas Oliveira')

    });
});