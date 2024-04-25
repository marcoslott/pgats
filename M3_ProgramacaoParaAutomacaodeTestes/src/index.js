const { concatenarPalavras, existeTexto, darBoasVindas } = require("./funcoes/texto");
const { mediaEntreDoisNumeros } = require("./funcoes/calculos");
const { listarItens } = require("./funcoes/vetores");

console.log(concatenarPalavras("TV", "Porta"));
darBoasVindas();
console.log(mediaEntreDoisNumeros(10, 5));

const tecnologias = ["Cypress", "Selenium", "Playwright", "UFT", "Katalon"];
listarItens(tecnologias);

/*
    Crie uma função que retorna true caso um texto pequisado seja um dos itens de um vetor fornecido. 
    A função deve estar dentro de um arquivo e o uso dela deve estar em outro arquivo no qual teremos um
    condicional que mostra o texto "Achou" en casos onde a função retorna True.
*/
const encontrou = existeTexto(tecnologias, "Selenium");
if (encontrou) 
    console.log("Achou");
else 
    console.log("Não encontrou");
