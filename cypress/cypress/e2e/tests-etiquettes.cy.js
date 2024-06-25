describe('création liste', () => {
    beforeEach(() => {
        // Ouvre la page de trello
        cy.smokeTest();
        // Se connecte au compte trello avec la fixture fournie
        cy.login();
        // Ouvre le tableau du projet
        cy.openProjectBoard();
    });


    it('mettre une ou plusieurs étiquettes sur une carte', () => {
        //clique sur la carte
        cy.get('.amUfYqLTZOvGsn').click()
        cy.wait(2000)
        //clique sur etiquette
        cy.get('[data-testid="card-back-labels-button"]').click()
        //clique sur la couleur verte
        cy.get(':nth-child(1) > .x__X83c1QM1uFb > .faR06patL_ldVW > .dFag8JU1lt76jj > [data-testid="card-label"]').click()
        //clique sur les croix fermer
        cy.get('[data-testid="popover-close"]').click()
        cy.wait(2000)
        cy.get('.Y9J4BArcarEAX9 > .nch-icon > [data-testid="CloseIcon"]').click()
        cy.wait(2000)
        //clique sur la carte
        cy.get('.amUfYqLTZOvGsn').click()
   
        //clique sur etiquette
        cy.get('[data-testid="card-back-labels-button"]').click()

        //couleur
        cy.get(':nth-child(5) > .x__X83c1QM1uFb').click()
        cy.get('body > div.atlaskit-portal-container > div:nth-child(2) > section > div > div > ul > li:nth-child(2) > label > span.faR06patL_ldVW.GK6eVCOaMchzXe > div > span').click()
        cy.get('[data-testid="popover-close"]').dblclick()

        //clique sur les croix fermer
        cy.get('.Y9J4BArcarEAX9').click()
        
        
    });
});