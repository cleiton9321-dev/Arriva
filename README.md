# Arriva

**Uma nova experiência em delivery.**

O Arriva é uma plataforma de delivery desenvolvida como projeto de Desenvolvimento de Sistemas, com o objetivo de simular o funcionamento de um sistema de pedidos de alimentos, desde a escolha dos produtos até o gerenciamento dos pedidos.

O projeto busca aplicar conceitos de desenvolvimento web, arquitetura cliente-servidor, APIs REST, gerenciamento de estado e persistência local.

> 🚧 **Status:** Em desenvolvimento.

---

## Sobre o projeto

A plataforma será dividida em duas áreas principais:

- **Cliente:** navegação pelo catálogo, seleção de produtos, carrinho e realização de pedidos.
- **Administrador:** gerenciamento de produtos, acompanhamento de pedidos e controle de disponibilidade.

O sistema será desenvolvido sem banco de dados, utilizando armazenamento local no navegador e dados temporários em memória no servidor.

## Tecnologias

### Frontend
- React
- JavaScript (ES6+)
- HTML5
- CSS3
- React Router

### Backend
- Node.js
- Express.js
- API REST

### Ferramentas e qualidade
- Git e GitHub
- LocalStorage
- Vitest
- Supertest
- Figma

*As tecnologias serão incorporadas gradualmente durante o desenvolvimento.*

## Funcionalidades planejadas

- [ ] Catálogo de produtos
- [ ] Pesquisa, filtros e categorias
- [ ] Página de detalhes dos produtos
- [ ] Carrinho de compras
- [ ] Cálculo automático de valores
- [ ] Cupons promocionais simulados
- [ ] Checkout e confirmação de pedidos
- [ ] Histórico de pedidos
- [ ] Acompanhamento de status
- [ ] Login e sessão simulados
- [ ] Painel administrativo
- [ ] Gerenciamento de produtos
- [ ] Gerenciamento de pedidos
- [ ] Dashboard com indicadores
- [ ] Interface responsiva
- [ ] Tema claro e escuro

## Arquitetura

O Arriva utilizará uma arquitetura separada entre frontend e backend:

- **React:** interface e interação com o usuário.
- **Node.js e Express:** servidor e disponibilização da API.
- **LocalStorage:** armazenamento local de informações no navegador.
- **Memória do servidor:** armazenamento temporário de dados durante a execução.

**Observação:** os dados armazenados no navegador não são compartilhados entre dispositivos. Os dados mantidos em memória pelo servidor são perdidos quando ele é reiniciado.

## Organização do projeto

A estrutura será organizada para separar responsabilidades e facilitar a manutenção:

```text
Arriva/
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── contexts/
│       ├── services/
│       └── utils/
│
├── backend/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── data/
│       ├── middlewares/
│       ├── routes/
│       ├── services/
│       └── server.js
│
├── docs/
├── .gitignore
└── README.md
```

## Desenvolvimento

O projeto será desenvolvido de forma incremental, utilizando Git para versionamento e GitHub para colaboração e integração das funcionalidades.

As principais branches serão:

- `main`: versão estável.
- `develop`: integração das funcionalidades.
- `feature/*`: desenvolvimento de funcionalidades específicas.

## Objetivos de aprendizagem

O desenvolvimento do Arriva busca consolidar conhecimentos em:

- Programação JavaScript.
- Desenvolvimento de interfaces com React.
- Criação e consumo de APIs REST.
- Desenvolvimento backend com Node.js e Express.
- Organização de projetos.
- Versionamento com Git e GitHub.
- Boas práticas de programação e testes.

---

**Desenvolvido como projeto acadêmico de Desenvolvimento de Sistemas.**
