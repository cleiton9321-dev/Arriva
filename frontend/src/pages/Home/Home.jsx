
import { useState } from "react";

import {
    Home as HomeIcon,
    Search,
    ClipboardList,
    Heart,
    TicketPercent,
    Settings,
    MapPin,
    ChevronDown,
    Eye,
    Gift,
    Bike,
    Coins,
    ShoppingBag,
    Plus,
    Menu,
    X
} from "lucide-react";

import "./Home.css";

// Categorias do Arriva
const categorias = [
    {
        nome: "Lanches",
        cor: "#E47C61",
        imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
    },
    {
        nome: "Comidas saudáveis",
        cor: "#75A989",
        imagem: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500"
    },
    {
        nome: "Restaurantes temáticos",
        cor: "#559DA5",
        imagem: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500"
    },
    {
        nome: "Doces e sobremesas",
        cor: "#D987A9",
        imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"
    },
    {
        nome: "Padaria",
        cor: "#D9A45B",
        imagem: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500"
    }
];

// Produtos demonstrativos
const produtos = [
    {
        nome: "Hub Clássico",
        categoria: "Lanches",
        descricao: "Blend de 180 g, cheddar, alface e tomate.",
        preco: "32,90",
        imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
    },
    {
        nome: "Bowl de quinoa",
        categoria: "Comidas saudáveis",
        descricao: "Quinoa, abacate e grão-de-bico.",
        preco: "29,90",
        imagem: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600"
    },
    {
        nome: "Combinado Nori",
        categoria: "Restaurantes temáticos",
        descricao: "Sushi e sashimi, 20 peças.",
        preco: "59,90",
        imagem: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600"
    },
    {
        nome: "Fatia de chocolate",
        categoria: "Doces e sobremesas",
        descricao: "Bolo com ganache cremosa.",
        preco: "18,90",
        imagem: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600"
    },
    {
        nome: "Croissant de manteiga",
        categoria: "Padaria",
        descricao: "Folhado e assado na hora.",
        preco: "8,50",
        imagem: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600"
    },
    {
        nome: "Pizza margherita",
        categoria: "Restaurantes temáticos",
        descricao: "Mussarela, tomate e manjericão.",
        preco: "49,90",
        imagem: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600"
    }
];

export default function Home() {

    // Controla o menu lateral em telas menores
    const [menuAberto, setMenuAberto] = useState(false);

    // Controla a categoria selecionada
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas");

    // Controla a pesquisa
    const [pesquisa, setPesquisa] = useState("");

    // Filtra os produtos conforme a categoria e a pesquisa
    const produtosFiltrados = produtos.filter((produto) => {

        const correspondeCategoria =
            categoriaSelecionada === "Todas" ||
            produto.categoria === categoriaSelecionada;

        const correspondePesquisa =
            produto.nome.toLowerCase().includes(pesquisa.toLowerCase());

        return correspondeCategoria && correspondePesquisa;
    });

    return (

        <div className="home-layout">

            {/* MENU LATERAL */}

            <aside className={`home-sidebar ${menuAberto ? "sidebar-open" : ""}`}>

                <button
                    className="sidebar-close"
                    onClick={() => setMenuAberto(false)}
                    aria-label="Fechar menu"
                >
                    <X />
                </button>

                <a href="/home" className="sidebar-logo">
                    <img
                        src="/assets/logo/logo-arriva.png"
                        alt="Logo Arriva"
                    />
                </a>

                <nav className="sidebar-navigation">

                    <a href="/home" className="sidebar-link active">
                        <HomeIcon />
                        <span>Início</span>
                    </a>

                    <a href="#produtos" className="sidebar-link">
                        <Search />
                        <span>Buscar</span>
                    </a>

                    <a href="#pedidos" className="sidebar-link">
                        <ClipboardList />
                        <span>Meus pedidos</span>
                    </a>

                    <a href="#favoritos" className="sidebar-link">
                        <Heart />
                        <span>Favoritos</span>
                    </a>

                    <a href="#cupons" className="sidebar-link">
                        <TicketPercent />
                        <span>Cupons</span>
                    </a>

                    <a href="#configuracoes" className="sidebar-link">
                        <Settings />
                        <span>Configurações</span>
                    </a>

                </nav>

                <div className="sidebar-mascot">

                    <img
                        src="/assets/imagens/mascote.png"
                        alt="Mascote camaleão Arriva"
                    />

                    <p>
                        Quando a fome chama a gente Arriva!
                    </p>

                </div>

            </aside>

            {/* CONTEÚDO PRINCIPAL */}

            <main className="home-main">

                {/* CABEÇALHO */}

                <header className="home-header">

                    <button
                        className="mobile-menu-button"
                        onClick={() => setMenuAberto(true)}
                        aria-label="Abrir menu"
                    >
                        <Menu />
                    </button>

                    <div className="home-search">

                        <Search />

                        <input
                            type="search"
                            placeholder="Busque por comidas, restaurantes ou categorias..."
                            value={pesquisa}
                            onChange={(event) => setPesquisa(event.target.value)}
                        />

                    </div>

                    <button className="accessibility-button">
                        <Eye size={15} />
                        <span>Visão normal</span>
                    </button>

                    <button className="location-button">
                        <MapPin size={16} />

                        <span>Rua Augusta, 123</span>

                        <ChevronDown size={14} />
                    </button>

                    <button className="profile-button">
                        <span>LC</span>
                        <ChevronDown size={14} />
                    </button>

                </header>

                {/* BENEFÍCIOS E CUPONS */}

                <section className="benefits-section" id="cupons">

                    <div className="section-heading">

                        <div>
                            <p className="home-eyebrow">
                                VANTAGENS ARRIVA
                            </p>

                            <h2>Seus benefícios</h2>

                            <p>
                                Aproveite suas vantagens e descubra novas recompensas.
                            </p>
                        </div>

                        <a href="#cupons">
                            Ver todos os cupons →
                        </a>

                    </div>

                    <div className="benefits-grid">

                        {/* Primeira compra */}

                        <article className="benefit-card first-purchase">

                            <div className="benefit-icon">
                                <Gift />
                            </div>

                            <div className="benefit-info">
                                <span>BOAS-VINDAS</span>
                                <h3>15% OFF</h3>
                                <p>Na sua primeira compra.</p>
                            </div>

                            <span className="benefit-tag">NOVO</span>

                        </article>

                        {/* Entrega grátis */}

                        <article className="benefit-card free-delivery">

                            <div className="benefit-icon">
                                <Bike />
                            </div>

                            <div className="benefit-info">
                                <span>SUA PRÓXIMA RECOMPENSA</span>
                                <h3>3 de 5 pedidos</h3>
                                <p>Complete mais 2 e ganhe entrega grátis.</p>

                                <div className="benefit-progress">
                                    <div className="benefit-progress-fill" />
                                </div>

                            </div>

                        </article>

                        {/* Pontos */}

                        <article className="benefit-card reward-points">

                            <div className="benefit-icon">
                                <Coins />
                            </div>

                            <div className="benefit-info">
                                <span>ARRIVA PONTOS</span>
                                <h3>120 pontos</h3>
                                <p>Acumule pontos com seus pedidos.</p>
                            </div>

                        </article>

                        {/* Desconto especial */}

                        <article className="benefit-card special-discount">

                            <div className="benefit-icon">
                                <TicketPercent />
                            </div>

                            <div className="benefit-info">
                                <span>CUPOM ESPECIAL</span>
                                <h3>R$ 10 OFF</h3>
                                <p>Em pedidos acima de R$ 60.</p>
                            </div>

                        </article>

                    </div>

                </section>

                {/* BANNER INSTITUCIONAL */}

                <section className="brand-banner">

                    <div className="brand-banner-text">

                        <span>SEU PRÓXIMO SABOR FAVORITO</span>

                        <h2>
                            Quando a fome chama,
                            <br />
                            a gente Arriva!
                        </h2>

                        <p>
                            Conectando você aos sabores que fazem seu dia melhor.
                        </p>

                    </div>

                    <img
                        src="/assets/logo/logo-arriva.png"
                        alt="Arriva - sua próxima experiência favorita"
                    />

                </section>

                {/* CATEGORIAS */}

                <section className="categories-section">

                    <div className="section-heading">

                        <div>
                            <h2>Explore as categorias</h2>

                            <p>
                                Escolha uma categoria e encontre seu próximo favorito.
                            </p>
                        </div>

                    </div>

                    <div className="categories-grid">

                        {categorias.map((categoria) => (

                            <button
                                key={categoria.nome}
                                className={`category-card ${
                                    categoriaSelecionada === categoria.nome
                                        ? "category-selected"
                                        : ""
                                }`}
                                onClick={() =>
                                    setCategoriaSelecionada(
                                        categoriaSelecionada === categoria.nome
                                            ? "Todas"
                                            : categoria.nome
                                    )
                                }
                                style={{ backgroundColor: categoria.cor }}
                            >

                                <img
                                    src={categoria.imagem}
                                    alt={categoria.nome}
                                />

                                <span>{categoria.nome}</span>

                            </button>

                        ))}

                    </div>

                </section>

                {/* PRODUTOS */}

                <section className="products-section" id="produtos">

                    <div className="section-heading">

                        <div>
                            <h2>Sabores para todos os momentos</h2>

                            <p>
                                Uma seleção de pratos, lanches e delícias das nossas categorias.
                            </p>
                        </div>

                        <span className="products-count">
                            {produtosFiltrados.length} opções disponíveis
                        </span>

                    </div>

                    {produtosFiltrados.length > 0 ? (

                        <div className="products-grid">

                            {produtosFiltrados.map((produto) => (

                                <article className="product-card" key={produto.nome}>

                                    <img
                                        className="product-image"
                                        src={produto.imagem}
                                        alt={produto.nome}
                                    />

                                    <div className="product-information">

                                        <h3>{produto.nome}</h3>

                                        <p className="product-description">
                                            {produto.categoria} · {produto.descricao}
                                        </p>

                                        <div className="product-bottom">

                                            <strong>
                                                R$ {produto.preco}
                                            </strong>

                                            <button
                                                className="add-product-button"
                                                aria-label={`Adicionar ${produto.nome}`}
                                            >
                                                <Plus />
                                            </button>

                                        </div>

                                    </div>

                                </article>

                            ))}

                        </div>

                    ) : (

                        <div className="empty-products">

                            <ShoppingBag />

                            <h3>Nenhum produto encontrado.</h3>

                            <p>Experimente pesquisar por outro sabor.</p>

                        </div>

                    )}

                </section>

                {/* RODAPÉ */}

                <footer className="home-footer">
                    <p>© 2026 Arriva. Todos os direitos reservados.</p>
                    <span>Feito para quem ama comer bem. 💜</span>
                </footer>

            </main>

            {/* FUNDO DO MENU MOBILE */}

            {menuAberto && (

                <button
                    className="sidebar-overlay"
                    onClick={() => setMenuAberto(false)}
                    aria-label="Fechar menu"
                />

            )}

        </div>

    );

}
