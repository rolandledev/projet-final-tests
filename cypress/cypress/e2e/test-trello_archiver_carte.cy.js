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

        //Cliquer sur la carte
        cy.get(':nth-child(4) > [data-testid="trello-card"] > .amUfYqLTZOvGsn > [data-testid="card-name"]').click();
        cy.get('[data-testid="card-back-archive-button"]').click();
    });
});