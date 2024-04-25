const almocos = [
	["Salada", "Carne", "Bolo", "Vinho", "Sorvete"],
	["Arroz " + 1, 2, true],
	["Salada", null, ""]
];

console.log(`O que eu mais gostei foi: ${almocos[2][0]}`);

almocos[2][0] = "Lasanha";

console.log(`O que eu mais gostei foi alterado para: ${almocos[2][0]}`);

/*
    1. Crie um vetor com suas 3 comidas favoritas
    2. Crie uma matriz que represente a tabela abaixo:

    | 7 | 8 | 9 |
    | 4 | 5 | 6 |
    | 1 | 2 | 3 |
    | # | 0 | * |

    3. Escreva no console a seguinte frase:
       Eu gosto muito de: comida 1, comida 2 e comida 3
    
    4. Escreva os números contidos na coluna do meio da matriz
       Os números são: 8, 5, 2 e 0
*/

const comidasFavoritas = ["Lasanha", "Churrasco", "Xis"];

const tecladoTelefonico = [
	[7, 8, 9],
	[4, 5, 6],
	[1, 2, 3],
	["#", 0, "*"]
];

console.log(`Eu gosto muito de: ${comidasFavoritas[0]}, ${comidasFavoritas[1]} e ${comidasFavoritas[2]}`);
console.log(`Os números contidos no meio da matriz são: ${tecladoTelefonico[0][1]}, ${tecladoTelefonico[1][1]}, ${tecladoTelefonico[2][1]} e ${tecladoTelefonico[3][1]}`);

/*
    const pessoas = [
        [ "Pedro Victor", 30, [ "Bolo Gelado", "Sushi", "Frango" ] ],
        [ "Valéria Silva", 18, [ "Pizza", "Feijoada", "Strogonoff" ] ]
    ]
*/

//objeto pessoa
const pessoa = {
	nome: "Pedro Victor",
	idade: 30,
	comidasFavoritas: ["Bolo Gelado", "Sushi", "Frango"],
};
console.log(`O ${pessoa.nome} tem ${pessoa.idade} anos e gosta de ${pessoa.comidasFavoritas[0]}`);

//vetor de objetos (pessoa)
const pessoas = [
	{
		nome: "Pedro Victor",
		idade: 30,
		comidasFavoritas: ["Bolo Gelado", "Sushi", "Frango"],
	},
	{
		nome: "Valéria Silva",
		idade: 18,
		comidasFavoritas: ["Pizza", "Feijoada", "Strogonoff"],
	}
];

console.log(pessoas[1].nome);

/* Construa um vetor com 3 objetos que estão na sala onde você está agora.
Cada um dos objetos deverá ter suas propriedades (ex. tamanho, cor, nome, etc)
Depois disso, escreva no console quais são as informações relacionadas a cada um dos objetos que você colocou no vetor. 
*/

const objetos = [
	{
		id: 1,
		nome: "Livro",
		titulo: "OS segredos da mente milionária",
		autor: "Eker, T. Harv",
		paginas: 191,
		editora: "Sextante",
	},
	{
		id: 2,
		nome: "Bebida",
		tipo: "Cachaça",
		mililitro: 750,
		envelhecidaBarril: ["Amburana", "Carvalho Europeu"],
	},
	{
		id: 3,
		nome: "Boné",
		cor: "Pretp",
		marca: "Fila",
		tipo: "Trucker",
	}
];

console.log(`
    O primeiro objeto do vetor tem as seguintes propriedades: 
        ID: ${objetos[0].id}
        Nome: ${objetos[0].nome}
        Título: ${objetos[0].titulo}
        Autor: ${objetos[0].autor}
        Páginas: ${objetos[0].paginas}
        Editora: ${objetos[0].editora}
`);

console.log(`
    O segundo objeto do vetor tem as seguintes propriedades: 
        ID: ${objetos[1].id}
        Nome: ${objetos[1].nome}
        Tipo: ${objetos[1].tipo}
        Mililitro: ${objetos[1].mililitro}
        Envelhecida em Barril de: ${objetos[1].envelhecidaBarril.join(" / ")}
`);

const videogame = {
	marca: "Sony",
	modelo: "PS",
	versao: 5,
};
console.log(`A marca do video-game é ${videogame.marca}`);
console.log(`A marca do video-game é ${videogame["marca"]}`);

for (let propriedade in videogame) {
	console.log(`O valor da propriedade ${propriedade} é ${videogame[propriedade]}`);
}
