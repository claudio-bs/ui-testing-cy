/// <reference types="cypress" />

export const addProductPage = {
    get product () { return cy.get('#ui-id-1 > :nth-child(1)') },
    inputProduct() { this.product.click() },
    get select () { return cy.get('.button-variable-item-L') },
    selectSize() { this.select.click() },
    get choice() { return cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item') },
    choiceColor() { this.choice.click() },
    get quantity() { return cy.get('.input-text') },
    defineQuantity() { this.quantity.clear().type(2) },
    get add() { return cy.get('.single_add_to_cart_button') },
    addCart() { this.add.click() }
}