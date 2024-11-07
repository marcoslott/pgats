/*PROBLEMA #5
 Eu tenho um gato e um cachorro. Comprei-os ao mesmo tempo. Isso foi há anos atrás. Retorne suas respectivas idades agora.
Regras importantes:
- O primeiro ano humano equivale a 15 anos de gato ou cachorro
- O segundo ano humano equivale a 9 anos de gato ou cachorro
- Cada novo ano humano vale 4 anos de gato e 5 anos de cachorro
Fonte: codewars.com*/

const calculaIdadeCachorroEGato = (quantidadeDeAnos) => {
	if (quantidadeDeAnos <= 0) return {};
	if (quantidadeDeAnos === 1) return { cachorro: 15, gato: 15 };
	if (quantidadeDeAnos === 2) return { cachorro: 24, gato: 24 };
	return { cachorro: 24 + (quantidadeDeAnos - 2) * 5, gato: 24 + (quantidadeDeAnos - 2) * 4 };
};

module.exports = { calculaIdadeCachorroEGato };
