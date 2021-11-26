/// <reference types="cypress" />

import CadastroPage from '../pageObjects/criandoConta'
import MinhaContaPage from '../pageObjects/minhaConta'


context('Cadastro', () => {
    let data
    before(() => {
        cy.fixture('cadastro').then( cadastro =>{
            data = cadastro
        });
    });

    beforeEach(() => {
        cy.visit('http://altoqi-dev-817989462.sa-east-1.elb.amazonaws.com')
    });
      it('cadastrar usuario com sucesso', () => {
      cy.get(':nth-child(1) > .StyledButton__Button-sc-bv92mm-0').click()
       
        //PAGEOBJETCS
        CadastroPage.cadastro(data.nome, data.sobreNome, data.email, data.senha)

        
    
        cy.get('.mt-16 > .flex > .StyledTypography__Typography-sc-8kgd02-0').should('contain', 'Projeto cadastrado' )

    });
});