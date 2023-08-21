///<reference types="cypress" />

// Gerador de dados aleatorios
import {faker} from '@faker-js/faker';

import home_Page_ from '../../support/pages/home_Page_';
import registerPage_ from '../../support/pages/registerPage_';

//Para usar uma fixtures:
const user_data = require ('../fixtures/user_create.json')

const screens = ['desktop', 'iphone-x', 'iphone-6']

screens.forEach(element => {

    describe('Cadastro de Usuário', () => {

    beforeEach('Acessando página de cadastro', () =>{

        if (element != 'desktop') {
           
            cy.viewport(element)
        }

        home_Page_.acessRegisterPage()

    })

    it('Validar campo nome vazio', () => {
        
        registerPage_.saveRegister()
        registerPage_.checkMessage('O campo nome deve ser prenchido')


    })

    it('Validar campo e-mail vazio', () => {

        registerPage_.fillName(user_data.name)
        registerPage_.saveRegister()
        registerPage_.checkMessage('O campo e-mail deve ser prenchido corretamente')

    })

    it('Validar e-mail inválido', () => {

        registerPage_.fillName(user_data.name)
        registerPage_.fillEmail('email inválido')
        registerPage_.saveRegister()
        registerPage_.checkMessage('O campo e-mail deve ser prenchido corretamente')

    })

    it('Validar campo senha vazio', () => {
    
        registerPage_.fillName(user_data.name)
        registerPage_.fillEmail(user_data.email)
        registerPage_.saveRegister()
        registerPage_.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
        

    })

    it('Validar campo senha inválido', () => {
    
        registerPage_.fillName(user_data.name)
        registerPage_.fillEmail(user_data.email)
        registerPage_.fillPassword('12345')

        registerPage_.saveRegister()
        registerPage_.checkMessage('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Cadastro realizado com sucesso', () => {
    
        registerPage_.fillName(user_data.name)
        registerPage_.fillEmail(user_data.email)
        registerPage_.fillPassword(user_data.password)
        registerPage_.saveRegister()

        registerPage_.checkRegisterSuccess(user_data.name)

    })

    
    })
  
});