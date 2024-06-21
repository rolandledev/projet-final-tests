// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// Commande de smoke test
Cypress.Commands.add('smokeTest', () => {
     // SMOKE TEST
     cy.visit('https://trello.com/');
     cy.wait(1000);
     cy.get('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_logo"]').should('be.visible');
});

// Commande de login au site trello
Cypress.Commands.add('login', () => {
    // Aller sur la page de login
    cy.get('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').should('be.visible').click();
    cy.wait(1000); 

    // Connexion
    cy.fixture('connexion').then( user => {
        cy.origin('https://id.atlassian.com', {args: {user}}, ({user}) => {
            // Saisie de l'email et continuer
            cy.get('[aria-describedby="username-uid2-helper"]').should('exist').type(user.email);
            cy.get('#login-submit').click();
            cy.wait(1000);
            // Saisie du mot de passe
            cy.get('[aria-describedby="password-uid3-helper"]').should('be.visible').type(user.password);
            cy.get('#login-submit').click();
            // TODO: If Captcha
    

            // Attente du chargement de la page
            cy.wait(2000);                
        });

        // Connexion avec succès
        cy.url().should('contain', 'boards');
    });
});
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })