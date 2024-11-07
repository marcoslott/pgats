/*PROBLEMA #6
Dado uma lista com números definidos como inteiros e outros que foram definidos como texto, retorne a soma deles como se todos 
fossem inteiros.
Fonte: codewars.com*/

const { somarNumerosDaLista } = require("../../src/problema-06/somaNumerosDaLista");
const assert = require("node:assert");

describe("Soma números da lista", () => {
	describe("#somarNumerosDaLista", () => {
		it("Validar a soma de números inteiros e string", () => {
			//Arrange
			const lista = [1, "2", 3, "4", "11"];

			//Act
			const resultado = somarNumerosDaLista(lista);

			//Assert
			assert.strictEqual(resultado, 21);
		});

		it("Validar a soma de números que são tipo string", () => {
			//Arrange
			const lista = ["2", "4", "11"];

			//Act
			const resultado = somarNumerosDaLista(lista);

			//Assert
			assert.strictEqual(resultado, 17);
		});

		it("Validar a soma de números que são tipo number", () => {
			//Arrange
			const lista = [3, 5, 99];

			//Act
			const resultado = somarNumerosDaLista(lista);

			//Assert
			assert.strictEqual(resultado, 107);
		});

		it("Validar que apenas os números são somados, ignorando outros caracteres", () => {
			//Arrange
			const lista = ["a", "y", "*", 1, "5", ""];

			//Act
			const resultado = somarNumerosDaLista(lista);

			//Assert
			assert.strictEqual(resultado, 6);
		});
	});
});
