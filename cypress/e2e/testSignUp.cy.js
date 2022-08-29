const urlNewEmail = "https://tempmail.dev/en";
const url = "https://www.olympia.casino/";
const password = Math.random().toString(36).slice(2, 14);

describe("Test case for Sign Up", function () {

    it("Go to the site", function () {
        cy.visit(url)
    });
    it("Registration form", function () {
        cy.visit(urlNewEmail)
        cy.wait(2000)
        cy.get('#current-mail').invoke('text').then(function (text) {
           let emailText = text
           const args = { emailText, password }
            cy.origin(url, {args}, function ({emailText, password}) {
                cy.visit("https://www.olympia.casino")

                // Form step-1
                cy.get('.layout__header > .link-btn--primary').click()
                cy.get('#email').type(emailText).should('be.visible')
                cy.get('#password_single').type(password).should('be.visible')
                cy.get('.select__arrow-icon').click()
                cy.get('#currency-item-1').should('be.visible')
                cy.contains('next').should('have.text', 'next').click()

                // Form step-2
                cy.get('#first_name').type('Denis').should('be.empty')
                cy.get('#last_name').type('Transkiy').should('be.empty')
                cy.get('.simple-date__day > .input__native').type('15').should('be.empty')
                cy.get('.simple-date__month > .input__native').type('01').should('be.empty')
                cy.get('.simple-date__year > .input__native').type('2000').should('be.empty')
                cy.get('#mobile_phone-code').clear().type('+380{downarrow}{enter}').should('be.empty')
                cy.get('#mobile_phone-number').clear().type('3244322').should('be.empty')
                cy.contains('next').should('have.text', 'next').click()

                // Form step-3
                cy.get('#country').focus().clear().type('Ukraine{downarrow}').should('be.empty').click()
                cy.get('#city').focus().type('Kherson{enter}').should('be.empty')
                cy.get('#address').focus().type('Lavren{enter}').should('be.empty')
                cy.get('#postal_code').focus().type('73000{enter}').should('be.empty')
                cy.contains('Receive promos by email').should('be.visible').click()
                cy.contains('Receive promos by SMS').should('be.visible').click()
                cy.contains('I am 18 years old and I accept the').should('be.visible').click()
            })
        })
    });
});