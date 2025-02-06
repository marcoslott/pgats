import { expect } from "chai";
import { homapage_elements } from "./home_page.js";

const elements = {
	errorMessage: {
		android: "//android.widget.TextView[@text='Erro ao realizar login']",
		ios: "XCUIElementTypeStaticText[@name='Erro ao realizar login']",
	},
	email_field: "accessibility id:email",
	password_field: "accessibility id:password",
	btn_login: "accessibility id:login-button",
};

export async function preencherEmail(driver, email) {
	await driver.$(elements.email_field).setValue(email);
}

export async function preencherSenha(driver, senha) {
	await driver.$(elements.password_field).setValue(senha);
}

export async function clickEntrar(driver) {
	await driver.$(elements.btn_login).click();
}

export async function validaLoginError(driver) {
	const text = await driver.$(elements.errorMessage[process.env.PLATFORM]).getText();
	expect(text).to.equal("Erro ao realizar login");
}

export async function validaLoginSucess(driver) {
	const el = await driver.$(homapage_elements.search_field).isDIsplayed();
	expect(el).to.equal(true);
}
