describe('Connexion sur Trello', () => {

    beforeEach(() => {
        cy.smokeTest();
        
    });

    it ('Connexion réussie', () => {
        cy.login();
    });
});