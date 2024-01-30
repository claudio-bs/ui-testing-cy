/// <reference types="cypress"/>

export const updateCart = {
    get update() { return cy.get('.minus') },
    cartUpdate() { this.update.click() }
}