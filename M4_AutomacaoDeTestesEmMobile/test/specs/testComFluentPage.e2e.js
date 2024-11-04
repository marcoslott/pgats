import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";

describe("Lojinha app", () => {
	it("Realizar login na lojinha", async () => {
		//Arrange (Preparação)
		const usuario = "admin2";
		const senha = "admin";
		const loginPage = new LoginPage();

		//Act (Ação)
		const mensagem = await (await loginPage.logarNaLojinhaFluentPage(usuario, senha)).validaOLoginNaLojinha('Lista de Produtos');
		await driver.saveScreenshot("./teste.png");
	});
});
