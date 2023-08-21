///<reference types="cypress" />

// Elementos
const elements = {
    buttons: {
        register: '#btnRegister'

    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password'

    },
    messages: {
        error: '.errorLabel',
        successTitle: '#swal2-title',
        successSubtittle: '#swal2-html-container'

    },
}
        
export default {
    // Ações / Métodos / Funções
    saveRegister() {
        cy.get(elements.buttons.register)
        .click()
    },

    fillEmail(email) {
        cy.get(elements.fields.email)
        .type(email)
    },

    fillName(name) {
        cy.get(elements.fields.name)
        .type(name)
    },


    fillPassword(password) {
        cy.get(elements.fields.password)
        .type(password)
    },

    checkMessage(message) {
        cy.get(elements.messages.error)
        .should('have.text', message)
    },

    checkRegisterSuccess(name){
        cy.get(elements.messages.successTitle)
        .should('have.text', 'Cadastro realizado!')
        cy.get(elements.messages.successSubtittle, {timeout: 3000})
        .should('have.text', `Bem-vindo ${name}`)
    },

}
