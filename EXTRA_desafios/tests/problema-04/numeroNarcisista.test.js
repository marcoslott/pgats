/* PROBLEMA #4
Um Número Narcisista (ou Número de Armstrong) é um número positivo, a soma de seus próprios dígitos, cada um elevado à potência 
do número de dígitos em uma determinada base. Por exemplo, o número 153 possui 3 dígitos e é narcisista pois 1 ao cubo é 1, 5 ao 
cubo é 125 e 3 ao cubo é 27, logo, 153 = 1 + 125 + 27.
Fonte: codewars.com */

const { verificaSeENumeroNarcisista } = require("../../src/problema-04/numeroNarcisista");
const assert = require("node:assert");

describe("Número narcisista", () => {
	describe("#verificaSeENumeroNarcisista", () => {
		it("Validar que o método retorna true (Narcisista) a um número Narcisista com 3 dígitos", () => {
			//Arrange
			const numero = 407;

			//Act
			const resultado = verificaSeENumeroNarcisista(numero);

			//Assert
			assert.strictEqual(resultado, true);
		});

		it("Validar que o método retorna true (Narcisista) a um número Narcisista que possui apenas um dígito", () => {
			//Arrange
			const numero = 0;

			//Act
			const resultado = verificaSeENumeroNarcisista(numero);

			//Assert
			assert.strictEqual(resultado, true);
		});

		it("Validar que o método retorna false (Não-Narcisista) a um número Não-Narcisista com 3 dígitos", () => {
			//Arrange
			const numero = 234;

			//Act
			const resultado = verificaSeENumeroNarcisista(numero);

			//Assert
			assert.strictEqual(resultado, false);
		});

		it("Validar que o método retorna false (Não-Narcisista) a um número Não-Narcisista com 4 dígitos", () => {
			//Arrange
			const numero = 2135;

			//Act
			const resultado = verificaSeENumeroNarcisista(numero);

			//Assert
			assert.strictEqual(resultado, false);
		});

		it("Validar que o método retorna false (Não-Narcisista) para um número negativo", () => {
			//Arrange
			const numero = -100;

			//Act
			const resultado = verificaSeENumeroNarcisista(numero);

			//Assert
			assert.strictEqual(resultado, false);
		});
	});
});
