describe('creation de compte sur Trello', () => {
  it('creation de compte avec succès', () => {

    let email = 'joe.lateuf' + Date.now() + '@gmail.com';
    
    // Connexion à trello / SMOKE TEST
    cy.visit('https://trello.com/');
    cy.wait(1000);
    cy.get('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_logo"]').should('be.visible');

    // Rejeter tous les cookies
    cy.get('#onetrust-reject-all-handler').should('be.visible').click();

    // Aller sur la page de création de compte
    cy.get('[data-uuid="MJFtCCgVhXrVl7v9HA7EH_signup"]').should('be.visible').click();
    cy.wait(1000);    
    
    cy.origin('https://id.atlassian.com', {args: {email}}, ({email}) => {
      // Saisie de l'email et validation
      cy.get('[aria-describedby="email-uid2-helper"]').should('exist').type(email);
      cy.get('#signup-submit').click();

      // TODO: If Captcha

    });
    cy.wait(2000);
    cy.url().should('contain', 'create-first-team');


  })

  //TODO: cas de tests non-passants
  
})