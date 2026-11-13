const express = require("express");

const app = express();

const PORT = 3000;

// Produtos iniciais do Snack-up
const produtos = [
  {
    id: 1,
    nome: "Hambúrguer",
    preco: 25.9,
  },
  {
    id: 2,
    nome: "Batata frita",
    preco: 12.0,
  },
  {
    id: 3,
    nome: "Refrigerante",
    preco: 7.0,
  },
];

app.get("/api/produtos/:id", (req, res) => {
  const id = Number(req.params.id);

  const produto = produtos.find((item) => item.id === id);

  if (!produto) {
    return res.status(404).json({
      mensagem: "Produto não encontrado",
    });
  }

  res.json(produto);
});

// Rota inicial
app.get("/", (req, res) => {
  res.send("Servidor do Snack-up funcionando!");
});

// Rota de produtos
app.get("/api/produtos", (req, res) => {
  res.json(produtos);
});

// Buscar produto pelo ID
app.get("/api/produtos/:id", (req, res) => {
  const id = Number(req.params.id);

  const produto = produtos.find((item) => item.id === id);

  if (!produto) {
    return res.status(404).json({
      mensagem: "Produto não encontrado",
    });
  }

  res.json(produto);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
