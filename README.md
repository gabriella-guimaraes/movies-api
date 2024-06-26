﻿# Games API
Projeto de API RESTful Node.js, Express, Typescript e MongoDB desenvolvida durante o curso de Typescript avançado.

<p align="center">
  <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/>
  <img alt="Typescript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/>
  <img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>
  <img alt="MongoDB" src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
</p>

* [Documentação API](#documentação-api)
* [Desenvolvimento](#desenvolvimento)
  - [Requisitos](#requisitos)
  - [Instalação](#instalação)
  - [Configuração](#configuração)
  - [Compilação e execução](#compilação)
 
## Documentação

Para a documentação do projeto é utilizado o [Swagger](https://swagger.io/). Ferramente que provê interface para testes e também um arquivo .json com as configurações de todos os endpoints.
Por padrão a documentação está disponível no endpoint `/docs`

## Desenvolvimento

### Requisitos

```

* Node
* Express
* MongoDB
* morgan
* winston

```

### Instalação
Clonar o repositório executando o seguinte código no terminal:
```

git clone 'https://github.com/gabriella-guimaraes/games-api.git'

```

Após isso, acessar a pasta raiz do projeto e executar:
```

npm install

```

### Configuração

Lista de variáveis de ambiente necessárias para a execução da aplicação
|         Variável        |                   Descrição                  |   Tipo   | Obrigatório |
| ----------------------- | -------------------------------------------- |:--------:|:-----------:|
| DB_USER                 | Usuário para conexão de dados                |   Texto  |     Sim     |
| DB_PASS                 | Senha do usuário para acesso ao banco        |   Texto  |     Sim     |
| default                 | Url para conexão com banco Atlas MongoDB     |   Texto  |     Sim     |

### Compilação e execução

Após a [Configuração](#configuração) da aplicação executar o comando abaixo na pasta raiz do projeto:

```bash

# Compila a aplicação em ambiente de desenvolvimento
npm run dev

```

