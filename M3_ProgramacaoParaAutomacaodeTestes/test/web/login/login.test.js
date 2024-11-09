const WebDriver = require("selenium-webdriver");
const assert = require("node:assert");

describe("Login", () => {
	it.only("Validar que é possível logar usando credenciais válidas", async () => {
		//Abrir o navegador
		const navegador = new WebDriver.Builder().forBrowser(WebDriver.Browser.CHROME).build();

		//Setar a espera implícita
		await navegador.manage().setTimeouts({ script: 6000 });

		//Navegar para http://165.227.93.41/lojinha-web/v2/
		//quando for retorno promise, usar o await (e no it indicar o async no método). é o caso do navegador.get
		await navegador.get("http://165.227.93.41/lojinha-web/v2/");

		//Preencher o campo usuário
		await navegador.findElement(WebDriver.By.id("usuario")).sendKeys("admin");

		//Preencher o campo senha
		await navegador.findElement(WebDriver.By.id("senha")).sendKeys("admin");

		//Clicar em Entrar
		await navegador.findElement(WebDriver.By.css(".btn")).click();

		//Verificar se a URL é http://165.227.93.41/lojinha-web/v2/produto
		const urlEsperada = "http://165.227.93.41/lojinha-web/v2/produto";
		const urlAtual = await navegador.getCurrentUrl();
		assert.equal(urlAtual, urlEsperada);

		//Fechar navegador
		await navegador.quit();
	});
});
