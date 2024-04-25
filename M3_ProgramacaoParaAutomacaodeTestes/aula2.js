let nome = "Julio";
nome += " De Lima";

console.log(nome);

let salario = 5000;
salario += 1000;
//salario = salario + 1000;

salario -= 500;
console.log(salario);

salario++;
console.log(salario); //5501

console.log(salario--); //5501

console.log(salario); //5500

console.log(--salario); //5499

const linguagensDeProgramacao = ["js", "php", "java", "ruby"];
let indice = 3;
console.log(linguagensDeProgramacao[indice]); //ruby
console.log(linguagensDeProgramacao[--indice]); //java
console.log(linguagensDeProgramacao.join(" - ")); //js - php - java - ruby

/*
    Crie uma variável que possui o valor 5.
    Depois crie um vetor que possui 2 itens:
        1) soma de 5 + a variável
        2) subtração de 5,99 menos a variável
    Apresente o valor dos itens do vetor no Console.
    Depois some os dois itens.
    Depois apresente um texto dizendo:
        "O resultado final é [resultado]"
*/

const valor = 5;
const vetor = [5 + valor, 5.99 - valor];
console.log(vetor.join(" | "));
const resultadoFinal = vetor[0] + vetor[1];
console.log(`O resultado final é ${resultadoFinal.toFixed(2)}`);
