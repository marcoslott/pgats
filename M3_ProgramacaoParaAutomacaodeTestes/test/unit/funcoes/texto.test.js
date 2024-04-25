const { existeTexto } = require("../../../src/funcoes/texto");
const assert = require("node:assert");

describe("Texto", () => {
	describe("#existeTexto", () => {
		const vetor = ["Cypress", "Selenium", "Playwright", "UFT", "Katalon"];
		it("Validar texto encontrado com sucesso", () => {
			//Arrange
			const textoPesquisado = "UFT";

			//Act
			const resultado = existeTexto(vetor, textoPesquisado);

			//Assert
			assert.ok(resultado);
		});
		it("Validar texto não encontrado", () => {
			//Arrange
			const textoPesquisado = "asd";

			//Act
			const resultado = existeTexto(vetor, textoPesquisado);

			//Assert
			assert.equal(resultado, false, `O valor ${textoPesquisado} foi encontrado mas não deveria estar no ${vetor}`);
		});
	});
});
