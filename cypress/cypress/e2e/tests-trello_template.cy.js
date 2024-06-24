describe('template de test', () => {
    beforeEach(() => {
        // Ouvre la page de trello
        cy.smokeTest();
        // Se connecte au compte trello avec la fixture fournie
        cy.login();
    });


    it('mon scénario de test', () => {
        // Ouvre le tableau du projet
        cy.openProjectBoard();
    });
});