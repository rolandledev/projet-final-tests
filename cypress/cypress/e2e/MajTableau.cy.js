describe('Maj Tableau', () => {

    beforeEach( () => {       
        cy.smokeTest();
        cy.login();
    });

    it('Maj Tableau', () => {

        // Ouvrir le menu "Membre" et choisir "Se déconnecter"
        cy.get(':nth-child(1) > .board-tile > .board-tile-details').click()
        cy.get(':nth-child(4) > [data-testid="trello-card"] > .amUfYqLTZOvGsn > [data-testid="card-name"]').click()
        cy.wait(1000)
        cy.get('#layer-manager-card-back > div > div > div > div > div > div > div.window-header.js-card-detail-header > div.window-title > textarea').click().clear().type('Tableau Mis à jour !')
        cy.get('#layer-manager-card-back > div > div > div > div > button > span > span').click()
        cy.get('#header > div.hMxZQIbDc04Ecp > div:nth-child(5) > button > div > span').click()
        cy.get('body > div.atlaskit-portal-container > div:nth-child(2) > section > div > div > div:nth-child(5) > nav > ul > li:nth-child(2) > button > span > span').click()
        
    });
});s