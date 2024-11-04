import http from "k6/http";
import { check, sleep, group } from "k6";
import {faker} from 'https://esm.sh/@faker-js/faker'
export default function () {
	let token;
	group("Obtendo o token do usuário", () => {
		const endpointRequestLogin = "http://165.227.93.41/lojinha/v2/login";
		const bodyRequestLogin = JSON.stringify({
			usuarioLogin: "cgts",
			usuarioSenha: "123456",
		});
		const optionsRequestLogin = {
			headers: {
				"Content-Type": "application/json",
			},
		};

		const responseLogin = http.post(endpointRequestLogin, bodyRequestLogin, optionsRequestLogin);
		check(responseLogin, {
			"Status code é igual a 200": (r) => r.status === 200,
			"A mensagem de sucesso ao realizar o login foi apresentada": (r) => r.json("message") === "Sucesso ao realizar o login",
		});

		token = responseLogin.json("data.token");
	});

	group("Cadastrar um novo produto", () => {
		const bodyRequestCadastroProduto = JSON.stringify({
			produtoNome: faker.food.fruit(),
			produtoValor: 100,
			produtoCores: ["Azul", "Vermelho"],
		});
		const optionsCadastroProduto = {
			headers: {
				"Content-Type": "application/json",
				token: token,
			},
		};
		const responseCadastroProduto = http.post("http://165.227.93.41/lojinha/v2/produtos", bodyRequestCadastroProduto, optionsCadastroProduto);
		check(responseCadastroProduto, {
			"Status code é igual a 201": (r) => r.status === 201,
			"A mensagem de sucesso ao cadastrar o produto foi apresentada": (r) => r.json("message") === "Produto adicionado com sucesso",
			"A segunda cor do produto foi cadastrada com sucesso": (r) => r.json("data.produtoCores.1") === "Vermelho",
		});
	});

	group("User think time após o cadastro", () => {
		sleep(1);
	});
}
