/*
Utilizei o arquivo /suporte/configEnv.js que utiliza a rota que vem do .env:
	URLS: {
		ROTA_ENDPOINT: process.env.URL_ROTA
	}

Dentro do .env: 
	URL_ROTA = "http://localhost:3000"

Conforme havíamos feito em aula.
*/

const request = require("supertest");
const { faker } = require("@faker-js/faker");
const { URLS, HEADERS } = require("../../suporte/configEnv");

describe("Suite de testes CRUD (post, get, put, delete) dos CONTEUDOS", () => {
	let idConteudo;
	let payloadConteudos;

	beforeAll(async () => {
		payloadConteudos = {
			titulo: faker.internet.displayName(),
			descricao: faker.lorem.sentences(),
			tipoConteudo: faker.lorem.word(),
			conteudo: faker.lorem.word(),
		};

		//Test01: Cadastrar um conteúdo e consultar o retorno dos campos. E o statusCode retornado 201.
		//Você deverá cadastrar um novo conteúdo e verificar que o conteúdo está devidamente retornando os dados esperados e o statusCode de sucesso esperado.
		const response = await request(URLS.ROTA_ENDPOINT).post("/conteudos").set(HEADERS.CONTENT_TYPE).send(payloadConteudos);
		idConteudo = response.body.id;
		expect(response.status).toBe(201);
		const { id, titulo, descricao, tipoConteudo, conteudo } = response.body;
		expect(id).toBeDefined();
		expect(titulo).toBe(payloadConteudos.titulo);
		expect(descricao).toBe(payloadConteudos.descricao);
		expect(tipoConteudo).toBe(payloadConteudos.tipoConteudo);
		expect(conteudo).toBe(payloadConteudos.conteudo);
		expect(response.body.dataCadastro).toBeDefined();
		console.log("Conteúdo cadastrado: ", response.body);		
	})

	it("Test02: Consultar o registro de conteúdo cadastrado anteriormente. E o statusCode retornado 200.", async () => {
		//Você deverá realizar a consulta desse conteúdo em que acabou de cadastrar, e verificar se realmente está sendo retornado o conteúdo desejado com os dados desejados.
		const response = await request(URLS.ROTA_ENDPOINT).get(`/conteudos/${idConteudo}`);
		expect(response.status).toBe(200);
		const { id, titulo, descricao, tipoConteudo, conteudo, dataCadastro } = response.body;
		expect(id).toBe(idConteudo);
		expect(titulo).toBe(payloadConteudos.titulo);
		expect(descricao).toBe(payloadConteudos.descricao);
		expect(tipoConteudo).toBe(payloadConteudos.tipoConteudo);
		expect(conteudo).toBe(payloadConteudos.conteudo);
		expect(dataCadastro).toBeDefined();
	});

	it("Test03: Alterar o registro de conteúdo consultado anteriormente. Validar a alteração dos dados e o statusCode retornado 201.", async () => {
		//Você deverá alterar o conteúdo consultado anteriormente, e em seguida validar se realmente os dados foram alterados.
		const payloadConteudosAlterado = {
			titulo: faker.internet.displayName(),
			descricao: faker.lorem.sentences(),
			tipoConteudo: faker.lorem.word(),
			conteudo: faker.lorem.word(),
		};
		const response = await request(URLS.ROTA_ENDPOINT).put(`/conteudos/${idConteudo}`).send(payloadConteudosAlterado);
		const { id, titulo, descricao, tipoConteudo, conteudo, dataCadastro } = response.body;
		expect(response.status).toBe(201);
		expect(id).toBe(idConteudo);
		expect(titulo).toBe(payloadConteudosAlterado.titulo);
		expect(descricao).toBe(payloadConteudosAlterado.descricao);
		expect(tipoConteudo).toBe(payloadConteudosAlterado.tipoConteudo);
		expect(conteudo).toBe(payloadConteudosAlterado.conteudo);
		console.log("Conteúdo alterado: ", response.body);
	});

	it("Test04: Remover o registro de conteúdo alterado anteriormente. Validar se a remoção foi efetivada e o statusCode retornado 200.", async () => {
		//Por fim, você deverá remover o conteúdo e garantir que o mesmo foi removido e não existe mais para consulta.
		const response = await request(URLS.ROTA_ENDPOINT).delete(`/conteudos/${idConteudo}`);
		expect(response.status).toBe(200);
		console.log("Resposta do delete: ", response.body);

		const responseGet = await request(URLS.ROTA_ENDPOINT).get(`/conteudos/${idConteudo}`);
		expect(responseGet.status).toBe(404);
		console.log(responseGet.body);
	});
});
