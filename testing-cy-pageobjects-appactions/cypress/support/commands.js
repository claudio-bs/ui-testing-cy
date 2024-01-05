/// <reference types="cypress"/>

Cypress.Commands.add('login', (user, pass) => {
    const fd = new FormData()
    fd.append('username', user)
    fd.append('password', pass)
    fd.append('woocommerce-login-nonce', "c7ed561e21")
    fd.append('_wp_http_referer', "/minha-conta/")
    fd.append('login', "Login")

    cy.request({
        url: '/minha-conta',
        method: 'POST',
        body: fd
    }).its('allRequestResponses').its('0').its('Response Headers').then(response => {
        response['set-cookie'].forEach(cookie => {
            const firstPart = cookie.split(';')[0]
            const divisor = firstPart.indexOf('=')
            const key = firstPart.substring(0, divisor)
            const value = firstPart.substring(divisor + 1)
            cy.setCookie(key, value)
        })
    })

    cy.visit('/minha-conta')
});

Cypress.Commands.add('addProducts', (product, size , color, quantity) => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
    cy.get(':nth-child(6) > .page-numbers').click()
    cy.get('[class="product-block grid"]')
        .contains(product)
        .click()
    cy.get('.button-variable-item-' + size).click()
    cy.get('.button-variable-item-' + color).click()
    cy.get('.input-text').clear().type(quantity)
    cy.get('.single_add_to_cart_button').click()
});