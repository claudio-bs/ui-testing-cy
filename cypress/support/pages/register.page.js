/// <reference types="cypress"/>

class registerPage {
    get #regEmail() { return cy.get("#reg_email") }
    get #regPass() { return cy.get("#reg_password") }
    get #regDatas() { return cy.get(":nth-child(4) > .button") }

    create(email, pass) {
        this.#regEmail.type(email)
        this.#regPass.type(pass)
        this.#regDatas.click()
    }
}

module.exports = new registerPage()