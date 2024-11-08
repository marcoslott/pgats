# pgats - Módulo 6 - Automação de Testes em Web

<p align="left">
<a href="https://www.cypress.io/" target="_blank" rel="noreferrer"> <img src="https://avatars.githubusercontent.com/u/8908513?s=200&v=4" alt="cypress" width="45" height="45"/></a> 
<a href="https://www.browserstack.com/" target="_blank" rel="noreferrer"> <img src="https://avatars.githubusercontent.com/u/1119453?s=200&v=4" alt="browserstack" width="45" height="45"/></a>
<a href="https://nodejs.org/en" target="_blank" rel="noreferrer"> <img src="https://avatars.githubusercontent.com/u/9950313?s=200&v=4" alt="nodejs" width="45" height="45"/></a>
<a href="https://azure.microsoft.com/pt-br/products/devops" target="_blank" rel="noreferrer"> <img src="https://github.com/user-attachments/assets/491bb04e-8cc9-44a4-a6eb-194224a3333a" alt="azuredevops" width="45" height="45"/></a>
<a href="https://github.com/features/actions" target="_blank" rel="noreferrer"> <img src="https://github.com/user-attachments/assets/c185fd3b-4411-4596-ab72-6f2c740f4bf8" alt="githubactions" width="70" height="50"/></a> 
</p>

Projeto desenvolvido na disciplina **Automação em Testes Web** da Pós-Graduação em Automação de Testes de Software, com o objetivo de automatizar testes no site https://automationexercise.com/ usando Cypress.

O Cypress é uma ferramenta popular para automação de testes E2E em aplicações web. Para expandir o alcance dos testes e verificar a compatibilidade com diversos navegadores e dispositivos, o BrowserStack foi utilizado, permitindo a execução dos testes em ambientes reais e simulados na nuvem.

#### Pré-requisitos:
- Instale o [node.js](https://nodejs.org/pt)
- Instale as dependências com ``npm install``

#### Comandos de execução:
- Rodar testes E2E: ``npx cypress open``
- Rodar testes E2E (Headless): ``npx cypress run``
- Rodar testes E2E no Browserstack: ``browserstack-cypress run``
- Relatórios de execução (Cypress Mochawesome Reporter): ``cypress\reports\html\index.html``
- [Pipeline - GitHub Actions (pgats)](https://github.com/marcoslott/pgats/actions)