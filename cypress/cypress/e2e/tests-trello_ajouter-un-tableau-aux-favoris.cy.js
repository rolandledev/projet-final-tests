describe('Ajouter un tableau à la liste des favoris dans Trello', () => {
    beforeEach(() => {
        cy.smokeTest();
        cy.login();
    });

    it ('Ajout du dernier tableau par le dashboard de tableaux en tant que favori', () => {

        // Choix du premier tableau de la liste
        cy.openFirstBoard();

        // Clic pour ajouter aux favoris
        let btnFavori = cy.get('[data-testid="board-name-container"]').next();
        btnFavori.click();

        // Vérification de l'ajout aux favoris (l'étoile du bouton favori est allumée)
        btnFavori.find('[data-testid="StarredIcon"]').should('have.length', 1);
        cy.wait(2000);

        // Après vérification, suppression des favoris (remise à zéro pour les prochains tests)
        btnFavori.click();

    });
});