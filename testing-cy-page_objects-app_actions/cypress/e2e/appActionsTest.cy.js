/// <reference types="cypress"/>

const dataLogin = require('../fixtures/dataLogin.json')
const { dashboardPage } = require('../support/pages')
import InvoicingPage from "../support/pages/invoicing.page"

describe('Access My Account Panel, Add Product to the cart and complete the purchase ', () => {
    beforeEach(() => {
        cy.login(dataLogin.username, dataLogin.password)
    });

    it('should login with valid credentials, add product to the cart and complete the purchase', () => {

        dashboardPage.siteTitle.should("be.visible")
        dashboardPage.checkName.should("be.visible")
        dashboardPage.mensage.should("be.visible")

        cy.addProducts('Sinbad Fitness Tank', 'L', 'Blue', 2)
        cy.get('.woocommerce-message').should('contain', '2 × “Sinbad Fitness Tank” foram adicionados no seu carrinho.')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        InvoicingPage.editInvoicing()
            
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').contains('Obrigado. Seu pedido foi recebido.')
        cy.get('.woocommerce-order > :nth-child(3)').contains('Pagar em dinheiro na entrega.')
    });
});