function criarProduto(
  id,
  lojaId,
  nome,
  descricao,
  preco,
  adicionais = [],
  tipo = "produto",
  opcoes = [],
) {
  return {
    id,
    lojaId,
    nome,
    descricao,
    preco,
    tipo,
    disponivel: true,
    adicionais,
    opcoes,
  };
}

const produtosBase = [
  // =====================================
  // LOJA 1 — PÃO & PROSA
  // =====================================

  criarProduto(
    101,
    1,
    "Pão Francês",
    "Pão francês fresquinho, crocante por fora e macio por dentro.",
    1.2,
  ),

  criarProduto(
    102,
    1,
    "Pão de Queijo",
    "Porção de pães de queijo tradicionais, preparados na hora.",
    8.0,
    [{ nome: "Requeijão", preco: 2.5 }],
    "produto",
    [
      { nome: "4 unidades", preco: 8.0 },
      { nome: "8 unidades", preco: 15.0 },
    ],
  ),

  criarProduto(
    103,
    1,
    "Misto Quente",
    "Pão de forma tostado com presunto e queijo derretido.",
    12.9,
    [
      { nome: "Queijo extra", preco: 3.0 },
      { nome: "Tomate", preco: 1.5 },
    ],
  ),

  criarProduto(
    104,
    1,
    "Café com Leite",
    "Café preparado na hora com leite cremoso.",
    7.0,
    [],
    "produto",
    [
      { nome: "Pequeno", preco: 7.0 },
      { nome: "Grande", preco: 10.0 },
    ],
  ),

  criarProduto(
    105,
    1,
    "Combo Café da Manhã",
    "Café com leite, pão na chapa e pão de queijo.",
    19.9,
    [{ nome: "Suco natural", preco: 5.0 }],
    "combo",
  ),

  // =====================================
  // LOJA 2 — FORNO DOURADO
  // =====================================

  criarProduto(
    106,
    2,
    "Pão Integral",
    "Pão integral macio, preparado com farinha de trigo integral.",
    12.0,
  ),

  criarProduto(
    107,
    2,
    "Croissant",
    "Croissant folhado, dourado e amanteigado.",
    9.9,
    [
      { nome: "Recheio de chocolate", preco: 3.5 },
      { nome: "Recheio de queijo", preco: 3.0 },
    ],
  ),

  criarProduto(
    108,
    2,
    "Coxinha de Frango",
    "Coxinha crocante recheada com frango temperado.",
    8.5,
    [{ nome: "Catupiry", preco: 3.0 }],
  ),

  criarProduto(
    109,
    2,
    "Bolo de Cenoura",
    "Fatia de bolo de cenoura com cobertura de chocolate.",
    10.0,
  ),

  criarProduto(
    110,
    2,
    "Combo Salgado",
    "Duas coxinhas e uma bebida de 350 ml.",
    20.9,
    [{ nome: "Trocar bebida por suco", preco: 3.0 }],
    "combo",
  ),

  // =====================================
  // LOJA 3 — CAFÉ DA VILA
  // =====================================

  criarProduto(
    111,
    3,
    "Cappuccino",
    "Café espresso com leite vaporizado e chocolate.",
    12.0,
    [],
    "produto",
    [
      { nome: "Pequeno", preco: 12.0 },
      { nome: "Grande", preco: 16.0 },
    ],
  ),

  criarProduto(
    112,
    3,
    "Brownie de Chocolate",
    "Brownie artesanal com chocolate meio amargo.",
    11.9,
    [{ nome: "Sorvete de creme", preco: 5.0 }],
  ),

  criarProduto(
    113,
    3,
    "Sanduíche Natural",
    "Pão integral com frango desfiado, cenoura e alface.",
    16.9,
    [{ nome: "Queijo", preco: 3.0 }],
  ),

  criarProduto(
    114,
    3,
    "Suco Natural",
    "Suco preparado com frutas selecionadas.",
    9.0,
    [],
    "produto",
    [
      { nome: "Laranja", preco: 9.0 },
      { nome: "Abacaxi", preco: 9.0 },
      { nome: "Morango", preco: 11.0 },
    ],
  ),

  criarProduto(
    115,
    3,
    "Combo Café Especial",
    "Cappuccino, brownie e um pão de queijo.",
    25.9,
    [{ nome: "Brownie com sorvete", preco: 5.0 }],
    "combo",
  ),

  // =====================================
  // LOJA 4 — BURGER HOUSE
  // =====================================

  criarProduto(
    116,
    4,
    "Classic Burger",
    "Hambúrguer artesanal, queijo cheddar, alface, tomate e molho da casa.",
    24.9,
    [
      { nome: "Bacon", preco: 4.0 },
      { nome: "Cheddar extra", preco: 3.0 },
      { nome: "Hambúrguer extra", preco: 8.0 },
    ],
  ),

  criarProduto(
    117,
    4,
    "Burger Duplo",
    "Dois hambúrgueres artesanais, queijo cheddar e molho especial.",
    32.9,
    [
      { nome: "Bacon", preco: 4.0 },
      { nome: "Cebola caramelizada", preco: 3.0 },
    ],
  ),

  criarProduto(
    118,
    4,
    "Chicken Burger",
    "Filé de frango empanado, alface e maionese especial.",
    25.9,
    [
      { nome: "Queijo extra", preco: 3.0 },
      { nome: "Bacon", preco: 4.0 },
    ],
  ),

  criarProduto(
    119,
    4,
    "Batata Especial",
    "Porção de batatas fritas com cheddar e bacon.",
    19.9,
    [
      { nome: "Cheddar extra", preco: 3.0 },
      { nome: "Bacon extra", preco: 4.0 },
    ],
  ),

  criarProduto(
    120,
    4,
    "Combo Burger House",
    "Classic Burger, batata frita média e refrigerante de 350 ml.",
    36.9,
    [
      { nome: "Batata grande", preco: 5.0 },
      { nome: "Refrigerante 600 ml", preco: 3.0 },
    ],
    "combo",
  ),

  // =====================================
  // LOJA 5 — PIZZA CENTRAL
  // =====================================

  criarProduto(
    121,
    5,
    "Pizza Calabresa",
    "Molho de tomate, muçarela, calabresa e cebola.",
    35.0,
    [
      { nome: "Borda de catupiry", preco: 8.0 },
      { nome: "Borda de cheddar", preco: 9.0 },
      { nome: "Azeitonas extras", preco: 3.0 },
    ],
    "produto",
    [
      { nome: "Pequena", preco: 35.0 },
      { nome: "Média", preco: 45.0 },
      { nome: "Grande", preco: 55.0 },
    ],
  ),

  criarProduto(
    122,
    5,
    "Pizza Mussarela",
    "Molho de tomate, muçarela, tomate e orégano.",
    33.0,
    [
      { nome: "Borda de catupiry", preco: 8.0 },
      { nome: "Borda de chocolate", preco: 10.0 },
    ],
    "produto",
    [
      { nome: "Pequena", preco: 33.0 },
      { nome: "Média", preco: 43.0 },
      { nome: "Grande", preco: 53.0 },
    ],
  ),

  criarProduto(
    123,
    5,
    "Pizza Frango com Catupiry",
    "Frango desfiado, muçarela, catupiry e orégano.",
    39.0,
    [
      { nome: "Borda de cheddar", preco: 9.0 },
      { nome: "Milho extra", preco: 3.0 },
    ],
    "produto",
    [
      { nome: "Pequena", preco: 39.0 },
      { nome: "Média", preco: 49.0 },
      { nome: "Grande", preco: 59.0 },
    ],
  ),

  criarProduto(
    124,
    5,
    "Pizza Chocolate",
    "Pizza doce com chocolate ao leite e granulado.",
    38.0,
    [
      { nome: "Morango", preco: 5.0 },
      { nome: "Banana", preco: 3.0 },
    ],
    "produto",
    [
      { nome: "Pequena", preco: 38.0 },
      { nome: "Média", preco: 48.0 },
      { nome: "Grande", preco: 58.0 },
    ],
  ),

  criarProduto(
    125,
    5,
    "Combo Noite de Pizza",
    "Uma pizza média de calabresa e dois refrigerantes de 350 ml.",
    55.9,
    [{ nome: "Trocar por pizza de frango", preco: 4.0 }],
    "combo",
  ),

  // =====================================
  // LOJA 6 — DOG STATION
  // =====================================

  criarProduto(
    126,
    6,
    "Hot-Dog Tradicional",
    "Pão, salsicha, molho especial, milho, batata palha e purê.",
    14.9,
    [
      { nome: "Queijo ralado", preco: 2.0 },
      { nome: "Bacon", preco: 4.0 },
    ],
  ),

  criarProduto(
    127,
    6,
    "Hot-Dog Completo",
    "Pão, duas salsichas, purê, milho, queijo, molho e batata palha.",
    19.9,
    [
      { nome: "Cheddar", preco: 3.0 },
      { nome: "Bacon", preco: 4.0 },
    ],
  ),

  criarProduto(
    128,
    6,
    "Hot-Dog Especial",
    "Pão, salsicha, queijo, bacon, molho da casa e batata palha.",
    22.9,
    [
      { nome: "Salsicha extra", preco: 3.0 },
      { nome: "Cheddar", preco: 3.0 },
    ],
  ),

  criarProduto(
    129,
    6,
    "Batata Frita",
    "Porção de batatas fritas crocantes.",
    13.9,
    [
      { nome: "Cheddar", preco: 3.0 },
      { nome: "Bacon", preco: 4.0 },
    ],
    "produto",
    [
      { nome: "Pequena", preco: 13.9 },
      { nome: "Grande", preco: 21.9 },
    ],
  ),

  criarProduto(
    130,
    6,
    "Combo Dog Station",
    "Dois hot-dogs tradicionais e uma batata frita grande.",
    39.9,
    [{ nome: "Adicionar refrigerante 1L", preco: 7.0 }],
    "combo",
  ),

  // =====================================
  // LOJA 7 — SAKURA SUSHI
  // =====================================

  criarProduto(
    131,
    7,
    "Combo Sushi Clássico",
    "Combinado com 8 peças variadas de sushi e uramaki.",
    32.9,
    [
      { nome: "Molho tarê extra", preco: 2.0 },
      { nome: "Gengibre extra", preco: 1.5 },
    ],
    "combo",
  ),

  criarProduto(
    132,
    7,
    "Combo Especial",
    "Combinado com 16 peças variadas de sushi, sashimi e uramaki.",
    54.9,
    [{ nome: "Mais 4 peças de salmão", preco: 12.0 }],
    "combo",
  ),

  criarProduto(
    133,
    7,
    "Temaki de Salmão",
    "Cone de alga recheado com arroz, salmão e cream cheese.",
    25.9,
    [
      { nome: "Cream cheese extra", preco: 3.0 },
      { nome: "Cebolinha", preco: 1.5 },
    ],
  ),

  criarProduto(
    134,
    7,
    "Hot Roll",
    "Porção de 8 unidades de sushi empanado e crocante.",
    29.9,
    [{ nome: "Molho tarê extra", preco: 2.0 }],
  ),

  criarProduto(
    135,
    7,
    "Yakissoba",
    "Macarrão oriental com legumes e molho especial.",
    34.9,
    [
      { nome: "Frango extra", preco: 7.0 },
      { nome: "Carne extra", preco: 9.0 },
    ],
    "produto",
    [
      { nome: "Individual", preco: 34.9 },
      { nome: "Grande", preco: 49.9 },
    ],
  ),

  // =====================================
  // LOJA 8 — BELLA ITÁLIA
  // =====================================

  criarProduto(
    136,
    8,
    "Lasanha à Bolonhesa",
    "Lasanha com molho bolonhesa, queijo e molho branco.",
    32.9,
    [{ nome: "Queijo extra", preco: 4.0 }],
  ),

  criarProduto(
    137,
    8,
    "Fettuccine Alfredo",
    "Massa fettuccine com molho cremoso de queijo.",
    29.9,
    [
      { nome: "Frango grelhado", preco: 8.0 },
      { nome: "Bacon", preco: 4.0 },
    ],
  ),

  criarProduto(
    138,
    8,
    "Nhoque ao Sugo",
    "Nhoque de batata com molho de tomate artesanal.",
    27.9,
    [
      { nome: "Parmesão extra", preco: 3.0 },
      { nome: "Molho bolonhesa", preco: 6.0 },
    ],
  ),

  criarProduto(
    139,
    8,
    "Risoto de Frango",
    "Risoto cremoso com frango, parmesão e ervas.",
    36.9,
    [{ nome: "Parmesão extra", preco: 3.0 }],
  ),

  criarProduto(
    140,
    8,
    "Combo Bella Itália",
    "Lasanha à bolonhesa, bebida de 350 ml e sobremesa do dia.",
    44.9,
    [{ nome: "Trocar por suco natural", preco: 4.0 }],
    "combo",
  ),

  // =====================================
  // LOJA 9 — TEMPERO ORIENTAL
  // =====================================

  criarProduto(
    141,
    9,
    "Frango Xadrez",
    "Frango em cubos com pimentões, cebola e molho oriental.",
    29.9,
    [{ nome: "Porção extra de arroz", preco: 6.0 }],
  ),

  criarProduto(
    142,
    9,
    "Carne com Legumes",
    "Carne em tiras preparada com legumes e molho especial.",
    34.9,
  ),

  criarProduto(
    143,
    9,
    "Rolinho Primavera",
    "Porção com 4 rolinhos crocantes recheados com legumes.",
    18.9,
    [{ nome: "Molho agridoce extra", preco: 2.0 }],
  ),

  criarProduto(
    144,
    9,
    "Arroz Chop Suey",
    "Arroz oriental com legumes, ovos e molho especial.",
    24.9,
    [
      { nome: "Frango", preco: 7.0 },
      { nome: "Carne", preco: 9.0 },
    ],
  ),

  criarProduto(
    145,
    9,
    "Combo Oriental",
    "Frango xadrez, arroz chop suey e dois rolinhos primavera.",
    46.9,
    [],
    "combo",
  ),

  // =====================================
  // LOJA 10 — DOCE ENCANTO
  // =====================================

  criarProduto(
    146,
    10,
    "Bolo de Chocolate",
    "Fatia de bolo fofinho com cobertura cremosa de chocolate.",
    12.9,
    [
      { nome: "Morango", preco: 3.0 },
      { nome: "Brigadeiro extra", preco: 4.0 },
    ],
  ),

  criarProduto(
    147,
    10,
    "Cheesecake de Morango",
    "Cheesecake com base crocante e cobertura de morango.",
    16.9,
  ),

  criarProduto(
    148,
    10,
    "Brigadeiro Gourmet",
    "Porção com 4 brigadeiros artesanais.",
    14.0,
    [{ nome: "Adicionar mais 4 unidades", preco: 12.0 }],
  ),

  criarProduto(
    149,
    10,
    "Torta de Limão",
    "Fatia de torta com creme de limão e cobertura suave.",
    13.9,
  ),

  criarProduto(
    150,
    10,
    "Combo Hora Doce",
    "Duas fatias de bolo e quatro brigadeiros gourmet.",
    36.9,
    [],
    "combo",
  ),

  // =====================================
  // LOJA 11 — BROWNIE LAB
  // =====================================

  criarProduto(
    151,
    11,
    "Brownie Tradicional",
    "Brownie artesanal com casquinha crocante e interior macio.",
    11.9,
    [
      { nome: "Calda de chocolate", preco: 3.0 },
      { nome: "Nozes", preco: 4.0 },
    ],
  ),

  criarProduto(
    152,
    11,
    "Cookie de Chocolate",
    "Cookie artesanal com gotas de chocolate.",
    9.9,
    [{ nome: "Recheio de Nutella", preco: 4.0 }],
  ),

  criarProduto(
    153,
    11,
    "Brownie com Sorvete",
    "Brownie quente acompanhado de sorvete de creme.",
    19.9,
    [
      { nome: "Calda de morango", preco: 3.0 },
      { nome: "Morango", preco: 4.0 },
    ],
  ),

  criarProduto(
    154,
    11,
    "Cookie Recheado",
    "Cookie grande recheado com chocolate cremoso.",
    14.9,
    [{ nome: "Sorvete de creme", preco: 5.0 }],
  ),

  criarProduto(
    155,
    11,
    "Combo Brownie Lab",
    "Dois brownies tradicionais e dois cookies de chocolate.",
    39.9,
    [],
    "combo",
  ),

  // =====================================
  // LOJA 12 — GELATO MIX
  // =====================================

  criarProduto(
    156,
    12,
    "Sorvete de Creme",
    "Sorvete cremoso de creme feito com receita especial.",
    12.0,
    [],
    "produto",
    [
      { nome: "Pequeno", preco: 12.0 },
      { nome: "Médio", preco: 18.0 },
      { nome: "Grande", preco: 24.0 },
    ],
  ),

  criarProduto(
    157,
    12,
    "Açaí Tradicional",
    "Açaí cremoso acompanhado de banana e granola.",
    16.9,
    [
      { nome: "Leite em pó", preco: 3.0 },
      { nome: "Leite condensado", preco: 3.0 },
      { nome: "Morango", preco: 4.0 },
    ],
    "produto",
    [
      { nome: "300 ml", preco: 16.9 },
      { nome: "500 ml", preco: 22.9 },
      { nome: "700 ml", preco: 28.9 },
    ],
  ),

  criarProduto(
    158,
    12,
    "Milk-shake de Chocolate",
    "Milk-shake cremoso de chocolate com cobertura especial.",
    18.9,
    [
      { nome: "Chantilly", preco: 3.0 },
      { nome: "Calda extra", preco: 2.0 },
    ],
  ),

  criarProduto(
    159,
    12,
    "Sundae",
    "Sorvete de creme com calda de chocolate e amendoim.",
    15.9,
    [
      { nome: "Morango", preco: 3.0 },
      { nome: "Chantilly", preco: 3.0 },
    ],
  ),

  criarProduto(
    160,
    12,
    "Combo Gelato",
    "Dois milk-shakes pequenos e uma porção de sundae.",
    44.9,
    [],
    "combo",
  ),

  // =====================================
  // LOJA 13 — GREEN BOWL
  // =====================================

  criarProduto(
    161,
    13,
    "Bowl de Frango",
    "Frango grelhado, arroz integral, legumes e folhas frescas.",
    28.9,
    [
      { nome: "Frango extra", preco: 7.0 },
      { nome: "Molho especial", preco: 2.0 },
    ],
  ),

  criarProduto(
    162,
    13,
    "Salada Tropical",
    "Mix de folhas, manga, tomate, cenoura e molho cítrico.",
    23.9,
    [
      { nome: "Frango grelhado", preco: 8.0 },
      { nome: "Castanhas", preco: 4.0 },
    ],
  ),

  criarProduto(
    163,
    13,
    "Bowl Vegetariano",
    "Quinoa, grão-de-bico, legumes e folhas frescas.",
    26.9,
    [
      { nome: "Abacate", preco: 4.0 },
      { nome: "Molho de ervas", preco: 2.0 },
    ],
  ),

  criarProduto(
    164,
    13,
    "Wrap de Frango",
    "Wrap integral com frango, alface, tomate e molho leve.",
    22.9,
    [{ nome: "Queijo", preco: 3.0 }],
  ),

  criarProduto(
    165,
    13,
    "Combo Green",
    "Bowl de frango, suco natural e salada de frutas.",
    39.9,
    [],
    "combo",
  ),

  // =====================================
  // LOJA 14 — LEVE SABOR
  // =====================================

  criarProduto(
    166,
    14,
    "Frango Grelhado",
    "Filé de frango grelhado com arroz integral e legumes.",
    27.9,
    [
      { nome: "Frango extra", preco: 7.0 },
      { nome: "Legumes extras", preco: 4.0 },
    ],
  ),

  criarProduto(
    167,
    14,
    "Carne com Batata Doce",
    "Carne grelhada acompanhada de batata-doce e vegetais.",
    32.9,
  ),

  criarProduto(
    168,
    14,
    "Panqueca de Ricota",
    "Panqueca recheada com ricota e espinafre.",
    25.9,
    [{ nome: "Molho de tomate extra", preco: 3.0 }],
  ),

  criarProduto(
    169,
    14,
    "Escondidinho de Frango",
    "Purê de mandioca com frango desfiado e queijo.",
    28.9,
    [{ nome: "Queijo extra", preco: 3.0 }],
  ),

  criarProduto(
    170,
    14,
    "Combo Leve",
    "Frango grelhado, arroz integral, legumes e suco natural.",
    36.9,
    [],
    "combo",
  ),

  // =====================================
  // LOJA 15 — NATURAL FIT
  // =====================================

  criarProduto(
    171,
    15,
    "Sanduíche Natural",
    "Pão integral, frango desfiado, alface, tomate e cenoura.",
    17.9,
    [
      { nome: "Queijo branco", preco: 3.0 },
      { nome: "Frango extra", preco: 5.0 },
    ],
  ),

  criarProduto(
    172,
    15,
    "Suco Verde",
    "Suco de couve, limão, maçã e gengibre.",
    11.9,
    [],
    "produto",
    [
      { nome: "300 ml", preco: 11.9 },
      { nome: "500 ml", preco: 15.9 },
    ],
  ),

  criarProduto(
    173,
    15,
    "Wrap Vegetariano",
    "Wrap integral com homus, cenoura, alface e tomate.",
    19.9,
    [{ nome: "Abacate", preco: 4.0 }],
  ),

  criarProduto(
    174,
    15,
    "Bowl de Frutas",
    "Mix de frutas frescas com granola e iogurte.",
    18.9,
    [
      { nome: "Mel", preco: 2.0 },
      { nome: "Granola extra", preco: 3.0 },
    ],
  ),

  criarProduto(
    175,
    15,
    "Combo Natural Fit",
    "Sanduíche natural, suco verde e bowl de frutas pequeno.",
    39.9,
    [],
    "combo",
  ),
];

const categoriasPorProduto = {
  // Padaria
  101: "Pães",
  102: "Salgados",
  103: "Sanduíches",
  104: "Bebidas",
  105: "Combos",

  106: "Pães",
  107: "Doces",
  108: "Salgados",
  109: "Bolos",
  110: "Combos",

  111: "Bebidas",
  112: "Doces",
  113: "Sanduíches",
  114: "Bebidas",
  115: "Combos",

  // Lanches
  116: "Hambúrgueres",
  117: "Hambúrgueres",
  118: "Hambúrgueres",
  119: "Porções",
  120: "Combos",

  121: "Pizzas",
  122: "Pizzas",
  123: "Pizzas",
  124: "Pizzas doces",
  125: "Combos",

  126: "Hot-dogs",
  127: "Hot-dogs",
  128: "Hot-dogs",
  129: "Porções",
  130: "Combos",

  // Comidas temáticas
  131: "Combos japoneses",
  132: "Combos japoneses",
  133: "Sushi",
  134: "Sushi",
  135: "Pratos orientais",

  136: "Massas",
  137: "Massas",
  138: "Massas",
  139: "Risotos",
  140: "Combos",

  141: "Pratos orientais",
  142: "Pratos orientais",
  143: "Entradas",
  144: "Pratos orientais",
  145: "Combos",

  // Doces e sobremesas
  146: "Bolos",
  147: "Tortas",
  148: "Doces",
  149: "Tortas",
  150: "Combos",

  151: "Brownies",
  152: "Cookies",
  153: "Brownies",
  154: "Cookies",
  155: "Combos",

  156: "Sorvetes",
  157: "Açaí",
  158: "Bebidas",
  159: "Sorvetes",
  160: "Combos",

  // Comidas saudáveis
  161: "Bowls",
  162: "Saladas",
  163: "Bowls",
  164: "Sanduíches",
  165: "Combos",

  166: "Refeições",
  167: "Refeições",
  168: "Massas",
  169: "Refeições",
  170: "Combos",

  171: "Sanduíches",
  172: "Bebidas",
  173: "Sanduíches",
  174: "Bowls",
  175: "Combos",
};

// Adicionando categoria aos produtos
const produtos = produtosBase.map((produto) => ({
  ...produto,
  categoria: categoriasPorProduto[produto.id] || "Outros",
  imagem: null,
}));

module.exports = produtos;
