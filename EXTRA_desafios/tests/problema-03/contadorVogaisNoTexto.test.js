/*PROBLEMA #3
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata. O texto de entrada conterá apenas letras
minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.
Fonte: codewars.com*/

const { contarQuantidadeDeVogais } = require("../../src/problema-03/contadorVogaisNoTexto");
const assert = require("node:assert");

describe("Contador vogais no texto", () => {
	describe("#contarQuantidadeDeVogais", () => {
		it("Valida o número total de vogais em uma única palavra, sem espaços", () => {
			const qtdVogais = contarQuantidadeDeVogais("tercas");
			assert.strictEqual(qtdVogais, 2);
		});

		it("Valida o número total de vogais em múltiplas palavras, com espaços", () => {
			const qtdVogais = contarQuantidadeDeVogais("uva bonita e elegante");
			assert.strictEqual(qtdVogais, 10);
		});

		it("Valida o número total de vogais em uma única palavra, sem espaços e sem vogais", () => {
			const qtdVogais = contarQuantidadeDeVogais("qhftwklmpfrz");
			assert.strictEqual(qtdVogais, 0);
		});

		it("Valida o número total de vogais em múltiplas palavras, com espaços e sem vogais", () => {
			const qtdVogais = contarQuantidadeDeVogais("qhftwk lmpfrz");
			assert.strictEqual(qtdVogais, 0);
		});

		it("Valida que vogais são as letras a, e, i, o, u", () => {
			const qtdVogais = contarQuantidadeDeVogais("aeiou");
			assert.strictEqual(qtdVogais, 5);
		});

		it("Valida que vogais não são as letras diferente de a, e, i, o, u", () => {
			const qtdVogais = contarQuantidadeDeVogais("bcdfghjklmnpqrstvxwyz");
			assert.strictEqual(qtdVogais, 0);
		});
	});
});
