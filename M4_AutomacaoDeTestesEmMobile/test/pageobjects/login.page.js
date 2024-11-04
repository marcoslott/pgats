import { $ } from "@wdio/globals";
import ListadeProdutosPage from "./listadeProdutos.page.js";

export default class LoginPage {
	get txtUsuario() {
		return $('android=new UiSelector().resourceId("usuario")');
	}
	get txtSenha() {
		return $('android=new UiSelector().resourceId("senha")');
	}
	get btnEntrar() {
		return $('android=new UiSelector().text("ENTRAR")');
	}

	async cliqueBtnEntrar() {
		await this.btnEntrar.click();
	}
	async preencherTxtUsuario(usuario) {
		await this.txtUsuario.setValue(usuario);
	}
	async preencherTxtSenha(senha) {
		await this.txtSenha.setValue(senha);
	}

	async logarNaLojinha(usuario, senha) {
		await Promise.all([
			this.txtUsuario.setValue(usuario), 
			this.txtSenha.setValue(senha)
		]);
		await this.btnEntrar.click();
	}

	async logarNaLojinhaFluentPage(usuario, senha) {
		await Promise.all([
			this.txtUsuario.setValue(usuario), 
			this.txtSenha.setValue(senha)
		]);
		await this.btnEntrar.click();
		return new ListadeProdutosPage();
	}
}
