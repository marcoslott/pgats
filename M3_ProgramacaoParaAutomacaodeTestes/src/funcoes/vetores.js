const listarItens = (itens) => {
	const quantidadeDeItens = itens.length;
	console.log(quantidadeDeItens);

	for (let indice = 0; indice < quantidadeDeItens; indice++) {
		console.log(`${itens[indice]} é um item`);
	}

	/*For in é usado para percorrer Objetos
    for (let i in itens)
    {
    console.log(`${itens[i]} é um item`);
    }
*/
};


module.exports = {
	listarItens
};
