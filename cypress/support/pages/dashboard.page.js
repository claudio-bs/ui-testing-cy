/// <reference types="cypress"/>

export const dashboardPage = {
    get siteTitle() { return cy.get('.page-title')},
    get checkName() { return cy.get('.woocommerce-MyAccount-content > :nth-child(2)')},
    get mensage() { return cy.get('.woocommerce-MyAccount-content > :nth-child(3)')}
}

