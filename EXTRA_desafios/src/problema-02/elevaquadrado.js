/*PROBLEMA #2
Neste kata, você deve elevar ao quadrado cada dígito de um número e concatená-los. Por exemplo, se executarmos 9119 na função, 
sairá 811181, porque 9 ao quadrado é 81, 1 ao quadrado é, 1 ao quadrado é 1 e 9 ao quadrado é 81. (81-1-1-81)
Fonte: codewars.com
*/

function elevarDigitosAoQuadrado(numero) {
	if (numero < 0) return 0;

	const numerosElevados = numero
		.toString()
		.split("")
		.map((digito) => (parseInt(digito) ** 2).toString())
		.join("");
	return parseInt(numerosElevados);

	/*
	if (numero < 0) return 0;
	const numerosElevados = [];

	for (let caracter of numero.toString()) {
		numerosElevados.push(parseInt(caracter) ** 2);
	}
	return parseInt(numerosElevados.join(""));*/
}

module.exports = { elevarDigitosAoQuadrado };
