/*PROBLEMA #7
Funcionários tem nome, salário e percentual de bônus combinados na contratação.
Quando o faturamento é maior que 100 mil reais, eles recebem bônus com base no percentual combinado em relação ao seu salário.
Escreva uma função que receba uma lista de funcionários e o faturamento da empresa e retorne o valor total de despesa com 
salários que a empresa terá naquele mês.*/

const { calcularDespesasSalario } = require("../../src/problema-07/despesas");
const assert = require("node:assert");

describe("Despesas", () => {
	describe("#calcularDespesasSalario", () => {
		it("Calcula despesas com salário de mais de uma pessoa com bônus e faturamento maior que 100mil", () => {
			//Arrange
			const listaDeFuncionarios = [
				{ nome: "João", salario: 1000.0, bonus: 10 },
				{ nome: "Maria", salario: 500.0, bonus: 20 },
			];

			const faturamentoEmpresa = 100000.01;

			//Act
			const totalAPagar = calcularDespesasSalario(listaDeFuncionarios, faturamentoEmpresa);

			//Assert
			assert.strictEqual(totalAPagar, 1700);
		});

		it("Calcula despesas com salário de apenas uma pessoa com bônus e faturamento maior que 100mil", () => {
			//Arrange
			const listaDeFuncionarios = [{ nome: "João", salario: 1000.0, bonus: 10 }];

			const faturamentoEmpresa = 100000.01;

			//Act
			const totalAPagar = calcularDespesasSalario(listaDeFuncionarios, faturamentoEmpresa);

			//Assert
			assert.strictEqual(totalAPagar, 1100);
		});

		it("Calcula despesas com salário de nenhuma pessoa e faturamento maior que 100mil", () => {
			//Arrange
			const listaDeFuncionarios = [];

			const faturamentoEmpresa = 100000.01;

			//Act
			const totalAPagar = calcularDespesasSalario(listaDeFuncionarios, faturamentoEmpresa);

			//Assert
			assert.strictEqual(totalAPagar, 0);
		});

		it("Calcula despesas com salário de mais de uma pessoa, sem bônus e faturamento menor que 100mil", () => {
			//Arrange
			const listaDeFuncionarios = [
				{ nome: "João", salario: 1000.0, bonus: 10 },
				{ nome: "Maria", salario: 500.0, bonus: 20 },
			];

			const faturamentoEmpresa = 99999.99;

			//Act
			const totalAPagar = calcularDespesasSalario(listaDeFuncionarios, faturamentoEmpresa);

			//Assert
			assert.strictEqual(totalAPagar, 1500);
		});

		it("Calcula despesas com salário de apenas uma pessoa, sem bônus e faturamento menor que 100mil", () => {
			//Arrange
			const listaDeFuncionarios = [{ nome: "João", salario: 1000.0, bonus: 10 }];

			const faturamentoEmpresa = 99999.99;

			//Act
			const totalAPagar = calcularDespesasSalario(listaDeFuncionarios, faturamentoEmpresa);

			//Assert
			assert.strictEqual(totalAPagar, 1000);
		});

		it("Calcula despesas com salário de nenhuma pessoa e faturamento menor que 100mil", () => {
			//Arrange
			const listaDeFuncionarios = [];

			const faturamentoEmpresa = 99999.99;

			//Act
			const totalAPagar = calcularDespesasSalario(listaDeFuncionarios, faturamentoEmpresa);

			//Assert
			assert.strictEqual(totalAPagar, 0);
		});

		it("Calcula despesas com salário de mais de uma pessoa, sem bônus e faturamento igual a 100mil", () => {
			//Arrange
			const listaDeFuncionarios = [
				{ nome: "João", salario: 1000.0, bonus: 10 },
				{ nome: "Maria", salario: 500.0, bonus: 20 },
			];

			const faturamentoEmpresa = 100000.00;

			//Act
			const totalAPagar = calcularDespesasSalario(listaDeFuncionarios, faturamentoEmpresa);

			//Assert
			assert.strictEqual(totalAPagar, 1500);
		});

    it("Calcula despesas com salário de apenas uma pessoa com bônus de 0% e faturamento maior que 100mil", () => {
			//Arrange
			const listaDeFuncionarios = [
				{ nome: "João", salario: 1000.0, bonus: 0 },
			];

			const faturamentoEmpresa = 100000.01;

			//Act
			const totalAPagar = calcularDespesasSalario(listaDeFuncionarios, faturamentoEmpresa);

			//Assert
			assert.strictEqual(totalAPagar, 1000);
		});
	});
});
