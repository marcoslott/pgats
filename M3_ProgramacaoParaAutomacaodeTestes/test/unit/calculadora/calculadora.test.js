const { Calculadora } = require("../../../src/calculadora/calculadora");
const assert = require("node:assert");

describe("Calculadora", () => {
	const calculadora = new Calculadora();

	describe("#media", () => {
		it("Validar se a media de 10 e 2 é igual a 6", () => {
			const resultadoDaMedia = calculadora.media(10, 2);
			assert.equal(resultadoDaMedia, 6);
		});
	});

	describe("#multiplicar", () => {
		it("Validar se a multiplicação de 10 e 2 é igual a 20", () => {
			const resultadoDaMultiplicacao = Calculadora.multiplicar(10, 2);
			assert.equal(resultadoDaMultiplicacao, 20);
		});
	});

	describe("#divisao", () => {
		it("Validar se a divisão de 10 por 2 é igual a 5", () => {
			const resultadoDaDivisao = Calculadora.divisao(10, 2);
			assert.equal(resultadoDaDivisao, 5);
		});
		it("Validar se a divisão de 0 por 0 é igual a NaN", () => {
			const resultadoDaDivisao = Calculadora.divisao(0, 0);
			assert.equal(resultadoDaDivisao, NaN);
		});
		it("Validar se a divisão de 1 por 0 é igual a infinito", () => {
			const resultadoDaDivisao = Calculadora.divisao(1, 0);
			assert.equal(resultadoDaDivisao, Infinity);
		});
	});
});
