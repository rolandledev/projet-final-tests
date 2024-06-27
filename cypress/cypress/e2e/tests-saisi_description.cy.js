describe('création liste', () => {
    beforeEach(() => {
        // Ouvre la page de trello
        cy.smokeTest();
        // Se connecte au compte trello avec la fixture fournie
        cy.login();
        // Ouvre le tableau du projet
        cy.openProjectBoard();
    });


    it('saisir une description sur une carte', () => {
        //clique sur la carte
        cy.get('#board > li:nth-child(2) > div > div.IapUGb_Cq2VzSr > button.O9vivwyDxMqo3q.bxgKMAm3lq5BpA.iUcMblFAuq9LKn.PnEv2xIWy3eSui.SEj5vUdI3VvxDc').click()
        cy.wait(2000)
        // Saisir le titre de la nouvelle carte
        cy.get('[data-testid="list-card-composer-textarea"]').should('be.visible').type('c est un test d automatisation de description de carte')
        cy.get('[data-testid="list-card-composer-add-card-button"]').click()
        cy.get('[data-testid="CloseIcon"]').click()
        // Saisir une carte sur autre liste
        cy.get('#board > li:nth-child(3) > div > div.IapUGb_Cq2VzSr > button.O9vivwyDxMqo3q.bxgKMAm3lq5BpA.iUcMblFAuq9LKn.PnEv2xIWy3eSui.SEj5vUdI3VvxDc').should('be.visible').type('c est un test d automatisation de description de carte')
        cy.get('[data-testid="list-card-composer-add-card-button"]').click()
        cy.get('[data-testid="CloseIcon"]').click()
        
    });
});