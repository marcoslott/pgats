const { mediaEntreDoisNumeros } = require("../../../src/funcoes/calculos");
const assert = require("node:assert");

describe("Calculos", function () {
	//Tudo aqui é sobre Calculos

	describe("#mediaEntreDoisNumeros", () => {
		//Tudo aqui é sobre a função mediaEntreDoisNumeros

		it("Validar se a média entre 10 e 2 é igual a 6", () => {
			assert.equal(mediaEntreDoisNumeros(10, 2), 6);
		});
		it("Validar se valores textuais retornam NaN", () => {
			assert.equal(mediaEntreDoisNumeros("a", ""), NaN);
		});
		it("Validar se a média entre 0 e 0 é igual a 0", () => {
			//assert.equal(mediaEntreDoisNumeros(0, 0), 0);
			//Arrange - Preparar
			const primeiroNumero = 0;
			const segundoNumero = 0;
			const resultadoEsperado = 0;

			//Act - Executar
			const resultadoAtual = mediaEntreDoisNumeros(primeiroNumero, segundoNumero);

			//Assert - Comparação do Resultado Atual e do Esperado
			assert.equal(resultadoAtual, resultadoEsperado);
			/*if(resultadoAtual!=resultadoEsperado){
                throw new Error(`${resultadoEsperado} e ${resultadoAtual} não são iguais`)
            }*/
		});
	});
});
