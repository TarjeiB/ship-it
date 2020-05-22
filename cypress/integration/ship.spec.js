describe("ship it", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Should follow spec", () => {
    // Som Kaptein
    // 1: kunne velge mitt skip
    cy.findByText(/first tripper/i)
      .click()
      // 2: få en oversikt over skipets turer
      // 3: kunne velge en tur og få en oversikt over den turen
      .get("ul")
      .findByText("2018003")
      .click();
    // 4: Jeg ønsker også å vite hva vi skal laste og losse i en havn
    cy.findAllByText(/load/i);
    cy.findAllByText(/discharge/i);

    cy.get("input").click({ multiple: true });
  });
});
