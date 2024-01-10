/// <reference types="cypress"/>
const dataProduct = require('../fixtures/dataProduct.json')
import { homePage, productSearchPage, removeProduct, updateCart } from "../support/pages";

describe('Add product, remove and update items in the shopping cart', () => {
    before(() => {
        cy.intercept({
            method: 'GET',
            url: '/wp-admin/admin-ajax*',
            query: {
                term: 'Sinbad'
            }
        }, req => {
            req.reply({
                statusCode: 200,
                body: `${req.query.callback}(
                    ${JSON.stringify(
                        dataProduct.autocompleteSearcData
                    )}
                )`
            })
        })
    });

    beforeEach(() => {
        cy.visit("/")
    });

    it('autocomplete product item and added to shopping cart should be returned correctly, then update the same by reducing the items and then remove the products', () => {
        homePage.searchMagnifier()
        productSearchPage.search('Sinbad')
        productSearchPage.productList.first()
        .should('have.attr', 'title', 'Sinbad Fitness Tank')
        cy.addProductIntercept('L', 'Blue', 3)
        cy.get('.woocommerce-message').should('contain', '3 × “Sinbad Fitness Tank” foram adicionados no seu carrinho.')
        cy.get('.woocommerce-message > .button').click()
        updateCart.cartUpdate()
        removeProduct.productRemove()
    });

    after(() => {
        cy.intercept({
            method: 'POST',
            url: '/?wc-ajax=get_refreshed_fragments'
        }, req => {
            req.reply({
                statusCode:200
            })
        })

        cy.intercept({
            method: 'GET',
            url: '/carrinho/?removed_item=1'
        }, req => {
            req.reply({
                statusCode:200
            })
        })
    });
});