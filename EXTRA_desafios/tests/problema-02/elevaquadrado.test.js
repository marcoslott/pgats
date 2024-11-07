/*PROBLEMA #2
Neste kata, você deve elevar ao quadrado cada dígito de um número e concatená-los. Por exemplo, se executarmos 9119 na função, 
sairá 811181, porque 9 ao quadrado é 81, 1 ao quadrado é, 1 ao quadrado é 1 e 9 ao quadrado é 81. (81-1-1-81)
Fonte: codewars.com
*/

const { elevarDigitosAoQuadrado } = require("../../src/problema-02/elevaquadrado");
const assert = require("node:assert");

describe("Eleva quadrado", () => {
	describe("#elevarDigitosAoQuadrado", () => {
		it("Deve elevar os números quando forem positivos", () => {
			const novoNumero = elevarDigitosAoQuadrado(325);
			assert.strictEqual(novoNumero, 9425);
		});

		it("Deve retornar zero se a entrada for zero", () => {
			const novoNumero = elevarDigitosAoQuadrado(0);
			assert.strictEqual(novoNumero, 0);
		});

		it("Deve retornar zero se o número for negativo", () => {
			const novoNumero = elevarDigitosAoQuadrado(-1);
			assert.strictEqual(novoNumero, 0);
		});
	});
});
