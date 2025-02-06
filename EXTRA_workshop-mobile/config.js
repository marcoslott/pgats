import { remote } from "webdriverio";

const androidCapabilities = {
	platformName: "Android",
	"appium:automationName": "UiAutomator2",
	"appium:deviceName": "emulator-5554", // Certifique-se de que o deviceName está correto
	"appium:app": "C:/projects/pgats/EXTRA_workshop-mobile/apps/ANDROID - COMPLETO - app-release.apk",
	"appium:appPackage": "com.qazandoqafood",
	"appium:appActivity": ".MainActivity",
};
const iOSCapabilities = {
	platformName: "iOS",
	"appium:automationName": "XCUITest",
	"appium:deviceName": "iphone 11", // Certifique-se de que o deviceName está correto
	"appium:platformVersion": "15.2",
	"appium:app": "C:/projects/pgats/EXTRA_workshop-mobile/apps/apps/qazandoqafood.app",
	"appium:noReset": false,
};

//Configurar o WebDriverIO/Appium
const optionsAppiumServer = {
	hostname: "127.0.0.1",
	port: 4723,
	capabilities: androidCapabilities,
};

export async function init(platform) {
	return await remote({
		hostname: "127.0.0.1",
		port: 4723,
		capabilities: platform == "android" ? androidCapabilities : iOSCapabilities
	}).catch((err) => console.log("Erro ao iniciar o Appium: ", err));
}

export async function end(driver) {
	await driver.deleteSession();
}
