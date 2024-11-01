class Login {
  realizarLogin(usuario, senha) {
    cy.contains("div.login-form", "Login to your account").should("be.visible");
    cy.get('[data-qa="login-email"]').type(usuario);
    cy.get('[data-qa="login-password"]').type(senha, { log: false });
    cy.get('[data-qa="login-button"]').click();
  }

  realizarLogout() {
    cy.contains("a", "Logout").click();
  }

  validarSeUsuarioEstaLogado(nomeUsuario) {
    cy.get("i.fa-user")
      .parent()
      .should("contain", `Logged in as ${nomeUsuario}`);
  }

  validarMensagemParaLoginComDadosInvalidos() {
    cy.get(".login-form form p")
      .should("contain", "Your email or password is incorrect!")
      .and("be.visible");
  }

  validarLogoutComSucesso() {
    cy.url().should("contain", "login");
    cy.contains("div.login-form", "Login to your account").should("be.visible");
  }

  validarSeEstaNaTelaDeLogin() {
    cy.contains("div.signup-form", "New User Signup!").should("be.visible");
  }
}

export default new Login();
