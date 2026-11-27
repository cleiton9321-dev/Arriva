
import "./Authsidebar.css";

export default function AuthSidebar() {

    return (
        <aside className="auth-sidebar">

            {/* Logo principal no topo */}
            <div className="auth-logo">
                <img
                    src="/assets/logo/logo-arriva.png"
                    alt="Logo Arriva"
                />
            </div>

            {/* Mensagem de boas-vindas */}
            <div className="auth-welcome">

                <h2>
                    Bem-vindo ao Arriva!
                </h2>

                <p>
                    Seu próximo sabor favorito começa aqui.
                </p>

            </div>

            {/* Mascote e slogan na parte inferior */}
            <div className="auth-bottom">

                <img
                    src="/assets/imagens/mascote.png"
                    alt="Mascote camaleão do Arriva"
                />

                <p>
                    Quando a fome chama a gente Arriva!
                </p>

            </div>

        </aside>
    );
}
