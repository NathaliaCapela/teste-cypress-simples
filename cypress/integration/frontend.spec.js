/// <reference types="cypress" />

describe('Valide Tests', () => {
    it('Deve inserir uma conta', () => {
      cy.visit('https://barrigareact.wcaquino.me/')
      cy.get('[data-test="email"]').type(Cypress.env('email'))
      cy.get('[data-test="passwd"]').type(Cypress.env('password')) 
      cy.get('.btn').click()

      cy.get('.toast-message').should('be.visible')
      .and('contain','Bem vindo, Nathalia Testes!')

      cy.get('[data-test="menu-settings"]').click()
      cy.get('[href="/contas"]').click()

      cy.get('[data-test="nome"]').type('Conta de Testes')
      cy.get('.btn').click()

      cy.get('.toast-success').should('be.visible')
      .and('contain','Conta inserida com sucesso')
      
      it('Deve inserir uma conta repetida',()=>{

        cy.visit('https://barrigareact.wcaquino.me/')
        cy.get('[data-test="email"]').type(Cypress.env('email'))
        cy.get('[data-test="passwd"]').type(Cypress.env('password')) 
        cy.get('.btn').click()
  
        cy.get('.toast-message').should('be.visible')
        .and('contain','Bem vindo, Nathalia Testes!')
  
        cy.get('[data-test="menu-settings"]').click()
        cy.get('[href="/contas"]').click()
  
        cy.get('[data-test="nome"]').type('Conta de Testes')
        cy.get('.btn').click()
  
        cy.get('.toast-error').should('be.visible')
        .and('contain','Error: Request failed with status code 400')

      })

     
    
  

    })
  })

