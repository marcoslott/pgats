/*
#Decomposição
- Capturar a idade
- Capturar o peso
- Capturar a altura
- Verificar se a idade esta no intervalo >= 20 e <=60
- Calcular o IMC
- Com base no resultado do IMC classificar em uma das faixas "Baixo peso", "Normal", "Sobrepeso", "Obesidade"

#Abstração
- Não precisa levar em consideração idade abaixo de 20 e maior que 60


#Reconhecimento de Padrões
- Todas as classificações possuem uma faixa de intervalo

#Pensamento Algoritmico 
1. Capturar a idade
2. Se a idade estiver na faixa entre 20 e 60 então prosseguir.
3. Capturar o peso e armazenar este valor
4. Capturar a altura e armazenar este valor
5. Efetuar a seguinte operação de divisão: peso / (altura x altura) e armazenar este valor como IMC
6. Se o IMC for menor que 18,5 então classificar como "Baixo peso"
7. Senão, verificar se o IMC estiver entre 18,5 e 24,99 então classificar como "Normal"
8. Senão, verificar se o IMC estiver entre 25 e 29,99 então classificar como "Sobrepeso"
9. Senão, verificar se o IMC é maior ou igual a 30 e então classificar como "Obesidade"
10. Senão, não foi possível realizar o calculo de IMC
11. Ao final, verificar se deu erro ou se foi possível calcular o IMC e Classificar. E então apresentar o resultado na tela
*/

const tabelaImc = [
	{ valorMinimo: 0, valorMaximo: 18.49, classificacao: "Baixo peso" },
	{ valorMinimo: 18.5, valorMaximo: 24.99, classificacao: "Normal" },
	{ valorMinimo: 25, valorMaximo: 29.99, classificacao: "Sobrepeso" },
	{ valorMinimo: 30, valorMaximo: 1000, classificacao: "Obesidade" },
];

const pessoa = {
	idade: null,
	peso: null,
	altura: null,
	classificacao: null,
	imc: null,
};

const prompt = require("prompt-sync")();
pessoa.idade = prompt("Digite a sua idade: ");

if (pessoa.idade >= 20 && pessoa.idade <= 60) {
	pessoa.peso = prompt("Digite o seu peso (kg): ");
	pessoa.altura = prompt("Digite a sua altura (X.XX): ");
	pessoa.imc = pessoa.peso / (pessoa.altura * pessoa.altura);

	//percorre "tabelaImc" e verifica qual o intervalo a pessoa esta inserida, então classifica e armazena no objeto "pessoa"
	for (let indice in tabelaImc) {
		if (pessoa.imc >= tabelaImc[indice].valorMinimo && pessoa.imc <= tabelaImc[indice].valorMaximo) {
			pessoa.classificacao = tabelaImc[indice].classificacao;
			break;
		} 
        else 
            pessoa.classificacao = "Erro";
	}

	if (pessoa.classificacao == "Erro") 
        console.log(`Ocorreu uma falha no cálculo do IMC`);
	else 
        console.log(`O valor do seu IMC é ${pessoa.imc.toFixed(2)} e foi classificado como ${pessoa.classificacao}`);
}
