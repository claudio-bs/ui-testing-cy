/// <reference types="cypress"/>

const data = require('../fixtures/data.json')
const { dashboardPage } = require('../support/pages')
import InvoicingPage from "../support/pages/invoicing.page"
const dataInvoicing = require('../fixtures/invoicing.json');

describe('Access My Account Panel, Add Product to the cart and complete the purchase ', () => {
    beforeEach(() => {
        cy.login(data.username, data.password)
    });

    it('should login with valid credentials, add product to the cart and complete the purchase', () => {

        dashboardPage.siteTitle.should("be.visible")
        dashboardPage.checkName.should("be.visible")
        dashboardPage.mensage.should("be.visible")

        cy.addProducts('Sinbad Fitness Tank', 'L', 'Blue', 2)
        cy.get('.woocommerce-message').should('contain', '2 × “Sinbad Fitness Tank” foram adicionados no seu carrinho.')
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()

        InvoicingPage.editInvoicing(
            dataInvoicing.name,
            dataInvoicing.lastname,
            dataInvoicing.company,
            dataInvoicing.country,
            dataInvoicing.address,
            dataInvoicing.complement,
            dataInvoicing.city,
            dataInvoicing.state,
            dataInvoicing.zipCode,
            dataInvoicing.fone,
            dataInvoicing.email,
            dataInvoicing.observation
        )
            
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').contains('Obrigado. Seu pedido foi recebido.')
        cy.get('.woocommerce-order > :nth-child(3)').contains('Pagar em dinheiro na entrega.')
    });
});