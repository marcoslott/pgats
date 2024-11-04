import { expect } from "@wdio/globals";

describe("Lojinha app", () => {
	it("Realizar login na lojinha", async () => {
		//Arrange (Preparação)
		const usuario = "admin2";
		const senha = "admin";
		const txtUsuario = $('android=new UiSelector().resourceId("usuario")');
		const txtSenha = $('android=new UiSelector().resourceId("senha")');
		const btnEntrar = $('android=new UiSelector().text("ENTRAR")');
		const lblListaDeProduto = $('android=new UiSelector().text("Lista de Produtos")');

		//Act (Ação)
		//Espera explícita
		//appawait driver.pause(5000) //5 segundos

		//Espera implícita
		await txtUsuario.waitForDisplayed();
		await txtSenha.waitForDisplayed();
		await txtUsuario.setValue(usuario);
		await txtSenha.setValue(senha);
		await btnEntrar.click();
		const listaDeProduto = await lblListaDeProduto.getText();

		//Assert (Asserção)
		expect(listaDeProduto).toEqual("Lista de Produtos");
		await driver.saveScreenshot('./teste.png')
	});
});
