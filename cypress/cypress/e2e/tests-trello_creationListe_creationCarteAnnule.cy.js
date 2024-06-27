describe('création liste', () => {
    beforeEach(() => {
        // Ouvre la page de trello
        cy.smokeTest();
        // Se connecte au compte trello avec la fixture fournie
        cy.login();
        // Ouvre le tableau du projet
        cy.openProjectBoard();
    });


    it('créer liste, saisir le titre, créer carte et annuler', () => {
        cy.get('[data-testid="list-composer-button"]').click()
        cy.wait(2000)
      

        // Saisir le titre de la nouvelle liste
        cy.get('.vVqwaYKVgTygrk > [data-testid="list-name-textarea"]').should('be.visible').type('Ma Nouvelle Liste')
    
        // Cliquer sur le bouton "Ajoutez une liste"
        cy.contains('Ajouter une liste').click()
    
        // Attendre que la nouvelle liste soit ajoutée
        cy.wait(2000)
    
        // Cliquer sur le “+ ajouter une nouvelle carte" de la nouvelle liste
        cy.get('[data-list-id="66798edc3c520b57b59051da"] > [data-testid="list"] > [data-testid="list-footer"] > [data-testid="list-add-card-button"]').click()
        cy.wait(2000)
        // Cliquer sur la croix pour annuler
        cy.get('[data-testid="list-card-composer-cancel-button"]').click()
    
        // Vérifier que l'ajout de la carte est annulé
        cy.get('.list-card-composer').should('not.exist')
        
        })
      })