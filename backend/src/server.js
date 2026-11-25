const express = require("express");

const app = express();
const PORT = 3000;

// Importando os dados do Arriva
const temas = require("./data/temas");
const lojas = require("./data/lojas");
const produtos = require("./data/produtos");

app.use(express.json());

// Rota inicial
app.get("/", (req, res) => {
  res.send("API do Arriva funcionando!");
});

// Listar todos os temas
app.get("/api/temas", (req, res) => {
  res.json(temas);
});

// Listar lojas, com filtro opcional por tema
app.get("/api/lojas", (req, res) => {
  const { temaId } = req.query;

  let resultado = lojas;

  if (temaId !== undefined) {
    const id = Number(temaId);

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        mensagem: "ID do tema inválido.",
      });
    }

    resultado = resultado.filter((loja) => loja.temaId === id);
  }

  res.json(resultado);
});

// Buscar uma loja pelo ID
app.get("/api/lojas/:id", (req, res) => {
  const id = Number(req.params.id);

  const loja = lojas.find((item) => item.id === id);

  if (!loja) {
    return res.status(404).json({
      mensagem: "Loja não encontrada.",
    });
  }

  res.json(loja);
});

// Listar produtos com filtros opcionais
app.get("/api/produtos", (req, res) => {
  const { lojaId, tipo, busca } = req.query;

  let resultado = produtos;

  if (lojaId !== undefined) {
    const id = Number(lojaId);

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        mensagem: "ID da loja inválido.",
      });
    }

    resultado = resultado.filter((produto) => produto.lojaId === id);
  }

  if (tipo !== undefined) {
    if (!["produto", "combo"].includes(tipo)) {
      return res.status(400).json({
        mensagem: "Tipo inválido. Use produto ou combo.",
      });
    }

    resultado = resultado.filter((produto) => produto.tipo === tipo);
  }

  if (busca) {
    const termo = String(busca).toLowerCase();

    resultado = resultado.filter((produto) =>
      produto.nome.toLowerCase().includes(termo),
    );
  }

  res.json(resultado);
});

// Buscar produto pelo ID
app.get("/api/produtos/:id", (req, res) => {
  const id = Number(req.params.id);

  const produto = produtos.find((item) => item.id === id);

  if (!produto) {
    return res.status(404).json({
      mensagem: "Produto não encontrado.",
    });
  }

  res.json(produto);
});

// Rota para produtos de uma loja específica
app.get("/api/lojas/:id/produtos", (req, res) => {
  const id = Number(req.params.id);

  const loja = lojas.find((item) => item.id === id);

  if (!loja) {
    return res.status(404).json({
      mensagem: "Loja não encontrada.",
    });
  }

  const produtosDaLoja = produtos.filter((produto) => produto.lojaId === id);

  res.json(produtosDaLoja);
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor Arriva rodando em http://localhost:${PORT}`);
});
