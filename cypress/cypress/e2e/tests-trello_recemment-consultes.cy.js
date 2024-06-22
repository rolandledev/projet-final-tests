describe('Test Trello Tableau recemment consultes', () => {

    beforeEach(() => {
        cy.smokeTest();
        cy.login();
    });

    it('Test récemment consulté avec succès', () => {

        // Ouvrir le premier tableau disponible
        cy.openFirstBoard();

        // Récupérer le nom du tableau ouvert et lancer la vérification
        cy.get('[data-testid="board-name-container"]').then((title) => {  
            checkRecently(title.text());
        });
    });

    // Vérifier qu'il est bien présent dans la liste des récemment consultés
    function checkRecently(boardName) {
        // Revenir à l'accueil
        cy.get('a[href="/"]').click();
        cy.wait(1000);
        // Chercher la liste "Récemment consultés"
        let recentTag = cy.get('body').find('*').contains("Récemment consultés").first();
        let listOfRecent = recentTag.parent().next().find('li');
        // Rechercher la présence du nom du tableau récemment ouvert dans la liste
        listOfRecent.find('div').contains(boardName).then(($div) => {
            cy.get($div).should('have.length.at.least', 1);
        });
    }
});