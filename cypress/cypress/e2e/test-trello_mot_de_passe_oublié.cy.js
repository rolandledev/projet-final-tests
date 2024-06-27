describe('template de test', () => {

    it('Mot de passe oublié', () => {
        //Se rendre sur le site Trello.com
        cy.visit('https://trello.com/fr');
        cy.wait(1000);
        //Cliquer sur le bouton connexion
        cy.get('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]').click();
        //Cliquer sur le lien "Vous ne pouvez pas vous connecter"
        cy.wait(1000);
        cy.origin('https://id.atlassian.com', () => {
            cy.visit('https://id.atlassian.com/login?application=trello&continue=https%3A%2F%2Ftrello.com%2Fauth%2Fatlassian%2Fcallback%3Fdisplay%3DeyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%253D%253D&display=eyJ2ZXJpZmljYXRpb25TdHJhdGVneSI6InNvZnQifQ%3D%3D');
            cy.get('#resetPassword').click();
            cy.get('#email').type('groupe2wcs@hotmail.com');
            cy.wait(4000);
            cy.get('.css-178ag6o').click({force:true});
            cy.contains('We sent a recovery link to you at').should('be.visible');
        });

        


    });
});