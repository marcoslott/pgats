class Calculadora {
	//Método privado, só é utilizado dentro da classe
	#somar(primeiroNumero, segundoNumero) {
		return primeiroNumero + segundoNumero;
	}

	subtrair(primeiroNumero, segundoNumero) {
		return primeiroNumero - segundoNumero;
	}

	media(primeiroNumero, segundoNumero) {
		return this.#somar(primeiroNumero, segundoNumero) / 2;
	}

	//Método static não tem acesso aos benefícios da classe.
	//Pode ser acessado diretamente sem instaciar -> Calculadora.multiplicar(x,x)
	static multiplicar(primeiroNumero, segundoNumero) {
		return primeiroNumero * segundoNumero;
	}

	static divisao(primeiroNumero, segundoNumero) {
		return primeiroNumero / segundoNumero;
	}
}

module.exports = {
	Calculadora
};
