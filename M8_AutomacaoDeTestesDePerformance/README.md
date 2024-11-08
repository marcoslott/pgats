# pgats - Módulo 8 - Automação de Testes de Performance

<p align="left">
<a href="https://k6.io/" target="_blank" rel="noreferrer"> <img src="https://github.com/user-attachments/assets/77617d86-d838-4afa-9d6d-12837251bfff" alt="k6" width="40" height="40"/></a>
</p>

Na disciplina **Automação de Testes de Performance** da Pós-Graduação em Automação de Testes de Software, foram exercitados diversos conceitos e técnicas para garantir que os sistemas atendam aos requisitos de desempenho. Para estas atividades, foi utilizada a ferramenta k6.

O k6 é uma ferramenta de código aberto que facilita a criação e execução de testes de carga de forma programática, permitindo medir a escalabilidade e o comportamento de APIs e serviços sob condições de alto tráfego. Os testes podem ser executados tanto localmente quanto na nuvem, o que expande sua flexibilidade para diferentes ambientes de desenvolvimento e produção.

#### Pré-requisitos:
- Instale o [k6](https://grafana.com/docs/k6/latest/set-up/install-k6/)

#### Comandos de execução:
- Criar um novo teste: ``k6 new nomeDoTeste.js``
- Rodar os testes localmente ``k6 run nomeDoTeste.js``
- Rodar os testes na nuvem (k6cloud) ``k6 cloud run nomeDoTeste.js``