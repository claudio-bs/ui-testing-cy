/// <reference types="cypress"/>

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const { dashboardPage } = require('../../support/pages')
const { login } = require('../../support/commands')

Given('I visit EBAC Store', () => {
    cy.visit('/minha-conta')
})

When("I log in with user {string} and pass {string}", (user, pass) => {
    cy.login(user, pass)
})

Then('the user dashboard page should be visible', () => {
    dashboardPage.siteTitle.should("be.visible")
    dashboardPage.checkName.should("be.visible")
    dashboardPage.mensage.should("be.visible")
})
