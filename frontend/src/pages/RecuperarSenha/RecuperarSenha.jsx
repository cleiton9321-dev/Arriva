
import { useState } from "react";
import { Mail } from "lucide-react";

import AuthSidebar from "../../components/Authsidebar";
import "./RecuperarSenha.css";

export default function RecuperarSenha() {

    // Armazena o e-mail digitado pelo usuário
    const [email, setEmail] = useState("");

    // Controla a mensagem de confirmação
    const [enviado, setEnviado] = useState(false);

    // Processa o formulário
    function handleSubmit(event) {
        event.preventDefault();

        // Nesta etapa, apenas exibimos uma confirmação visual.
        // O envio real do e-mail será implementado posteriormente.
        setEnviado(true);
    }

    return (
        <div className="auth-layout">

            {/* Barra lateral compartilhada */}
            <AuthSidebar />

            <main className="auth-main">

                {/* Navegação superior */}
                <div className="auth-topbar">

                    <a href="/login">
                        ← Voltar ao início
                    </a>

                    <a href="#ajuda">
                        Precisa de ajuda?
                    </a>

                </div>

                {/* Conteúdo da recuperação */}
                <section className="auth-content recovery-content">

                    {/* Ícone de envelope */}
                    <div className="recovery-icon">
                        <Mail />
                    </div>

                    <p className="auth-eyebrow">
                        Recuperar acesso
                    </p>

                    <h1>
                        Esqueceu sua senha?
                    </h1>

                    <p className="auth-description">
                        Sem problemas. Informe seu e-mail para
                        receber um link e criar uma nova senha.
                    </p>

                    {/* Formulário */}
                    <form
                        className="auth-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="auth-field">

                            <label htmlFor="recovery-email">
                                E-mail cadastrado
                            </label>

                            <input
                                type="email"
                                id="recovery-email"
                                placeholder="seuemail@exemplo.com"
                                value={email}
                                onChange={(event) => {
                                    setEmail(event.target.value);
                                    setEnviado(false);
                                }}
                                required
                            />

                        </div>

                        <button
                            type="submit"
                            className="auth-primary-button"
                        >
                            Enviar link de recuperação
                        </button>

                    </form>

                    {/* Mensagem de confirmação */}
                    {enviado && (
                        <div className="recovery-success">
                            Solicitação registrada visualmente!
                            O envio real do e-mail será conectado
                            posteriormente.
                        </div>
                    )}

                    {/* Voltar ao login */}
                    <div className="recovery-back">

                        <a href="/login" className="auth-link">
                            ← Voltar para o login
                        </a>

                    </div>

                    {/* Caixa de ajuda */}
                    <div className="recovery-help">

                        <strong>
                            Não encontrou o e-mail?
                        </strong>

                        <p>
                            Confira também sua caixa de spam ou
                            tente outro endereço.
                        </p>

                    </div>

                </section>

                {/* Rodapé */}
                <footer className="auth-footer">

                    <a href="#privacidade">Privacidade</a>

                    <a href="#termos">Termos de uso</a>

                </footer>

            </main>

        </div>
    );
}
