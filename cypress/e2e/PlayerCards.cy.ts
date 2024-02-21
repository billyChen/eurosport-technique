describe("Player Cards Interaction", () => {
  it("should display and handle card flips correctly", () => {
    cy.visit("/");

    // Wait for app to be hydrated
    cy.wait(1000);

    checkFrontContentOfFirstCard();
    clickAndCheckBackContentOfFirstCard();
    clickAndCheckBackContentOfSecondCard();
    clickSomewhereAndCheckNoBackContent();
  });
});

const checkFrontContentOfFirstCard = () => {
  cy.get('[data-testid="front-content"]')
    .first()
    .should("contain", "Matches played");
};

const clickAndCheckBackContentOfFirstCard = () => {
  cy.get('[data-testid="flipcard"]').first().click();

  cy.get('[data-testid="flipcard"]').first().should("contain", "Matches ratio");
};

const clickAndCheckBackContentOfSecondCard = () => {
  cy.get('[data-testid="flipcard"]').eq(1).click();

  cy.get('[data-testid="flipcard"]')
    .first()
    .should("not.contain", "Matches ratio");
  cy.get('[data-testid="flipcard"]').eq(1).should("contain", "Matches ratio");
};

const clickSomewhereAndCheckNoBackContent = () => {
  cy.get("body").click(0, 0);
  cy.get('[data-testid="flipcard"]')
    .first()
    .should("not.contain", "Matches ratio");

  cy.get('[data-testid="flipcard"]')
    .eq(1)
    .should("not.contain", "Matches ratio");
};
