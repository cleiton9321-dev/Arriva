
import { useState } from "react";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AuthSidebar from "../../components/Authsidebar";
import "./Cadastro.css";

export default function Cadastro() {
// Permite navegar entre as páginas
const navigate = useNavigate();
    // Controla a etapa atual
    const [etapa, setEtapa] = useState(1);

    // Controla a visualização das senhas
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);

    // Guarda os dados pessoais
    const [dados, setDados] = useState({
        nome: "",
        email: "",
        telefone: "",
        senha: "",
        confirmarSenha: ""
    });

    // Preferências de acessibilidade
    const [daltonico, setDaltonico] = useState("sim");
    const [tipoDaltonismo, setTipoDaltonismo] = useState("deuteranopia");

    // Controla a conclusão
    const [concluido, setConcluido] = useState(false);

    // Atualiza os dados digitados
    function atualizarDados(event) {
        const { name, value } = event.target;

        setDados({
            ...dados,
            [name]: value
        });
    }

    // Avança para a etapa de acessibilidade
    function avancarEtapa(event) {
        event.preventDefault();

        if (dados.senha !== dados.confirmarSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        setEtapa(2);
    }

  // Finaliza o cadastro e direciona para a página inicial
function finalizarCadastro() {
    navigate("/home", { replace: true });
}

    return (

        <div className="auth-layout">

            <AuthSidebar />

            <main className="auth-main">

                <div className="auth-topbar">

                    <a href="/login">← Voltar ao início</a>

                    <a href="#ajuda">Precisa de ajuda?</a>

                </div>

                <section className="auth-content cadastro-content">

                    {/* BARRA DE PROGRESSO */}

                    <div className="cadastro-progress">

                        <div className="progress-info">

                            <span>Etapa {etapa} de 2</span>

                            <span>
                                {etapa === 1
                                    ? "Dados pessoais"
                                    : "Acessibilidade"}
                            </span>

                        </div>

                        <div className="progress-track">

                            <div className={`progress-fill etapa-${etapa}`} />

                        </div>

                    </div>

                    {/* ==================================
                        ETAPA 1 - DADOS PESSOAIS
                    ================================== */}

                    {etapa === 1 && (

                        <>

                            <p className="auth-eyebrow">
                                FAÇA PARTE DO ARRIVA
                            </p>

                            <h1>Seu próximo favorito espera.</h1>

                            <p className="auth-description">
                                Crie sua conta. É rápido, fácil e do seu jeito.
                            </p>

                            <form className="auth-form" onSubmit={avancarEtapa}>

                                <div className="auth-field">

                                    <label htmlFor="nome">Nome completo</label>

                                    <input
                                        id="nome"
                                        name="nome"
                                        type="text"
                                        placeholder="Como podemos chamar você?"
                                        value={dados.nome}
                                        onChange={atualizarDados}
                                        required
                                    />

                                </div>

                                <div className="auth-field">

                                    <label htmlFor="cadastro-email">E-mail</label>

                                    <input
                                        id="cadastro-email"
                                        name="email"
                                        type="email"
                                        placeholder="seuemail@exemplo.com"
                                        value={dados.email}
                                        onChange={atualizarDados}
                                        required
                                    />

                                </div>

                                <div className="auth-field">

                                    <label htmlFor="telefone">Telefone</label>

                                    <input
                                        id="telefone"
                                        name="telefone"
                                        type="tel"
                                        placeholder="(11) 99999-9999"
                                        value={dados.telefone}
                                        onChange={atualizarDados}
                                        required
                                    />

                                </div>

                                <div className="auth-field">

                                    <label htmlFor="cadastro-senha">Senha</label>

                                    <div className="cadastro-password">

                                        <input
                                            id="cadastro-senha"
                                            name="senha"
                                            type={mostrarSenha ? "text" : "password"}
                                            placeholder="Crie uma senha segura"
                                            minLength="8"
                                            value={dados.senha}
                                            onChange={atualizarDados}
                                            required
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setMostrarSenha(!mostrarSenha)}
                                            aria-label="Mostrar ou ocultar senha"
                                        >
                                            {mostrarSenha ? <EyeOff /> : <Eye />}
                                        </button>

                                    </div>

                                </div>

                                <div className="auth-field">

                                    <label htmlFor="confirmar-senha">
                                        Confirmar senha
                                    </label>

                                    <div className="cadastro-password">

                                        <input
                                            id="confirmar-senha"
                                            name="confirmarSenha"
                                            type={mostrarConfirmacao ? "text" : "password"}
                                            placeholder="Digite sua senha novamente"
                                            minLength="8"
                                            value={dados.confirmarSenha}
                                            onChange={atualizarDados}
                                            required
                                        />

                                        <button
                                            type="button"
                                            onClick={() => setMostrarConfirmacao(!mostrarConfirmacao)}
                                            aria-label="Mostrar ou ocultar confirmação"
                                        >
                                            {mostrarConfirmacao ? <EyeOff /> : <Eye />}
                                        </button>

                                    </div>

                                </div>

                                <p className="password-tip">
                                    Use pelo menos 8 caracteres, com letras e números.
                                </p>

                                <p className="terms-text">
                                    Ao criar sua conta, você concorda com os
                                    <a href="#termos"> Termos de uso </a>
                                    e a
                                    <a href="#privacidade"> Política de privacidade </a>
                                    do Arriva.
                                </p>

                                <button
                                    type="submit"
                                    className="auth-primary-button"
                                >
                                    Continuar
                                </button>

                            </form>

                            <div className="cadastro-login">

                                <p>Já tem uma conta?</p>

                                <a href="/login" className="auth-link">
                                    Entrar
                                </a>

                            </div>

                        </>

                    )}

                    {/* ==================================
                        ETAPA 2 - ACESSIBILIDADE
                    ================================== */}

                    {etapa === 2 && !concluido && (

                        <div className="accessibility-content">

                            <p className="auth-eyebrow">
                                PERSONALIZE SUA EXPERIÊNCIA
                            </p>

                            <h1>
                                Acessibilidade também importa.
                            </h1>

                            <p className="auth-description">
                                Queremos tornar sua experiência no Arriva
                                mais confortável e acessível.
                            </p>

                            {/* Pergunta sobre daltonismo */}

                            <div className="accessibility-question">

                                <label className="accessibility-title">
                                    Você é daltônico(a)?
                                </label>

                                <div className="accessibility-options">

                                    <label className="accessibility-option">

                                        <input
                                            type="radio"
                                            name="daltonico"
                                            value="sim"
                                            checked={daltonico === "sim"}
                                            onChange={() => setDaltonico("sim")}
                                        />

                                        <span>Sim, sou daltônico(a).</span>

                                    </label>

                                    <label className="accessibility-option">

                                        <input
                                            type="radio"
                                            name="daltonico"
                                            value="nao"
                                            checked={daltonico === "nao"}
                                            onChange={() => setDaltonico("nao")}
                                        />

                                        <span>Não.</span>

                                    </label>

                                    <label className="accessibility-option">

                                        <input
                                            type="radio"
                                            name="daltonico"
                                            value="prefiro"
                                            checked={daltonico === "prefiro"}
                                            onChange={() => setDaltonico("prefiro")}
                                        />

                                        <span>Prefiro não informar.</span>

                                    </label>

                                </div>

                            </div>

                            {/* Seleção do tipo */}

                            {daltonico === "sim" && (

                                <div className="colorblind-types">

                                    <label className="accessibility-title">
                                        Qual tipo de daltonismo você possui?
                                    </label>

                                    <p className="accessibility-description">
                                        Selecione uma das opções abaixo.
                                    </p>

                                    <div className="accessibility-options">

                                        {[
                                            ["protanopia", "Protanopia", "Alteração na percepção do vermelho."],
                                            ["deuteranopia", "Deuteranopia", "Alteração na percepção do verde."],
                                            ["tritanopia", "Tritanopia", "Alteração na percepção do azul e amarelo."],
                                            ["acromatopsia", "Acromatopsia", "Percepção de cores muito limitada ou ausente."],
                                            ["nao-sei", "Não sei identificar", "Não conheço meu tipo de daltonismo."]
                                        ].map(([valor, titulo, descricao]) => (

                                            <label
                                                key={valor}
                                                className={`accessibility-option type-option ${tipoDaltonismo === valor ? "selected" : ""}`}
                                            >

                                                <input
                                                    type="radio"
                                                    name="tipoDaltonismo"
                                                    value={valor}
                                                    checked={tipoDaltonismo === valor}
                                                    onChange={() => setTipoDaltonismo(valor)}
                                                />

                                                <span className="type-text">

                                                    <strong>{titulo}</strong>

                                                    <small>{descricao}</small>

                                                </span>

                                            </label>

                                        ))}

                                    </div>

                                </div>

                            )}

                            {/* Botões de navegação */}

                            <div className="cadastro-actions">

                                <button
                                    type="button"
                                    className="auth-secondary-button"
                                    onClick={() => setEtapa(1)}
                                >
                                    Voltar
                                </button>

                                <button
                                    type="button"
                                    className="auth-primary-button"
                                    onClick={finalizarCadastro}
                                >
                                    Finalizar cadastro
                                </button>

                            </div>

                            <p className="accessibility-privacy">
                                Suas preferências serão utilizadas para
                                personalizar a experiência visual do Arriva.
                            </p>

                        </div>

                    )}

                    {/* ==================================
                        TELA DE CONCLUSÃO
                    ================================== */}

                    {concluido && (

                        <div className="cadastro-success">

                            <CheckCircle size={55} />

                            <h1>Tudo pronto!</h1>

                            <p>
                                Obrigado por fazer parte do Arriva!
                            </p>

                            <button
                                className="auth-primary-button"
                                onClick={() => window.location.href = "/login"}
                            >
                                Ir para o login
                            </button>

                        </div>

                    )}

                </section>

                <footer className="auth-footer">

                    <a href="#privacidade">Privacidade</a>

                    <a href="#termos">Termos de uso</a>

                </footer>

            </main>

        </div>

    );
}
