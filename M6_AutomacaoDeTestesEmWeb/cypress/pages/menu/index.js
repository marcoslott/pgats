class Menu {
  menus = {
    PRODUTOS: "products",
    LOGIN: "login",
    CONTATO: "contact_us",
    DELETE: "delete_account",
    HOME: "Home",
    TESTCASES: "test_cases",
    CARRINHO: "view_cart",
  };

  irPara(menu) {
    switch (menu) {
      case "Home":
        cy.contains("a", "Home").click();
        break;
      default:
        cy.get(`.nav.navbar-nav a[href="/${menu}"]`).click();
        //cy.get(`[href="/${menu}"]`).click();
        cy.url().should("contain", menu);
        break;
    }
  }

  irParaCategoria(categoria) {
    cy.contains(".left-sidebar", "Category").should("be.visible");
    cy.get(`.left-sidebar a[href="${categoria}"]`).should("be.visible").click();
  }

  irParaSubCategoria(categoria, subcategoria) {
    cy.contains(".left-sidebar", "Category").should("be.visible");
    cy.get(`.left-sidebar ${categoria} a[href^="/category_products/"]`)
      .contains(subcategoria)
      .should("be.visible")
      .click();
    cy.contains(
      ".title",
      `${categoria.substring(1)} - ${subcategoria} Products`,
    ).should("be.visible");
  }

  irParaBrand(brand) {
    cy.contains(".left-sidebar .brands_products", "Brand").should("be.visible");
    cy.get(`.left-sidebar .brands_products a[href*="${brand}"]`)
      .should("be.visible")
      .click();
  }
}
export default new Menu();
