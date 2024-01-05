class InvoicingPage {

    editInvoicing(name, lastname, company, country, address, complement, city, state, zipCode, fone, email, observation) {
        cy.get('#billing_first_name')
        .click()
        .clear()
        .type(name)
        cy.get('#billing_last_name')
        .click()
        .clear()
        .type(lastname)
        cy.get('#billing_company')
        .click()
        .clear()
        .type(company)
        cy.get('#select2-billing_country-container')
        .click()
        .type(country)
        .get('[aria-selected="true"]')
        .click()
        cy.get('#billing_address_1')
        .click()
        .clear()
        .type(address)
        cy.get('#billing_address_2')
        .click()
        .clear()
        .type(complement)
        cy.get('#billing_city')
        .click()
        .clear()
        .type(city)
        cy.get('#select2-billing_state-container')
        .click()
        .type(state + '{enter}')
        cy.get('#billing_postcode')
        .click()
        .type(zipCode)
        cy.get('#billing_phone')
        .click()
        .type(fone)
        cy.get('#billing_email')
        .click()
        .type(email)
        cy.get('#order_comments')
        .click()
        .type(observation)
        cy.get('#payment_method_cod').click()
        cy.get('.wc_payment_method.payment_method_cod > .payment_box > p').contains('Pagar em dinheiro na entrega.')
        cy.get('#terms').click()
    }
}

export default new InvoicingPage()
    


    

