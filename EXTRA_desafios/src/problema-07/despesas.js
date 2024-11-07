/*PROBLEMA #7
Funcionários tem nome, salário e percentual de bônus combinados na contratação.
Quando o faturamento é maior que 100 mil reais, eles recebem bônus com base no percentual combinado em relação ao seu salário.
Escreva uma função que receba uma lista de funcionários e o faturamento da empresa e retorne o valor total de despesa com 
salários que a empresa terá naquele mês.*/

const calcularDespesasSalario = (listaDeFuncionarios, faturamentoEmpresa) => {
	if (faturamentoEmpresa > 100000) {
		return listaDeFuncionarios.reduce((soma, item) => soma + item.salario + item.salario * (item.bonus / 100), 0);
	} else {
		return listaDeFuncionarios.reduce((soma, item) => soma + item.salario, 0);
	}
	//return faturamentoEmpresa >100000 ? listaDeFuncionarios.reduce((soma, item) => soma + item.salario + (item.salario*(item.bonus/100)),  0) : custoComSalarios = listaDeFuncionarios.reduce((soma, item) => soma + item.salario, 0)
};

module.exports = { calcularDespesasSalario };
