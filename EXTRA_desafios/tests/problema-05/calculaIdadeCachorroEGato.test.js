/*PROBLEMA #5
 Eu tenho um gato e um cachorro. Comprei-os ao mesmo tempo. Isso foi há anos atrás. Retorne suas respectivas idades agora.
Regras importantes:
- O primeiro ano humano equivale a 15 anos de gato ou cachorro
- O segundo ano humano equivale a 9 anos de gato ou cachorro
- Cada novo ano humano vale 4 anos de gato e 5 anos de cachorro
Fonte: codewars.com*/

const { calculaIdadeCachorroEGato } = require("../../src/problema-05/calculaIdadeCachorroEGato");
const assert = require("node:assert");

describe("Calcula idade cachorro e gato", () => {
	describe("#calculaIdadeCachorroEGato", () => {
		it("Quantidade de anos igual a zero não retorna idades", () => {
			//Arrange
			const quantidadeDeAnos = 0;

			//Act
			const resultado = calculaIdadeCachorroEGato(quantidadeDeAnos);

			//Assert
			assert.deepEqual(resultado, {});
		});

		it("Validar que o primeiro ano do cachorro e gato valem 15 anos humanos", () => {
			//Arrange
			const quantidadeDeAnos = 1;

			//Act
			const resultado = calculaIdadeCachorroEGato(quantidadeDeAnos);

			//Assert
			assert.deepEqual(resultado, { cachorro: 15, gato: 15 });
		});

		it("Validar que o segundo ano do cachorro e gato valem 9 anos humanos que devem ser somados ao primeiro ano humano", () => {
			//Arrange
			const quantidadeDeAnos = 2;

			//Act
			const resultado = calculaIdadeCachorroEGato(quantidadeDeAnos);

			//Assert
			assert.deepEqual(resultado, { cachorro: 24, gato: 24 });
		});

		it("Validar que após o segundo ano humano, cada ano do cachorro valem 5 anos humanos enquanto os do gato valem 4 anos humanos", () => {
						//Arrange
						const quantidadeDeAnos = 10;

						//Act
						const resultado = calculaIdadeCachorroEGato(quantidadeDeAnos);
			
						//Assert
			assert.deepEqual(resultado, { cachorro: 64, gato: 56 });
		});
	});
});
