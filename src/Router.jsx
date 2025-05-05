import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./pages/Login";
import PaginaInicial from "./pages/PaginaInicial";
import CadastroPacientes from "./pages/Administrador/CadastroPacientes";
import RedirecionarLogin from "./services/RedirecionarLogin";
import CadastroFuncionarios from "./pages/Administrador/CadastroFuncionarios";
import Internacoes from "./pages/Administrador/Internacoes";
import Relatorios from "./pages/Administrador/Relatorios";
import AgendarConsulta from "./pages/Paciente/AgendarConsulta";
import ListagemConsultas from "./pages/Paciente/ListagemConsultas";
import Historico from "./pages/Paciente/Historico";
import Notificacoes from "./pages/Paciente/Notificacoes";
import Teleconsulta from "./pages/Paciente/Teleconsulta";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RedirecionarLogin />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<PaginaInicial />} path="/:tipo/home" />
        <>
          {/* Rotas de ADMINISTRADOR */}
          <Route
            element={<CadastroPacientes />}
            path="/:tipo/cadastro/pacientes"
          />
          <Route
            element={<CadastroFuncionarios />}
            path="/:tipo/cadastro/funcionarios"
          />
          <Route element={<Internacoes />} path="/:tipo/internacoes" />
          <Route element={<Relatorios />} path="/:tipo/relatorios" />
        </>
        <>
          {/* Rotas de PACIENTE */}
          <Route element={<AgendarConsulta />} path="/:tipo/consulta/agendar" />
          <Route
            element={<ListagemConsultas />}
            path="/:tipo/consulta/listagem"
          />
          <Route element={<Historico />} path="/:tipo/historico" />
          <Route element={<Notificacoes />} path="/:tipo/notificacoes" />
          <Route element={<Teleconsulta />} path="/:tipo/teleconsulta" />
        </>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
