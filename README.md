# API - O Silmarillion com seus "3 Grandes Contos"

# Descrição

## Essa API visa extrair informações principais dos Livros da Primeira Era da Terra-Média para amantes de Tolkien e código possam ter fácil acesso aos seus inúmeros dados.

# Tecnologias 

<div style="display: flex; gap: 30px;">
    <img alt="NodeJs" src="./assets/node-js.png" style="width:50px;">
    <img alt="Express" src="./assets/express.png" style="width:50px;">
    <img alt="Typescript" src="./assets/typescript.png" style="width:50px;">
    <img alt="Postgresql" src="./assets/postgre.png" style="width:50px;">
    <img alt="Docker" src="./assets/docker.png" style="width:50px;">
    <img alt="Vitest" src="./assets/vitest.png" style="width:50px;">
    <img alt="Swagger" src="./assets/swagger.svg" style="width:50px;">
</div>

## Para clonar o repositório siga o passo a passo


```bash

$ git clone https://github.com/lucasnather/api-silmarillion.git

$ cd api-silmarillion

$ npm install

```

## Antes de rodar a aplicação verifica o arquivo .env.example, crie o arquivo .env e coloque seus dados.

## Rodando a aplicação

```bash


# subindo o banco de dados postgres
# o "-d" é para o container subir em modo detach
$ docker-compose up -d

# ver se o container está em execução
$ docker ps

# rodar o banco de dados prisma
$ npx prisma migrate dev

# desenvolvimento
$ npm run dev

# modo watch
$ npm run dev:watch

```

## Testes

```bash

# testes unitários
$ npm run test

# testes unitários no modo watch
$ npm run test:watch

# teste coverage
$ npm run test:cov

```

# Api Endpoints

1. Hello World

<ul>
    <li>Metódo: GET</li>
    <li>URL: http://localhost:8080</li>
    <li>Description: apenas mostra uma mensagem </li>
    <li>Response status: 200 OK</li>
    <li>Response Payload: </li>
</ul>

```bash
    $ Hello World - ( Welcome to my Silmarillion API )
```


# Meus Objetivos com esta aplicação

## Há algum tempo voltei a ler meus livros da Primeira Era da Terra-Média, esses são O Silmarillion, Beren e Lúthien, Os Filhos de Húrin e A Queda de Gondolin.

## Sempre fui muito fã de "O Senhor dos anéis", porém nunca tinha me aprofundado tanto antes nas obras literárias . O momento que estou agora ( na vida ) casou-se perfeitamente, estou me sentindo perdido ( espero que no futuro se torne "estava" ), com medo de sempre cair na mesmice de replicar muito código e só realizar projetos que já estão prontos em cursos.

## Então decidi unir o útil ao agradável e irei construir essa API do Silmarillion, com base nos livros e vídeos que venho vendo nos últimos meses.