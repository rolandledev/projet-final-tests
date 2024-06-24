describe("Ajout de tableau à un projet existant", () => {
  const VISIBILITE_ESPACE_DE_TRAVAIL =
    "Tous les membres de l'espace de travail";
  const VISIBILITE_PRIVE = "Seuls les membres du tableau";
  const VISIBILITE_PUBLIC = "Tous les internautes peuvent";

  beforeEach(() => {
    cy.smokeTest();
    cy.login();
  });

  it("Ajouter un tableau dans l'espace de travail avec succès", () => {
    ajouterUnTableau(VISIBILITE_ESPACE_DE_TRAVAIL);
  });

  it("Ajouter un tableau dans l'espace privé avec succès", () => {
    ajouterUnTableau(VISIBILITE_PRIVE);
  });

  it("Ajouter un tableau dans l'espace public avec succès", () => {
    ajouterUnTableau(VISIBILITE_PUBLIC);
  });

  function ajouterUnTableau(visibilite) {
    // Click sur le bouton Créer
    cy.get('[data-testid="header-create-menu-button"]')
      .should("be.visible")
      .click();

    // Choisir dans le sous-menu "Créer un tableau"
    cy.get('[data-testid="header-create-board-button"]')
      .should("be.visible")
      .click();

    // Renseigner le nom du nouveau tableau
    let boardName = "Board" + Date.now();
    cy.get('[data-testid="create-board-title-input"]')
      .should("be.visible")
      .type(boardName);

    // Choix de la visibilité du tableau
    let selectVisibilite = cy.get('[id*="create-board-select-visibility"]');
    selectVisibilite.click();
    cy.wait(1000);
    cy.get("body").find("div").contains(visibilite).click();
    cy.wait(1000);

    // Confirmer la création
    cy.get('button[data-testid="create-board-submit-button"]').click();
    cy.wait(1000);

    // Vérification de la présence du nouveau tableau dans la liste
    cy.get('[data-testid="board-name-display"]').should("contain", boardName);
  }
});
