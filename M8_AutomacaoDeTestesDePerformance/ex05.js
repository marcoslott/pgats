import http from "k6/http";
import { sleep } from "k6";
import { SharedArray } from "k6/data";

const dados = new SharedArray("dados", () => {
	return JSON.parse(open("./dados/ex05.json"));
});

export const options = {
	cloud: {
		name: "Exercício 05",
		projectID: 3717038,
	},
	scenarios: {
		ddt: {
			executor: "shared-iterations",
			vus: 2,
			iterations: dados.length,
		},
	},
};

export default function () {
	http.get("http://165.227.93.41/lojinha-web/v2/");

	http.post(
		"http://165.227.93.41/lojinha-web/v2/login/entrar",
		{
			usuarioLogin: dados[__VU - 1].usuarioLogin,
			usuarioSenha: dados[__VU - 1].usuarioSenha
		},
		{
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	sleep(1);
}
