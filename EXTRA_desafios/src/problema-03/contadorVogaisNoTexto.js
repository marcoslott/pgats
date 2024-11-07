/*PROBLEMA #3
Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u como vogais para este Kata. O texto de entrada conterá apenas letras
minúsculas e/ou espaços. Letras acentuadas não fazem parte desse desafio.
Fonte: codewars.com*/

const contarQuantidadeDeVogais = (texto) => {
	const vogaisEncontradas = texto.match(/[aeiou]/g);
	return vogaisEncontradas ? vogaisEncontradas.length : 0;

	/*const letrasDoTexto = texto.split("");
	const vogais = ["a", "e", "i", "o", "u"];
	let qtdVogais = 0;

	for (let letra of letrasDoTexto) {
		if (vogais.includes(letra)) qtdVogais++;
	}
	return qtdVogais;*/
};

module.exports = { contarQuantidadeDeVogais };
