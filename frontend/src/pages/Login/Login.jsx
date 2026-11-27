
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import AuthSidebar from "../../components/Authsidebar";
import "./Login.css";

export default function Login() {

    // Controla a visualização da senha
    const [mostrarSenha, setMostrarSenha] = useState(false);

    return (
        <div className="auth-layout">

            {/* Menu lateral compartilhado */}
            <AuthSidebar />

            {/* Área principal */}
            <main className="auth-main">

                {/* Links superiores */}
                <div className="auth-topbar">

                    <a href="/login">
                        ← Voltar ao início
                    </a>

                    <a href="mailto:suporte@arriva.com">
                        Precisa de ajuda?
                    </a>

                </div>

                {/* Formulário */}
                <section className="auth-content">

                    <p className="auth-eyebrow">
                        Sua conta Arriva
                    </p>

                    <h1>
                        Que bom ter você de volta!
                    </h1>

                    <p className="auth-description">
                        Entre para pedir seus favoritos e
                        descobrir novos sabores.
                    </p>

                    <form
                        className="auth-form"
                        onSubmit={(event) => event.preventDefault()}
                    >

                        {/* E-mail */}
                        <div className="auth-field">

                            <label htmlFor="email">
                                E-mail
                            </label>

                            <input
                                type="email"
                                id="email"
                                placeholder="seuemail@exemplo.com"
                                required
                            />

                        </div>

                        {/* Senha */}
                        <div className="auth-field">

                            <label htmlFor="senha">
                                Senha
                            </label>

                            <div className="login-password">

                                <input
                                    type={mostrarSenha ? "text" : "password"}
                                    id="senha"
                                    placeholder="Digite sua senha"
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

                        {/* Opções da conta */}
                        <div className="login-options">

                            <label className="remember-option">
                                <input type="checkbox" />
                                <span>Manter conectado</span>
                            </label>

                            <a href="/recuperar-senha" className="auth-link">
                                Esqueci minha senha
                            </a>

                        </div>

                        {/* Entrar */}
                        <button
                            type="submit"
                            className="auth-primary-button"
                        >
                            Entrar
                        </button>

                    </form>

                    {/* Separador */}
                    <div className="login-divider">
                        <span></span>
                        <p>ou entre com outra conta</p>
                        <span></span>
                    </div>

                    {/* Acessos alternativos */}
                    <div className="social-buttons">

                        <button type="button">
                            Continuar com Google
                        </button>

                        <button type="button">
                            Continuar com Apple
                        </button>

                    </div>

                    {/* Cadastro */}
                    <div className="login-register">

                        <p>Ainda não tem uma conta?</p>

                        <a href="/cadastro" className="auth-link">
                            Cadastre-se
                        </a>

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
