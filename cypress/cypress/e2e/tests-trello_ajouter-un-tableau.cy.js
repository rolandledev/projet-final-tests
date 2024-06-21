describe('Ajout de tableau à un projet existant', () => {
    beforeEach(() => {
        cy.smokeTest();
        cy.login();
    });

    it ('Ajouter un tableau avec succès', () => {
        
        // Click sur le bouton Créer
        cy.get('[data-testid="header-create-menu-button"]').should('be.visible').click();
        
        // Choisir dans le sous-menu "Créer un tableau"
        cy.get('[data-testid="header-create-board-button"]').should('be.visible').click();
        
        // Renseigner le nom du nouveau tableau
        let boardName = 'Board' + Date.now();
        cy.get('[data-testid="create-board-title-input"]').should('be.visible').type(boardName);
        
        // Choix de la visibilité du tableau
        let selectVisibilite = cy.get('[id*="create-board-select-visibility"]');
        selectVisibilite.click();
        selectVisibilite.find('div').contains('Espace de travail').click();
        cy.wait(1000);
        
        // Confirmer la création        
        cy.get('button[data-testid="create-board-submit-button"]').click();
        cy.wait(1000);
        
        // Vérification de la présence du nouveau tableau dans la liste
        cy.get('[data-testid="board-name-display"]').should('contain', boardName);
    });

});