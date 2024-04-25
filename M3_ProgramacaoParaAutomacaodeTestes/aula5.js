//Cálculo da soma
function somar(valor1, valor2) {
	return valor1 + valor2;
}

//Exibição do resultado
function exibirResultado(resultadoMedia) {
	console.log(`O resultado da média é: ${resultadoMedia}`);
}

//Cálculo da média
function calcularMedia(resultadoSoma) {
	return resultadoSoma / 2;
}

const resultadoSoma = somar(5, 7);
const resultadoMedia = calcularMedia(resultadoSoma);
exibirResultado(resultadoMedia);
