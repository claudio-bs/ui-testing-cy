/// <reference types="cypress"/>

const data = require('../fixtures/data.json')
const { dashboardPage } = require('../support/pages')

describe('Access My Account Panel', () => {
    
    context('Given I visit EBAC Store', () => {
        before(() => {
            cy.visit('/')
        });

        context(`When I log in with user ${data.username} and pass ${data.password}`, () => {
            beforeEach(() => {
                cy.login(data.username, data.password)
            });

            it('Then the user dashboard page should be visible', () => {

                dashboardPage.siteTitle.should("be.visible")
                dashboardPage.checkName.should("be.visible")
                dashboardPage.mensage.should("be.visible")
            });
        });
        
    });
});