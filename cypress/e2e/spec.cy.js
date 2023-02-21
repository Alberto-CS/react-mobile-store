describe("Visit app", () => {
  
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Load app data", () => {
    cy.get(`[aria-label="product-card"]`)
  });

  it("Search for a brand", () => {
    cy.get(`[aria-label="search"]`).type(`alcatel`)
    cy.contains(`alcatel`)
  });
  it("Get details from a product", () => {
    cy.get(`[aria-label="product-card"]`).first().click()
    cy.url().should('include', '/product/')
  });
  
});