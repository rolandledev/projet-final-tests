describe('déconnexion de trello', () => {

    beforeEach( () => {
        // SMOKE TEST
        cy.visit('https://trello.com/');
        cy.wait(1000);
        cy.get('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_logo"]').should('be.visible');

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

    it('déconnexion avec succès', () => {

        // Ouvrir le menu "Membre" et choisir "Se déconnecter"
        cy.get('[data-testid="header-member-menu-button"]').should('be.visible').click();
        cy.get('[data-testid="account-menu-logout"]').should('be.visible').click();
        cy.wait(1000);

        cy.origin('https://id.atlassian.com', () => {
            // Click sur le bouton "Déconnexion"
            cy.get('#logout-submit').click();
        });
        cy.wait(1000);
        // Déconnexion avec succès
        cy.get('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').should('be.visible');
    });
});