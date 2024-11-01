class Produtos {
  validarSeEstaNaTelaDeProdutos() {
    cy.contains(".title", "All Products").should("be.visible");
    cy.url().should("contain", "products");
  }

  validarAListaDeProdutosEAcessarOPrimeiroProduto() {
    cy.get(".single-products")
      .should("have.length.at.least", 1)
      .and("be.visible")
      .first()
      .parent()
      .contains("View Product")
      .click();
  }

  validarSeEstaNaTelaDeDetalhesDoProduto() {
    cy.url().should("contain", "product_details");
  }

  continuarCompraAposAdicionarNoCarrinho() {
    cy.get(".btn.btn-success.close-modal.btn-block").click();
  }

  adicionarProdutoDaListaAoCarrinho(indiceProduto) {
    cy.get("div.productinfo.text-center")
      .eq(indiceProduto)
      .within(() => {
        cy.get("p")
          .invoke("text")
          .then((text) => {
            if (indiceProduto == 0) cy.wrap(text.trim()).as("firstProductName");
            else if (indiceProduto == 1)
              cy.wrap(text.trim()).as("secondProductName");
          });
        cy.get("h2")
          .invoke("text")
          .then((text) => {
            if (indiceProduto == 0) cy.wrap(text.trim()).as("firstPrice");
            else if (indiceProduto == 1) cy.wrap(text.trim()).as("secondPrice");
          });
        cy.get("a.btn.btn-default.add-to-cart").click();
      });
  }

  detalhesProduto_adicionarAoCarrinho() {
    cy.get("button.btn.btn-default.cart").click();
  }

  detalhesProduto_alterarQtd(qtd) {
    cy.get("#quantity").clear().type(qtd);
  }

  detalhesProduto_validarProductName() {
    cy.get("div.product-information h2").then(($el) => {
      const elementoProduto = $el;
      expect(elementoProduto.text().length).to.be.greaterThan(0);
    });
  }

  detalhesProduto_validarCategory() {
    cy.get("div.product-information p")
      .contains("Category:")
      .invoke("text")
      .then((text) => {
        const categoryText = text.replace("Category:", "").trim();
        expect(categoryText.length).to.be.greaterThan(0);
        cy.log(categoryText);
      });
  }

  detalhesProduto_validarPrice() {
    cy.get("div.product-information span span")
      .invoke("text")
      .then((text) => {
        const precoText = text.trim();
        expect(precoText.length).to.be.greaterThan(0);
        cy.log(precoText);
      });
  }

  detalhesProduto_validarAvailability() {
    cy.get("div.product-information p")
      .contains("Availability:")
      .parent()
      .invoke("text")
      .then((text) => {
        const availabilityText = text.replace("Availability:", "").trim();
        expect(availabilityText.length).to.be.greaterThan(0);
        cy.log(availabilityText);
      });
  }

  detalhesProduto_validarCondition() {
    cy.get("div.product-information p")
      .contains("Condition:")
      .parent()
      .invoke("text")
      .then((text) => {
        const conditionText = text.replace("Condition:", "").trim();
        expect(conditionText.length).to.be.greaterThan(0);
        cy.log(conditionText);
      });
  }

  detalhesProduto_validarBrand() {
    cy.get("div.product-information p")
      .contains("Brand:")
      .parent()
      .invoke("text")
      .then((text) => {
        const brandText = text.replace("Brand:", "").trim();
        expect(brandText.length).to.be.greaterThan(0);
        cy.log(brandText);
      });
  }

  realizarPesquisaComNomeDoPrimeiroProduto() {
    cy.get("div.productinfo.text-center p")
      .first()
      .invoke("text")
      .then((productName) => {
        cy.get("#search_product").type(productName.trim());
        cy.get("#submit_search").click();
      });
  }

  validarListaAposPesquisa() {
    cy.contains(".title", "Searched Products").should("be.visible");
    cy.get(".single-products")
      .should("be.visible")
      .and("have.length.at.least", 1);
  }

  validarFiltroPorBrand(brand) {
    cy.get(".title")
      .should(($el) => {
        expect($el.text()).to.include("Brand");
        expect($el.text()).to.include(brand);
      })
      .and("be.visible");
    cy.url().then((url) => {
      expect(url).to.include("brand_products");
      expect(url).to.include(brand.replace(/ /g, "%20"));
    });
  }

  preencherReview(usuario) {
    cy.contains('a[href="#reviews"]', "Write Your Review").should("be.visible");
    cy.get("#name").should("be.visible").type(usuario.name);
    cy.get("#email").should("be.visible").type(usuario.email);
    cy.get("#review").should("be.visible").type("Review");
    cy.get("#button-review").should("be.visible").click();
  }

  validarReviewEnviadoComSucesso() {
    cy.contains(".alert-success.alert", "Thank you for your review.", {
      timeout: 10000,
    }).should("be.visible");
  }
}
export default new Produtos();
