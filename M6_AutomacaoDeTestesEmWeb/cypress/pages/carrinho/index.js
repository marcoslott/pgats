class Carrinho {
  irParaOCarrinho() {
    cy.get('.modal-content [href="/view_cart"]').click();
  }

  irParaOLoginOuRegistro() {
    cy.get('.modal-content [href="/login"]').click();
  }

  validarSeEstaNaTelaDoCarrinho() {
    cy.url().should("contain", "view_cart");
  }

  validarSeSubscriptionEstaVisivelNoRodape() {
    cy.scrollTo("bottom");
    cy.get("footer").should("be.visible");
    cy.contains("#footer", "Subscription").should("be.visible");
  }

  preencherSubscription(email) {
    cy.get("input#susbscribe_email").scrollIntoView().type(email);
    cy.get("button#subscribe").click();
  }

  validarMensagemParaSubscriptionComSucesso() {
    cy.contains("You have been successfully subscribed!").should("be.visible");
  }

  validarQuantidadeDoItemNoCarrinho(productNumber, qtd) {
    cy.get(`#product-${productNumber} .cart_quantity button`).should(
      "have.text",
      qtd,
    );
  }

  validarQuantidadeDeItensDistintosNoCarrinho(qtd) {
    cy.get('tr[id^="product-"]').should("have.length", qtd);
  }

  removerItemDoCarrinho(indice) {
    cy.get(".cart_quantity_delete").eq(indice).click();
  }

  validarItensDoCarrinho() {
    // Verifica o nome, preço e quantidade do primeiro produto no carrinho
    cy.get("@firstProductName").then((firstProductName) => {
      cy.contains(".cart_description", firstProductName).should("be.visible");
    });
    cy.get("@firstPrice").then((firstPrice) => {
      cy.contains(".cart_price", firstPrice).should("be.visible");
      cy.contains(".cart_total_price", firstPrice).should("be.visible");
    });
    cy.get("#product-1 .cart_quantity button").should("have.text", "1");

    // Verifica o nome, preço e quantidade do segundo produto no carrinho
    cy.get("@secondProductName").then((secondProductName) => {
      cy.contains(".cart_description", secondProductName).should("be.visible");
    });
    cy.get("@secondPrice").then((secondPrice) => {
      cy.contains(".cart_price", secondPrice).should("be.visible");
      cy.contains(".cart_total_price", secondPrice).should("be.visible");
    });
    cy.get("#product-2 .cart_quantity button").should("have.text", "1");
  }

  validarItemRecomendadoNoCarrinho() {
    // Verifica o nome, preço e quantidade do primeiro produto no carrinho
    cy.get("@itemRecomendadoProductName").then((firstProductName) => {
      cy.contains(".cart_description", firstProductName).should("be.visible");
    });
    cy.get("@itemRecomendadoPrice").then((firstPrice) => {
      cy.contains(".cart_price", firstPrice).should("be.visible");
      cy.contains(".cart_total_price", firstPrice).should("be.visible");
    });
    cy.get("#product-1 .cart_quantity button").should("have.text", "1");
  }
}

export default new Carrinho();
