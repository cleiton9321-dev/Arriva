const temas = require("../src/data/temas");
const lojas = require("../src/data/lojas");
const produtos = require("../src/data/produtos");

const erros = [];

function verificarIdsUnicos(lista, nome) {
  const ids = lista.map((item) => item.id);

  if (new Set(ids).size !== ids.length) {
    erros.push(`Existem IDs duplicados em ${nome}.`);
  }
}

function verificarPreco(preco, descricao) {
  if (typeof preco !== "number" || !Number.isFinite(preco) || preco < 0) {
    erros.push(`Preço inválido: ${descricao}.`);
  }
}

// Verificar IDs
verificarIdsUnicos(temas, "temas");
verificarIdsUnicos(lojas, "lojas");
verificarIdsUnicos(produtos, "produtos");

// Verificar relacionamento das lojas
lojas.forEach((loja) => {
  const temaExiste = temas.some((tema) => tema.id === loja.temaId);

  if (!temaExiste) {
    erros.push(`A loja ${loja.nome} possui um tema inexistente.`);
  }
});

// Verificar produtos
produtos.forEach((produto) => {
  const lojaExiste = lojas.some((loja) => loja.id === produto.lojaId);

  if (!lojaExiste) {
    erros.push(`O produto ${produto.nome} possui uma loja inexistente.`);
  }

  verificarPreco(produto.preco, produto.nome);

  if (!["produto", "combo"].includes(produto.tipo)) {
    erros.push(`Tipo inválido no produto ${produto.nome}.`);
  }

  // Verificar adicionais
  produto.adicionais.forEach((adicional) => {
    verificarPreco(
      adicional.preco,
      `${produto.nome} - adicional ${adicional.nome}`,
    );
  });

  // Verificar opções
  produto.opcoes.forEach((opcao) => {
    verificarPreco(opcao.preco, `${produto.nome} - opção ${opcao.nome}`);
  });
});

// Resultado
console.log("\n===== VALIDAÇÃO DO ARRIVA =====\n");

console.log(`Temas: ${temas.length}`);
console.log(`Lojas: ${lojas.length}`);
console.log(`Produtos: ${produtos.length}`);

if (erros.length > 0) {
  console.log("\nForam encontrados problemas:");

  erros.forEach((erro) => console.log(`- ${erro}`));

  process.exitCode = 1;
} else {
  console.log("\nCatálogo validado com sucesso!");
}
