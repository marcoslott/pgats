import http from "k6/http";
import { sleep } from "k6";
import { browser } from "k6/browser";

export const options = {
	scenarios: {
		navegador: {
			executor: "per-vu-iterations",
			vus: 1,
			iterations: 1,
			options: {
				browser: {
					type: "chromium",
				},
			},
		},
	},
};

export default async function () {
	const navegador = await browser.newPage();
	await navegador.goto("http://165.227.93.41/lojinha-web/v2/");
	await navegador.fill("#usuario", "cgts");
	await navegador.fill("#senha", "123456");
	await navegador.click("#btn-entrar");
	sleep(10);
}
