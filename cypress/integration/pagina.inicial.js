/// <reference types="cypress" />

context('Validar paginas', () => {

    
    beforeEach('', () => {
        cy.visit('http://altoqi-dev-817989462.sa-east-1.elb.amazonaws.com/')
    })

    afterEach('', () => {
        cy.screenshot()
    })

    it('clicando no botão Criar uma conta deve direcionar para a página de cadastro', () => {

         cy.get('.StyledButton__Button-sc-bv92mm-0').should('be.visible')
         cy.contains('#__next button[type="submit"]', 'Criar uma conta').click()
         //cy.get('#__next button[class="StyledButton__Button-sc-bv92mm-0 bmeTmh flex justify-center"]').click()
         cy.url().should('contain', 'registrar')
         cy.get('input[placeholder="Nome"]').type('Lucas')
       
    });

    it('clicando no botão fazer login deve direcionar para a página de login do usuário', () => {

        cy.get('.StyledButton__Button-sc-bv92mm-0').should('be.visible')
        cy.contains('#__next button[type="submit"]', 'Fazer login').click()
        cy.url().should('contain', 'login')
       
    });
    
});

