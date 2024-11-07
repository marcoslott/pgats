/*PROBLEMA #6
Dado uma lista com números definidos como inteiros e outros que foram definidos como texto, retorne a soma deles como se todos 
fossem inteiros.
Fonte: codewars.com*/

const somarNumerosDaLista = (lista) => {
	/*	let resultadoDaSoma = 0;
	for (let item of lista) {
		if (!isNaN(parseInt(item))) resultadoDaSoma += parseInt(item);
	}
	return resultadoDaSoma;*/
	return lista.filter((item) => !isNaN(item) && item !== "").reduce((soma, item) => soma + Number(item), 0);
};

module.exports = { somarNumerosDaLista };
