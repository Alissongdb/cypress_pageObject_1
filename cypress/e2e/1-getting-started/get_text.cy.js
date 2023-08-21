///<reference types="cypress" />

describe('Get Texts', () => {

  it('Obter texto de um elemento', () => {


    cy.visit('/')
    .get('.header-logo')

    cy.get('.top_header_left > p')
    .then((element) => {
      element.text
    })
  



  })

  })
