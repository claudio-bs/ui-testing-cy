/// <reference types="cypress"/>

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
const { dashboardPage } = require('../cypress/support/pages')

Given('I visit EBAC Store', () => {
    cy.visit('/')
})

When("I log in with user {string} and pass {string}", (user, pass) => {
    cy.login(data.username, data.password)
})

Then('the user dashboard page should be visible', () => {
    dashboardPage.siteTitle.should("be.visible")
    dashboardPage.checkName.should("be.visible")
    dashboardPage.mensage.should("be.visible")
})
