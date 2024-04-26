const calcularTotal = (ferramentas, comprar) => {
	if (ferramentas.length <= 0 || comprar.length <= 0) {
		throw new Error(`Ambas as listas precisam ter ao menos um item.`);
	}
	let valorTotalItensComprados = 0;
	let itensComprados = [];

	for (let i = 0; i < comprar.length; i++) {
		for (let j in ferramentas) {
			if (comprar[i] === ferramentas[j].nome) {
				valorTotalItensComprados += ferramentas[j].preco;
				itensComprados.push(ferramentas[j].nome);
			}
		}
	}
	if (itensComprados.length === 0) {
		throw new Error(`Nenhuma ferramenta desejada encontrada.`);
	}
	return `O valor a pagar pelas ferramentas (${itensComprados.join(", ")}) é R$ ${valorTotalItensComprados.toFixed(2)}`;
};

module.exports = {
	calcularTotal
};
