describe('déconnexion de trello', () => {

    beforeEach( () => {       
        cy.smokeTest();
        cy.login();
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