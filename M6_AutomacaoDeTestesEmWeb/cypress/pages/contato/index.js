class Contato {
	preencherFormulario(usuario) {
		cy.contains(".contact-form .title", "Get In Touch").should("be.visible");
		cy.get('[data-qa="name"]').type(usuario.name);
		cy.get('[data-qa="email"]').type(usuario.email);
		cy.get('[data-qa="subject"]').type("Assunto");
		cy.get('[data-qa="message"]').type("Mensagem aqui");
		cy.fixture("example.json").as("arquivo");
		cy.get('input[name="upload_file"]').selectFile("@arquivo");
		cy.get('[data-qa="submit-button"]').click();
	}

	validarMensagemDeMensagemEnviadaComSucesso() {
		cy.contains(".status", "Success! Your details have been submitted successfully.").should("be.visible");
	}

	/*Tive que criar este método para ignorar a Exception do Google Maps API, por algum motivo estava dando esta exceção
	neste ponto, outro colega teve problema parecido.*/
	ignorarExceptionGoogleMapsAPI() {
		cy.on("uncaught:exception", (err, runnable) => {
			// Verifica se o erro é relacionado à API do Google Maps
			if (err.message.includes("Google Maps API is required")) {
				// Se for, exibe um aviso no console
				console.warn("Erro de API do Google Maps ignorado:", err.message);
				// Retorna false para evitar que o erro cause a falha do teste
				return false;
			}
			// Caso contrário, continua com o tratamento normal do erro
			return true;
		});
	}
}

export default new Contato();
