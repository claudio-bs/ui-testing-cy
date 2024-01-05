/// <reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor'
const { dashboardPage } = require('../../support/pages')

Given('I visit EBAC Store', () => {
    cy.visit('/minha-conta')
})

When("I log in with user {string} and pass {string}", (user, pass) => {
    cy.login(data.username, data.password)
})

Then('the user dashboard page should be visible', () => {
    dashboardPage.siteTitle.should("be.visible")
    dashboardPage.checkName.should("be.visible")
    dashboardPage.mensage.should("be.visible")
})
