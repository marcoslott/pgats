/*PROBLEMA #1
Neste kata você criará uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.
Fonte: codewars.com*/

const { retornaListaSemString } = require("../../src/problema-01/filtro");
const assert = require("node:assert");

describe("Filtro", () => {
	describe("#retornaListaSemString", () => {
		it("Recebe uma lista com números e strings e retorna uma lista de números", () => {
			const listaDeEntrada = ["1", 2, 8, "asd", 9, 12];
			const listaDeSaida = retornaListaSemString(listaDeEntrada);
			assert.deepEqual(listaDeSaida, [2, 8, 9, 12]);
		});

		it("Recebe uma lista de strings e retorna uma lista vazia", () => {
			const listaDeEntrada = ["asd", "qwert", "9"];
			const listaDeSaida = retornaListaSemString(listaDeEntrada);
			assert.deepEqual(listaDeSaida, []);
		});

		it("Recebe uma lista de números e retorna uma lista de números", () => {
			const listaDeEntrada = [3, 21, 23, 28];
			const listaDeSaida = retornaListaSemString(listaDeEntrada);
			assert.deepEqual(listaDeSaida, [3, 21, 23, 28]);
		});

		it("Recebe uma lista vazia e retorna uma lista vazia", () => {
			const listaDeEntrada = [];
			const listaDeSaida = retornaListaSemString(listaDeEntrada);
			assert.deepEqual(listaDeSaida, []);
		});
	});
});
