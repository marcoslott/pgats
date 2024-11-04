import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
	vus: 1,
	iterations: 1,
};

export default function () {
	const respostaHomePageLojinha = http.get("http://165.227.93.41/lojinha-web/v2");
	check(respostaHomePageLojinha, {
		"Checar se o Status Code é igual a 200": (r) => r.status === 200,
		"Checar que o título da página é Lojinha": (r) => r.html().find("title").text() === "Lojinha",
	});

	const respostaLogin = http.post(
		"http://165.227.93.41/lojinha-web/v2/login/entrar",
		{
			usuario: "admin",
			senha: "admin",
		},
		{
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		}
	);

	const cookieJar = http.cookieJar();
	const cookiesAposLogin = cookieJar.cookiesForURL(respostaLogin.url);

	http.get("http://165.227.93.41/lojinha-web/v2/produto", {
		//cookies: cookiesAposLogin
	});

	http.get("http://165.227.93.41/lojinha-web/v2/produto/novo", {
		//cookies: cookiesAposLogin
	});

	const respostaCadastroProduto = http.post(
		"http://165.227.93.41/lojinha-web/v2/produto/salvarproduto",
		{
			produtonome: "Produto - Marcos",
			produtovalor: "1,11",
			produtocores: "Azul,Preto,Branco",
		},
		{
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
		}
	);
	check(respostaCadastroProduto, {
		"Validando que o produto foi salvo": (r) => r.headers["Refresh"].includes("Produto adicionado com sucesso"),
	});

	const respostaAbrirEdicaoProduto = http.get(encodeURI(respostaCadastroProduto.headers["Refresh"].replace("0;url=", "")));
	check(respostaAbrirEdicaoProduto, {
		"Validando que entrei na página de edição do produto": (r) => r.html().find("#produtonome").attr("value") === "Produto - Marcos",
	});

	sleep(1);
}
/*
  console.log(Object.keys(respostaHomePageLojinha))
	console.log(respostaHomePageLojinha.html().find("h4").text());
	console.log(respostaHomePageLojinha.html().find("title").text());
	console.log(respostaHomePageLojinha.html().find("#btn-entrar").attr("name"));
	console.log(respostaHomePageLojinha.status);
  */
