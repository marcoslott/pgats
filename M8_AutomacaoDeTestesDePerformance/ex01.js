import http from "k6/http";
import { sleep } from "k6";
import { numeroAleatorioMenorQue } from "./utils/numeros.js";

export const options = {
	//vus: 20,
	//duration: "10s",
	thresholds: {
		http_req_waiting: ["p(90) >= 10", "p(90) <= 60", "avg < 60"],
	},
	cloud: {
		name: "Exercício 01",
		projectID: 3717038,
	},
	stages: [
		{ target: 20, duration: "5s" },
		{ target: 20, duration: "20s" },
		{ target: 0, duration: "5s" }
	],
	/*
  iterations: 1,
  iterations -> entra, executa uma ação e sai. ex: sistema de marcação de ponto.
  duration -> entra, fica fazendo um monte de coisas por um tempo específico.
   */
};

export default function () {
	http.get("https://test.k6.io");
	sleep(numeroAleatorioMenorQue(5));
}
