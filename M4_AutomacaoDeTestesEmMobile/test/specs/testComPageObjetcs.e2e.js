import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import ListadeProdutosPage from "../pageobjects/listadeProdutos.page.js";

describe("Lojinha app", () => {
	it("Realizar login na lojinha", async () => {
		//Arrange (Preparação)
		const usuario = "admin2";
		const senha = "admin";
		const loginPage = new LoginPage();
		const listaDeProdutosPage = new ListadeProdutosPage();

		//Act (Ação)
		await loginPage.logarNaLojinha(usuario, senha);

		//Assert (Asserção)
		expect(await listaDeProdutosPage.obterTextoLblListaDeProduto()).toEqual('Lista de Produtos');
		await driver.saveScreenshot("./teste.png");
	});
});
