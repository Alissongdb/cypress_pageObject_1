///<reference types="cypress" />

const elementsHomePage = {
    register: {
        visit: '.header-logo',
        btnRegister: '.fa-lock',
        inputNameVisible: '#user'
    }
}

Cypress.Commands.add('acessRegisterPage', () => {
    cy.visit('/')
    .get(elementsHomePage.register.visit)
    
    cy.get(elementsHomePage.register.btnRegister)
    .click()

    .get(elementsHomePage.register.inputNameVisible)
    .should('be.visible')
})