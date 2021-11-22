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
         cy.get(':nth-child(1) > .StyledButton__Button-sc-bv92mm-0').click()
         cy.url().should('contain', 'registrar')
         cy.get('#name').type('Lucas')
       
    });

    it('clicando no botão fazer login deve direcionar para a página de login do usuário', () => {

        cy.get('.StyledButton__Button-sc-bv92mm-0').should('be.visible')
        cy.get('.h-full > :nth-child(2) > .StyledButton__Button-sc-bv92mm-0').click()
        cy.url().should('contain', 'login')
       
    });
    
});

