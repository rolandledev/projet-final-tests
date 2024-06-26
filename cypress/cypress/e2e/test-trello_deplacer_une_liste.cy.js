describe('template de test', () => {
    beforeEach(() => {
        // Ouvre la page de trello
        cy.smokeTest();
        // Se connecte au compte trello avec la fixture fournie
        cy.login();
    });


    it('Déplacer une liste', () => {
        // Ouvrir le tableau du projet
        cy.openProjectBoard();
        cy.wait(1000);

        //Déplacer une liste
        cy.get('[data-testid="list"]');
        cy.get('[data-testid="list-header"]');
        cy.wait(1000);
        cy.get('[data-list-id="6666f95858216d17262b4105"] > [data-testid="list"] > [data-testid="list-header"] > [data-testid="list-edit-menu-button"] > .nch-icon > [data-testid="OverflowMenuHorizontalIcon"]').click({force: true});
        cy.wait(1000);
        cy.get('[data-testid="list-actions-move-list-button"]').click();
        cy.wait(1000);
        cy.get('.fdgdWzaIyXuZme > :nth-child(3) > .yMPj1pPmPFjeI1');
        cy.wait(1000);

        cy.get('.css-1de73az-indicatorContainer').last().click();
        cy.contains('3').click();
        cy.get('.bxgKMAm3lq5BpA.SdamsUKjxSBwGb.u0Qu04nzhYsVX_.SEj5vUdI3VvxDc').click();

    });
});