/*PROBLEMA #1
Neste kata você criará uma função que pega uma lista de inteiros e strings e retorna uma nova lista sem as strings.
Fonte: codewars.com*/

function retornaListaSemString(lista) {
	/*const listaDeNumeros = [];
	for (let item of lista) {
		if (typeof item === "number") {
			listaDeNumeros.push(item);
		}
	}
	return listaDeNumeros;*/

	return lista.filter((item) => typeof item === "number");
}

module.exports = { retornaListaSemString };
