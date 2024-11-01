class Home {
  validarSeEstaNaTelaHome() {
    cy.contains("a", "Home").should("have.attr", "style", "color: orange;");
  }
  validarSeSubscriptionEstaVisivelNoRodape() {
    cy.scrollTo("bottom");
    cy.contains("#footer", "Subscription")
      .scrollIntoView()
      .should("be.visible");
  }
  preencherSubscription(email) {
    cy.get("input#susbscribe_email").scrollIntoView().type(email);
    cy.get("button#subscribe").click();
  }

  validarMensagemParaSubscriptionComSucesso() {
    cy.contains("You have been successfully subscribed!").should("be.visible");
  }

  validarSeItensRecomendadosEstaVisivel() {
    cy.scrollTo("bottom");
    cy.contains(".recommended_items .title", "recommended items")
      .scrollIntoView()
      .should("be.visible");
  }

  adicionarItemRecomendadoAoCarrinho() {
    cy.get(".recommended_items .single-products")
      .eq(0)
      .within(() => {
        cy.get("p")
          .invoke("text")
          .then((text) => {
            cy.wrap(text.trim()).as("itemRecomendadoProductName");
          });
        cy.get("h2")
          .invoke("text")
          .then((text) => {
            cy.wrap(text.trim()).as("itemRecomendadoPrice");
          });
        cy.contains("a", "Add to cart").click({ force: true });
      });
  }
  scrollTop() {
    cy.scrollTo("top");
  }

  scrollUpButton() {
    cy.get("#scrollUp").should("be.visible").click();
  }

  validarSeEstaNoTopoDaHome() {
    cy.contains("Full-Fledged practice website for Automation Engineers")
      .scrollIntoView()
      .should("be.visible");
  }
}

export default new Home();
