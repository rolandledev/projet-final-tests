describe('template de test', () => {
    beforeEach(() => {
        // Ouvre la page de trello
        cy.smokeTest();
        // Se connecte au compte trello avec la fixture fournie
        cy.login();
    });


    it('Barre de recherche', () => {
        //Faire une recherche pour afficher 2 résultats
        cy.get('[data-testid="cross-product-search-input-skeleton"]').type('Projet Final');
        cy.wait(1000);
        cy.get('[data-testid="persist-recent-search"]').should('have.length', 2);
    });
});