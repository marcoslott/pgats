///<reference types="cypress"/>
require("cypress-downloadfile/lib/downloadFileCommand");
import cadastro from "../pages/cadastro";
import usuario from "../fixtures/usuario.json";
import login from "../pages/login";
import menu from "../pages/menu";
import contato from "../pages/contato";
import home from "../pages/home";
import testcases from "../pages/testcases";
import produtos from "../pages/produtos";
import carrinho from "../pages/carrinho";
import checkout from "../pages/checkout";
import pagamento from "../pages/pagamento";

describe("Automation Exercise", () => {
	let payloadUsuarioDelete;
	const timestamp = new Date().getTime();
	const path = require("path");

	before(() => {
		usuario.email = `tester-${timestamp}@email.com`;
	});

	beforeEach(() => {
		cy.visit("/");
		home.validarSeEstaNaTelaHome();
		cy.log(usuario.email);
	});

	it("Test Case 1: Register User", () => {
		//Act
		cadastro.preencherFormulario(usuario);

		//Assert
		login.validarSeUsuarioEstaLogado(usuario.name);

		menu.irPara(menu.menus.DELETE);
		cadastro.validarSeUsuarioFoiDeletadoComSucesso();
	});

	it("Test Case 2: Login User with correct email and password", () => {
		//Arrange
		cadastro.criarUsuarioViaAPI(usuario);
		menu.irPara(menu.menus.LOGIN);

		//Act
		login.realizarLogin(usuario.email, usuario.password);

		//Assert
		login.validarSeUsuarioEstaLogado(usuario.name);
		menu.irPara(menu.menus.DELETE);
		cadastro.validarSeUsuarioFoiDeletadoComSucesso();
	});

	it("Test Case 3: Login User with incorrect email and password", () => {
		//Arrange
		menu.irPara(menu.menus.LOGIN);

		//Act
		login.realizarLogin("email@incorreto.com", "senhaincorreta");

		//Assert
		login.validarMensagemParaLoginComDadosInvalidos();
	});

	it("Test Case 4: Logout User", () => {
		//Arrange
		payloadUsuarioDelete = {
			email: usuario.email,
			password: usuario.password,
		};
		cadastro.criarUsuarioViaAPI(usuario);
		menu.irPara(menu.menus.LOGIN);
		login.realizarLogin(usuario.email, usuario.password);
		login.validarSeUsuarioEstaLogado(usuario.name);

		//Act
		login.realizarLogout();

		//Assert
		login.validarLogoutComSucesso();

		cadastro.deletarUsuarioViaAPI(payloadUsuarioDelete);
	});

	it("Test Case 5: Register User with existing email", () => {
		//Arrange
		payloadUsuarioDelete = {
			email: usuario.email,
			password: usuario.password,
		};
		cadastro.criarUsuarioViaAPI(usuario);
		menu.irPara(menu.menus.LOGIN);
		login.validarSeEstaNaTelaDeLogin();

		//Act
		cadastro.iniciarCadastro(usuario);

		//Assert
		cadastro.validarMensagemParaCadastroComEmailExistente();
		cadastro.deletarUsuarioViaAPI(payloadUsuarioDelete);
	});

	it("Test Case 6: Contact Us Form", () => {
		//Arrange
		menu.irPara(menu.menus.CONTATO);
		contato.ignorarExceptionGoogleMapsAPI();

		//Act
		contato.preencherFormulario(usuario);

		//Assert
		contato.validarMensagemDeMensagemEnviadaComSucesso();
		menu.irPara(menu.menus.HOME);
		home.validarSeEstaNaTelaHome();
	});

	it("Test Case 7: Verify Test Cases Page", () => {
		//Act
		menu.irPara(menu.menus.TESTCASES);

		//Assert
		testcases.validarSeEstaNaTelaDeTestCases();
	});

	it("Test Case 8: Verify All Products and product detail page", () => {
		//Act
		menu.irPara(menu.menus.PRODUTOS);

		//Assert
		produtos.validarSeEstaNaTelaDeProdutos();
		produtos.validarAListaDeProdutosEAcessarOPrimeiroProduto();
		produtos.validarSeEstaNaTelaDeDetalhesDoProduto();
		produtos.detalhesProduto_validarProductName();
		produtos.detalhesProduto_validarCategory();
		produtos.detalhesProduto_validarPrice();
		produtos.detalhesProduto_validarAvailability();
		produtos.detalhesProduto_validarCondition();
		produtos.detalhesProduto_validarBrand();
	});

	it("Test Case 9: Search Product", () => {
		//Arrange
		menu.irPara(menu.menus.PRODUTOS);
		produtos.validarSeEstaNaTelaDeProdutos();

		//Act
		produtos.realizarPesquisaComNomeDoPrimeiroProduto();

		//Assert
		produtos.validarListaAposPesquisa();
	});

	it("Test Case 10: Verify Subscription in home page", () => {
		//Act
		home.validarSeSubscriptionEstaVisivelNoRodape();
		home.preencherSubscription(usuario.email);

		//Assert
		home.validarMensagemParaSubscriptionComSucesso();
	});

	it("Test Case 11: Verify Subscription in Cart page", () => {
		//Arrange
		menu.irPara(menu.menus.CARRINHO);
		carrinho.validarSeEstaNaTelaDoCarrinho();

		//Act
		carrinho.validarSeSubscriptionEstaVisivelNoRodape();
		carrinho.preencherSubscription(usuario.email);

		//Assert
		carrinho.validarMensagemParaSubscriptionComSucesso();
	});

	it("Test Case 12: Add Products in Cart", () => {
		//Arrange
		menu.irPara(menu.menus.PRODUTOS);
		produtos.validarSeEstaNaTelaDeProdutos();

		//Act
		produtos.adicionarProdutoDaListaAoCarrinho(0);
		produtos.continuarCompraAposAdicionarNoCarrinho();
		produtos.adicionarProdutoDaListaAoCarrinho(1);
		carrinho.irParaOCarrinho();
		carrinho.validarSeEstaNaTelaDoCarrinho();

		//Assert
		carrinho.validarQuantidadeDeItensDistintosNoCarrinho(2);
		carrinho.validarItensDoCarrinho();
	});

	it("Test Case 13: Verify Product quantity in Cart", () => {
		//Arrange
		const qtd = 4;
		menu.irPara(menu.menus.PRODUTOS);
		produtos.validarSeEstaNaTelaDeProdutos();
		produtos.validarAListaDeProdutosEAcessarOPrimeiroProduto();
		produtos.validarSeEstaNaTelaDeDetalhesDoProduto();

		//Act
		produtos.detalhesProduto_alterarQtd(qtd);
		produtos.detalhesProduto_adicionarAoCarrinho();
		carrinho.irParaOCarrinho();
		carrinho.validarSeEstaNaTelaDoCarrinho();

		//Assert
		carrinho.validarQuantidadeDeItensDistintosNoCarrinho(1);
		carrinho.validarQuantidadeDoItemNoCarrinho("1", qtd);
	});

	it("Test Case 14: Place Order: Register while Checkout", () => {
		//Arrange
		menu.irPara(menu.menus.PRODUTOS);
		produtos.validarSeEstaNaTelaDeProdutos();

		//Act
		produtos.adicionarProdutoDaListaAoCarrinho(0);
		carrinho.irParaOCarrinho();
		carrinho.validarSeEstaNaTelaDoCarrinho();
		carrinho.validarQuantidadeDeItensDistintosNoCarrinho(1);
		checkout.irParaOCheckout();
		carrinho.irParaOLoginOuRegistro();
		login.validarSeEstaNaTelaDeLogin();
		cadastro.preencherFormulario(usuario);
		login.validarSeUsuarioEstaLogado(usuario.name);
		menu.irPara(menu.menus.CARRINHO);
		checkout.irParaOCheckout();
		checkout.validarEnderecoEaOrdem("#address_delivery", usuario);
		checkout.validarEnderecoEaOrdem("#address_invoice", usuario);
		checkout.validarOsCabecalhos();
		checkout.preencherCampoDescricao();
		pagamento.irParaOPagamento();
		pagamento.preencherDadosERealizarPagamento();

		//Assert
		pagamento.validarPagementoConcluidoComSucesso();

		menu.irPara(menu.menus.DELETE);
		cadastro.validarSeUsuarioFoiDeletadoComSucesso();
	});

	it("Test Case 15: Place Order: Register before Checkout", () => {
		//Arrange
		cadastro.preencherFormulario(usuario);
		login.validarSeUsuarioEstaLogado(usuario.name);

		//Act
		produtos.adicionarProdutoDaListaAoCarrinho(0);
		carrinho.irParaOCarrinho();
		carrinho.validarSeEstaNaTelaDoCarrinho();
		carrinho.validarQuantidadeDeItensDistintosNoCarrinho(1);
		checkout.irParaOCheckout();
		checkout.validarEnderecoEaOrdem("#address_delivery", usuario);
		checkout.validarEnderecoEaOrdem("#address_invoice", usuario);
		checkout.validarOsCabecalhos();
		checkout.preencherCampoDescricao();
		pagamento.irParaOPagamento();
		pagamento.preencherDadosERealizarPagamento();

		//Assert
		pagamento.validarPagementoConcluidoComSucesso();

		menu.irPara(menu.menus.DELETE);
		cadastro.validarSeUsuarioFoiDeletadoComSucesso();
	});

	it("Test Case 16: Place Order: Login before Checkout", () => {
		//Arrange
		cadastro.criarUsuarioViaAPI(usuario);
		menu.irPara(menu.menus.LOGIN);

		//Act
		login.realizarLogin(usuario.email, usuario.password);
		login.validarSeUsuarioEstaLogado(usuario.name);
		produtos.adicionarProdutoDaListaAoCarrinho(0);
		carrinho.irParaOCarrinho();
		carrinho.validarSeEstaNaTelaDoCarrinho();
		carrinho.validarQuantidadeDeItensDistintosNoCarrinho(1);
		checkout.irParaOCheckout();
		checkout.validarEnderecoEaOrdem("#address_delivery", usuario);
		checkout.validarEnderecoEaOrdem("#address_invoice", usuario);
		checkout.validarOsCabecalhos();
		checkout.preencherCampoDescricao();
		pagamento.irParaOPagamento();
		pagamento.preencherDadosERealizarPagamento();

		//Assert
		pagamento.validarPagementoConcluidoComSucesso();

		menu.irPara(menu.menus.DELETE);
		cadastro.validarSeUsuarioFoiDeletadoComSucesso();
	});

	it("Test Case 17: Remove Products From Cart", () => {
		//Arrange
		produtos.adicionarProdutoDaListaAoCarrinho(0);
		produtos.continuarCompraAposAdicionarNoCarrinho();
		produtos.adicionarProdutoDaListaAoCarrinho(1);
		carrinho.irParaOCarrinho();
		carrinho.validarSeEstaNaTelaDoCarrinho();
		carrinho.validarItensDoCarrinho();
		carrinho.validarQuantidadeDeItensDistintosNoCarrinho(2);

		//Act
		carrinho.removerItemDoCarrinho(0);
		carrinho.validarQuantidadeDeItensDistintosNoCarrinho(1);
		carrinho.removerItemDoCarrinho(0);

		//Assert
		carrinho.validarQuantidadeDeItensDistintosNoCarrinho(0);
	});

	it("Test Case 18: View Category Products", () => {
		//Act
		menu.irParaCategoria("#Women");
		menu.irParaSubCategoria("#Women", "Dress");
		menu.irParaCategoria("#Men");

		//Assert
		menu.irParaSubCategoria("#Men", "Tshirts");
	});

	it("Test Case 19: View & Cart Brand Products", () => {
		//Arrange
		menu.irPara(menu.menus.PRODUTOS);
		produtos.validarSeEstaNaTelaDeProdutos();

		//Act
		menu.irParaBrand("Polo");
		produtos.validarFiltroPorBrand("Polo");
		menu.irParaBrand("Madame");

		//Assert
		produtos.validarFiltroPorBrand("Madame");
	});

	it("Test Case 20: Search Products and Verify Cart After Login", () => {
		//Arrange
		cadastro.criarUsuarioViaAPI(usuario);
		menu.irPara(menu.menus.PRODUTOS);
		produtos.validarSeEstaNaTelaDeProdutos();
		produtos.realizarPesquisaComNomeDoPrimeiroProduto();
		produtos.validarListaAposPesquisa();

		//Act
		produtos.adicionarProdutoDaListaAoCarrinho(0);
		carrinho.irParaOCarrinho();
		carrinho.validarSeEstaNaTelaDoCarrinho();
		carrinho.validarQuantidadeDeItensDistintosNoCarrinho(1);
		menu.irPara(menu.menus.LOGIN);
		login.realizarLogin(usuario.email, usuario.password);
		menu.irPara(menu.menus.CARRINHO);

		//Assert
		carrinho.validarQuantidadeDeItensDistintosNoCarrinho(1);

		cadastro.deletarUsuarioViaAPI(usuario);
	});

	it("Test Case 21: Add review on product", () => {
		//Arrange
		menu.irPara(menu.menus.PRODUTOS);
		produtos.validarSeEstaNaTelaDeProdutos();
		produtos.validarAListaDeProdutosEAcessarOPrimeiroProduto();
		produtos.validarSeEstaNaTelaDeDetalhesDoProduto();

		//Act
		produtos.preencherReview(usuario);

		//Assert
		produtos.validarReviewEnviadoComSucesso();
	});

	it("Test Case 22: Add to cart from Recommended items", () => {
		//Arrange
		home.validarSeItensRecomendadosEstaVisivel();

		//Act
		home.adicionarItemRecomendadoAoCarrinho();
		carrinho.irParaOCarrinho();

		//Assert
		carrinho.validarSeEstaNaTelaDoCarrinho();
		carrinho.validarQuantidadeDeItensDistintosNoCarrinho(1);
		carrinho.validarItemRecomendadoNoCarrinho();
	});

	it("Test Case 23: Verify address details in checkout page", () => {
		//Arrange
		menu.irPara(menu.menus.LOGIN);
		cadastro.preencherFormulario(usuario);
		login.validarSeUsuarioEstaLogado(usuario.name);
		produtos.adicionarProdutoDaListaAoCarrinho(0);
		carrinho.irParaOCarrinho();
		carrinho.validarSeEstaNaTelaDoCarrinho();

		//Act
		checkout.irParaOCheckout();

		//Assert
		checkout.validarEnderecoEaOrdem("#address_delivery", usuario);
		checkout.validarEnderecoEaOrdem("#address_invoice", usuario);
		checkout.validarOsCabecalhos();

		menu.irPara(menu.menus.DELETE);
		cadastro.validarSeUsuarioFoiDeletadoComSucesso();
	});

	it("Test Case 24: Download Invoice after purchase order", () => {
		//Arrange
		const fileName = "invoice.txt";
		const downloadsFolder = Cypress.config("downloadsFolder");
		const filePath = path.join(downloadsFolder, fileName);
		cy.task("deleteFileIfExists", filePath);

		produtos.adicionarProdutoDaListaAoCarrinho(0);
		carrinho.irParaOCarrinho();
		carrinho.validarSeEstaNaTelaDoCarrinho();
		carrinho.validarQuantidadeDeItensDistintosNoCarrinho(1);
		checkout.irParaOCheckout();
		carrinho.irParaOLoginOuRegistro();
		login.validarSeEstaNaTelaDeLogin();
		cadastro.preencherFormulario(usuario);
		login.validarSeUsuarioEstaLogado(usuario.name);
		menu.irPara(menu.menus.CARRINHO);
		checkout.irParaOCheckout();
		checkout.validarEnderecoEaOrdem("#address_delivery", usuario);
		checkout.validarEnderecoEaOrdem("#address_invoice", usuario);
		checkout.validarOsCabecalhos();
		checkout.preencherCampoDescricao();
		pagamento.irParaOPagamento();
		pagamento.preencherDadosERealizarPagamento();
		pagamento.validarPagementoConcluidoComSucesso();

		//Act
		pagamento.invoiceDownload();

		//Assert
		pagamento.validarDownloadInvoiceComSucesso(downloadsFolder, fileName);

		menu.irPara(menu.menus.DELETE);
		cadastro.validarSeUsuarioFoiDeletadoComSucesso();
	});

	it("Test Case 25: Verify Scroll Up using 'Arrow' button and Scroll Down functionality", () => {
		//Arrange
		home.validarSeSubscriptionEstaVisivelNoRodape();

		//Act
		home.scrollUpButton();

		//Assert
		home.validarSeEstaNoTopoDaHome();
	});

	it("Test Case 26: Verify Scroll Up without 'Arrow' button and Scroll Down functionality", () => {
		//Arrange
		home.validarSeSubscriptionEstaVisivelNoRodape();

		//Act
		home.scrollTop();

		//Assert
		home.validarSeEstaNoTopoDaHome();
	});
});
