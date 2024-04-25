function concatenarPalavras(primeiraPalavra, segundaPalavra) {
	return `${primeiraPalavra} ${segundaPalavra}`;
}

const existeTexto = (listaTextos, textoPesquisado) => {
	for (let i = 0; i < listaTextos.length; i++) {
		if (listaTextos[i] === textoPesquisado) return true;
	}
	return false;
};

const darBoasVindas = () => {
	console.log("Seja bem vindo");
};

module.exports = {
	concatenarPalavras,
	existeTexto,
	darBoasVindas
};
