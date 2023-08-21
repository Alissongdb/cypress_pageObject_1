///<reference types="cypress" />

describe('Asserts', () => {

    it('Verificar se o elemento está visível', () => {
  
      cy.visit('/login')
      .get('.header-logo')
  

      cy.get('.account_form > h3')
      .should('be.visible')
      .should('contain', 'Login')
      .should('have.text', 'Login')
  
      // Usando expect
      cy.get('.account_form > h3')
        .then((element) => {
            (element.text())
            expect(element.text()).eq('Login')
            expect(element).to.be.visible
    
        })



  
    })
  
    })
  