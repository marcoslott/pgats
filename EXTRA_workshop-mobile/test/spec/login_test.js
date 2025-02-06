import { init, end } from "../../config.js";
import { clickEntrar, preencherEmail, preencherSenha, validaLoginError, validaLoginSucess } from "../pages/login_page.js";

describe("Login", () => {
	let driver = null;
	beforeEach(async () => {
		driver = await init(process.env.PLATFORM);
	});
	after(async () => {
		await end(driver);
	});

	it("Login com e-mail inválido", async () => {
		await preencherEmail(driver, "error@teste.com");
		await preencherSenha(driver, "123456");
		await clickEntrar(driver);
		await validaLoginError(driver);
	});

	it("Login com senha inválida", async () => {
		preencherEmail(driver, "teste@teste.com");
		preencherSenha(driver, "111111");
		clickEntrar(driver);
		validaLoginError(driver);
	});

	it("Login com e-mail e senha vazios", async () => {
		clickEntrar(driver);
		validaLoginError(driver);
	});

	it("Login com e-mail vazio", async () => {
		preencherSenha(driver, "123456");
		clickEntrar(driver);
		validaLoginError(driver);
	});

	it("Login com senha vazia", async () => {
		preencherEmail(driver, "teste@teste.com");
		clickEntrar(driver);
		validaLoginError(driver);
	});

	it("Login com sucesso", async () => {
		preencherEmail(driver, "teste@teste.com");
		preencherSenha(driver, "123456");
		clickEntrar(driver);
		validaLoginSucess(driver);
	});
});
