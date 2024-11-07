/* PROBLEMA #4
Um Número Narcisista (ou Número de Armstrong) é um número positivo, a soma de seus próprios dígitos, cada um elevado à potência 
do número de dígitos em uma determinada base. Por exemplo, o número 153 possui 3 dígitos e é narcisista pois 1 ao cubo é 1, 5 ao 
cubo é 125 e 3 ao cubo é 27, logo, 153 = 1 + 125 + 27.
Fonte: codewars.com */

const verificaSeENumeroNarcisista = (numeroRecebido) => {
	/*let numeroAposCalculo = 0;
	for (let numero of numeroRecebido.toString().split("")) {
		const numeroElevadoAPotencia = parseInt(numero) ** numeroRecebido.toString().length;
		numeroAposCalculo += numeroElevadoAPotencia;
	}*/
	const somaDosDigitosElevados = numeroRecebido
		.toString()
		.split("")
		.reduce((acumulador, digito, i, vetor) => acumulador + Math.pow(parseInt(digito), vetor.length), 0);

	return somaDosDigitosElevados === numeroRecebido;
};

module.exports = { verificaSeENumeroNarcisista };
