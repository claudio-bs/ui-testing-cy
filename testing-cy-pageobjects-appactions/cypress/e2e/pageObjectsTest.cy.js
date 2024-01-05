/// <reference types="cypress"/>

var faker = require('faker-br')
const Faker = require('faker-br/lib')

//const registerPage = require('../support/pages/register.page')
//const { dashboardPage } = require('../support/pages/dashboard.page')

const { registerPage, dashboardPage } = require('../support/pages')

describe('Create account', () => {
    before(() => {
        cy.visit('/')
    });

    it('should create account', () => {
        let emailFaker = faker.internet.email()
        let passFaker = faker.internet.password()

        cy.get('.icon-user-unfollow').click()
        registerPage.create(emailFaker, passFaker)
        dashboardPage.siteTitle.should("be.visible")
        dashboardPage.checkName.should("be.visible")
        dashboardPage.mensage.should("be.visible")
    });
});