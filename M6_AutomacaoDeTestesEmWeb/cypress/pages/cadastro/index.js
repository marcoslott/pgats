import menu from "../menu";
const FormData = require("form-data");

class Cadastro {
	preencherFormulario(usuario) {
		const timestamp = new Date().getTime();
		menu.irPara(menu.menus.LOGIN);
		cy.contains("div.signup-form", "New User Signup!").should("be.visible");
		cy.get('[data-qa="signup-name"]').type(usuario.name);
		cy.get('[data-qa="signup-email"]').type(`tester-${timestamp}@email.com`);
		cy.get('[data-qa="signup-button"]').click();
		cy.contains(".title", "Enter Account Information").should("be.visible");
		cy.get("input[type=radio]").check(usuario.title);
		cy.get('[data-qa="password"]').type(usuario.password, { log: false });
		cy.get('[data-qa="days"]').select(usuario.birth_date);
		cy.get('[data-qa="months"]').select(usuario.birth_month);
		cy.get('[data-qa="years"]').select(usuario.birth_year);
		cy.get("input[type=checkbox]#newsletter").check();
		cy.get("input[type=checkbox]#optin").check();
		cy.get('[data-qa="first_name"]').type(usuario.firstname);
		cy.get('[data-qa="last_name"]').type(usuario.lastname);
		cy.get('[data-qa="company"]').type(usuario.company);
		cy.get('[data-qa="address"]').type(usuario.address1);
		cy.get('[data-qa="address2"]').type(usuario.address2);
		cy.get('[data-qa="country"]').select(usuario.country);
		cy.get('[data-qa="state"]').type(usuario.state);
		cy.get('[data-qa="city"]').type(usuario.city);
		cy.get('[data-qa="zipcode"]').type(usuario.zipcode);
		cy.get('[data-qa="mobile_number"]').type(usuario.mobile_number);
		cy.get('[data-qa="create-account"]').click();
		cy.contains('[data-qa="account-created"]', "Account Created!").should("be.visible");
		cy.get('[data-qa="continue-button"]').click();
	}

	iniciarCadastro(usuario) {
		cy.get('[data-qa="signup-name"]').type(usuario.name);
		cy.get('[data-qa="signup-email"]').type(usuario.email);
		cy.get('[data-qa="signup-button"]').click();
	}

	validarSeUsuarioFoiDeletadoComSucesso() {
		cy.contains("h2.text-center", "Account Deleted!").should("be.visible");
		cy.get('[data-qa="continue-button"]').click();
	}

	validarMensagemParaCadastroComEmailExistente() {
		cy.get(".signup-form form p").should("contain", "Email Address already exist!").and("be.visible");
	}

	// Função para criar usuário via API
	criarUsuarioViaAPI(payloadUsuario) {
		const formData = new FormData();
		Object.keys(payloadUsuario).forEach((key) => {
			formData.append(key, payloadUsuario[key]);
		});

		return cy
			.request({
				method: "POST",
				url: "https://automationexercise.com/api/createAccount",
				headers: {
					"Content-Type": "multipart/form-data",
				},
				body: formData,
			})
			.then((response) => {
				const decoder = new TextDecoder("utf-8");
				const decodedBody = decoder.decode(response.body);
				expect(decodedBody).to.include('"message": "User created!"');
				expect(decodedBody).to.include('"responseCode": 201');
				return payloadUsuario.email;
			});
	}

	// Função para deletar usuário via API
	deletarUsuarioViaAPI(payloadUsuarioDelete) {
		const formData = new FormData();
		Object.keys(payloadUsuarioDelete).forEach((key) => {
			formData.append(key, payloadUsuarioDelete[key]);
		});

		return cy
			.request({
				method: "DELETE",
				url: "https://automationexercise.com/api/deleteAccount",
				headers: {
					"Content-Type": "multipart/form-data",
				},
				body: formData,
			})
			.then((response) => {
				const decoder = new TextDecoder("utf-8");
				const decodedBody = decoder.decode(response.body);
				expect(decodedBody).to.include('"message": "Account deleted!"');
				expect(decodedBody).to.include('"responseCode": 200');
			});
	}
}

export default new Cadastro();
