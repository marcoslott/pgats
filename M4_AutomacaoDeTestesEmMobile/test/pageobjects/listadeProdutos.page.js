import { $ } from "@wdio/globals";

export default class ListadeProdutosPage {
	get lblListaDeProduto() {return $('android=new UiSelector().text("Lista de Produtos")')}

	async obterTextoLblListaDeProduto(){
		return await this.lblListaDeProduto.getText();
	}

	async validaOLoginNaLojinha(mensagem){
		expect(await this.obterTextoLblListaDeProduto()).toEqual(mensagem);
	}
}