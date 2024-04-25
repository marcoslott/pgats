function calcularImc(peso, altura) {
	return peso / (altura * altura);
}

function somar(valor1, valor2) {
	return valor1 + valor2;
}

module.exports = {
	calcularImc,
	somar
};
