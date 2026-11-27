import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import RecuperarSenha from "./pages/RecuperarSenha/RecuperarSenha";
import Home from "./pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Tela inicial */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />

        {/* Cadastro */}
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Redirecionamento para páginas inexistentes */}
        <Route path="*" element={<Navigate to="/login" replace />} />

        <Route path="/recuperar-senha" element={<RecuperarSenha />} />

        {/* Página inicial do Arriva */}
<Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
