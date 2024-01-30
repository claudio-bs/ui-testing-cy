/// <reference types="cypress"/>

export const removeProduct = {
    get remove() { return cy.get('.remove > .fa') },
    productRemove() { this.remove.click() }
}