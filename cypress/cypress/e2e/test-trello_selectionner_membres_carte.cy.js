describe('template de test', () => {
    beforeEach(() => {
        // Ouvre la page de trello
        cy.smokeTest();
        // Se connecte au compte trello avec la fixture fournie
        cy.login();
    });


    it('Sélectionner un membre', () => {
        // Ouvre le tableau du projet
        cy.openProjectBoard();

        //Cliquer sur la carte
        cy.get('[data-testid="card-name"]').click();
        //Cliquer sur membres
        cy.get('[data-testid="card-back-members-button"]').click();
        //Sélectionner un membre
        cy.get(':nth-child(1) > [data-testid="choose-member-item-add-member-button"] > .urn7actSx8Wlh1').click();
    });

});