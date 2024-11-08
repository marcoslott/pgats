# pgats - Módulo 5 - Automação de Testes em API Rest

<p align="left">
<a href="https://github.com/ladjs/supertest" target="_blank" rel="noreferrer"> <img src="https://github.com/user-attachments/assets/7020276c-9e4a-43f1-a3d2-18a93aa53f9b" alt="supertest" width="40" height="40"/></a>
<a href="https://jestjs.io/pt-BR/" target="_blank" rel="noreferrer"> <img src="https://avatars.githubusercontent.com/u/103283236?s=200&v=4" alt="jest" width="40" height="40"/></a>
<a href="https://nodejs.org/en" target="_blank" rel="noreferrer"> <img src="https://avatars.githubusercontent.com/u/9950313?s=200&v=4" alt="nodejs" width="40" height="40"/></a>
</p>

Projeto desenvolvido na disciplina **Automação de testes em API Rest** da Pós-Graduação em Automação de Testes de Software, com o objetivo de automatizar testes de um CRUD de "users" e de "conteudos".

Para a automação dos testes, foram utilizadas as bibliotecas Jest e SuperTest. O Jest foi escolhido como framework de testes pela sua simplicidade e capacidade de gerar relatórios, enquanto o SuperTest foi utilizado para realizar as requisições e verificar respostas da API.

#### Pré-requisitos:
- Instale o [node.js](https://nodejs.org/pt)
- No diretório ``/aula1/crud_clientes_node-main`` instale as dependências da API com ``npm install``
- No diretório ``/primeiro-test`` instale as dependências do projeto de testes com ``npm install``

#### Comandos de execução:
- Subir a aplicação da API: No diretório ``/aula1/crud_clientes_node-main/backend``, execute o comando ``node app.js``
- Rodar os testes da API: No diretório ``/primeiro-test``, execute o comando ``npm run test``
- Relatórios de execução (jest-stare): ``/primeiro-test/jest-stare/index.html``
- Swagger: http://localhost:3000/api-docs/