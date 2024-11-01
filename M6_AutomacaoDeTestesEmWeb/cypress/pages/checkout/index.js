class Checkout {
  irParaOCheckout() {
    cy.get(".btn.btn-default.check_out").should("be.visible").click();
  }
  validarEnderecoEaOrdem(seletor, usuario) {
    cy.contains(
      `${seletor} .address_firstname.address_lastname`,
      `${usuario.title}. ${usuario.firstname} ${usuario.lastname}`,
    );
    cy.contains(
      `${seletor} .address_address1.address_address2`,
      usuario.company,
    );
    cy.contains(
      `${seletor} .address_address1.address_address2`,
      usuario.address1,
    );
    cy.contains(
      `${seletor} .address_address1.address_address2`,
      usuario.address2,
    );
    cy.contains(
      `${seletor} .address_city.address_state_name.address_postcode`,
      `${usuario.city} ${usuario.state} ${usuario.zipcode}`,
    );
    cy.contains(`${seletor} .address_country_name`, usuario.country);
    cy.contains(`${seletor} .address_phone`, usuario.mobile_number);
  }
  validarOsCabecalhos() {
    cy.get(".heading").first().should("have.text", "Address Details");
    cy.get(".heading").last().should("have.text", "Review Your Order");
  }

  preencherCampoDescricao() {
    cy.get(".form-control").type("Comentário");
  }
}
export default new Checkout();
