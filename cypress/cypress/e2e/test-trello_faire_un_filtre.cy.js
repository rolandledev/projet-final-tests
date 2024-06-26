describe('template de test', () => {
    beforeEach(() => {
        // Ouvre la page de trello
        cy.smokeTest();
        // Se connecte au compte trello avec la fixture fournie
        cy.login();
    });


    it('Faire un filtre', () => {
        // Ouvre le tableau du projet
        cy.openProjectBoard();

        //Faire le filtre
        cy.get('[data-testid="FilterIcon"]').click();
        cy.wait(5000);
        //Cocher une étiquette
        cy.get('body > div.atlaskit-portal-container > div:nth-child(2) > section > div > div:nth-child(6) > ul > li:nth-child(4) > label > span.faR06patL_ldVW.andWTR_XxIdoiY > div > span').click();
     
    });
});