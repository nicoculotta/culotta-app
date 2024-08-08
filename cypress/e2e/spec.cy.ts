/// <reference types="cypress" />
describe('Pokedex App', () => {
  it('should visit the page', () => {
    cy.visit('/')
  })

  beforeEach(() => {
    cy.visit('/')
  })

  it('should have a title', () => {
    cy.get('h1').should('contain', 'List of Pokemons')
  })

  it('should have a list of pokemons', () => {
    cy.get('.card-grid').should('be.visible')
    cy.get('.card-grid').children().should('have.length', 18)
  })

  it('should navigate to the next page and display the next 18 pokemons', () => {
    cy.get('.pagination').children().should('have.length', 2)
    cy.get('.pagination').children().eq(1).click()
    cy.get('.card-grid').children().should('have.length', 18)
  })

  it('should open a modal with the pokemon details when clicking on a pokemon', () => {
    cy.get('.card-grid').children().eq(0).click()
    cy.get('.modal-card__content').should('be.visible')
  })

  it('should close the modal when clicking on the close button', () => {
    cy.get('.card-grid').children().eq(0).click()
    cy.get('.modal-card__content').should('be.visible')
    cy.get('.modal-card__close').click()
    cy.get('.modal-card__content').should('not.exist')
  })
})
