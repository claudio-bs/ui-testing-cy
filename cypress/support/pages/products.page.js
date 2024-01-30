/// <reference types="cypress" />

export const productsPage = {
    get searchProducts() { return cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search') },
    productsSearch() { this.searchProducts.click() },
    get productList() { return cy.get('figure .product-image') }
}