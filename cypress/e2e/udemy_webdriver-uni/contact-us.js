/// <reference types='cypress' />

describe('Test Contact Us for via WebdriverUni', () => {
    it('Open contact us form from menu', () => {
            //cy.visit('https://webdriveruniversity.com/')
            //cy.get('#contact-us')
                //.click({force: true})
    })

    it('Submit a successful submission via contact us form', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.document()
                .should('have.property', 'charset')
                .and('eq', 'UTF-8')
        cy.title()
                .should('eq','WebDriver | Contact Us')
        cy.url()
                .should('include', 'contactus')
        cy.get('input[name="first_name"]')
                .should('have.attr', 'placeholder', 'First Name')
        cy.get('input[name="first_name"]')
                .type('Jan')
        cy.get('input[name="last_name"]')
                .should('have.attr', 'placeholder', 'Last Name')
        cy.get('input[name="last_name"]')
                .type('Kowalski')
        cy.get('input[name="email"]')
                .should('have.attr', 'placeholder', 'Email Address')
        cy.get('input[name="email"]')
                .type('jan@kowalski.pl')
        cy.get('textarea[name="message"]')
                .should('have.attr', 'placeholder', 'Comments')
        cy.get('textarea[name="message"]')
                .type('Comments from Jan Kowalski')
        cy.get('input[type="submit"]')
                .click()
        cy.get('h1')
                .should('have.text', 'Thank You for your Message!')
    })

    it('No successful submission via contact us form without any information', () => {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('a[href$="contact"]')
                .click()
        cy.get('input[type="submit"]')
                .click()
        cy.get('body')
                .contains('Error: all fields are required')
        cy.get('body')
                .contains('Error: Invalid email address')
    })
})