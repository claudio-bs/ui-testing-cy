/// <reference types="cypress"/>

const dataLogin = require('../fixtures/dataLogin.json')
const { dashboardPage } = require('../support/pages')

describe('Access My Account Panel', () => {
    
    context('Given I visit EBAC Store', () => {
        before(() => {
            cy.visit('/')
        });

        context(`When I log in with user ${dataLogin.username} and pass ${dataLogin.password}`, () => {
            beforeEach(() => {
                cy.login(dataLogin.username, dataLogin.password)
            });

            it('Then the user dashboard page should be visible', () => {

                dashboardPage.siteTitle.should("be.visible")
                dashboardPage.checkName.should("be.visible")
                dashboardPage.mensage.should("be.visible")
            });
        });
        
    });
});