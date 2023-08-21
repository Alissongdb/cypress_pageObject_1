///<reference types="cypress" />

describe('Interações', () => {

    it('Digitar em um campo', () => {
    
        cy.visit('/')
        .get('.header-logo')

        cy.get('.form-control')
        .type('alisson@qazando.com.br')
  
    })

    it('Click', () => {
        
        cy.visit('/')
        .get('.header-logo')

        // click normal
        cy.get('.fa-user')
        .click()

        // click duplo
        cy.get('.fa-user')
        .dblclick()

        // click duplo
        cy.get('.fa-user')
        .rightclick()

        // click por coordenadas
        cy.get('.fa-user')
        .click(100, 100, {force: true})

        // Simular apertar enter
        cy.get('#mc_embed_signup > form > div > div > button')
        .type('alisson@qazando.com.br{enter}')

    })

    // Selecionar uma opção de um dropdown
    it('Select', () => {

        cy.visit('/')
        .get('.header-logo')

        cy.get('.footer_one_widget')
        .contains('Checkout View Two')
        .click()

        cy.get('#country')
        .select('Colombia')
        
    })

    // Selecionar um Checkbox e Radio Button
    it('Checkbox e Radio Button', () => {

        cy.visit('/')
            .get('.header-logo')
    
        cy.get('.footer_one_widget')
            .contains('Checkout View Two')
            .click()

        cy.get('#css')
        .check()


            
        })


  
    })
  