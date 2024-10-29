import { Routes, Route } from 'react-router-dom';
import AlunoDefault from './pages/AlunoDefault';
import NotasFaltas from './pages/NotasFaltas';
import Financeiro from './pages/Financeiro';
import Boletim from './pages/Boletim';
import { Login } from './pages/Login';
import Requerimento from './pages/Requerimentos';
import Layout from './components/layout';




export default function AppRouter() {
  return (
    <Routes>
    {/* Rota de Login fora do layout */}
    <Route path="/" element={<Login />} />
    
    {/* Rotas com o layout padrão */}
    <Route
      element={<Layout />}
    >
      <Route path="/aluno" element={<AlunoDefault />} />
      <Route path="/notas-faltas" element={<NotasFaltas />} />
      <Route path="/notas-faltas/boletim" element={<Boletim />} />
      <Route path="/financeiro" element={<Financeiro />} />
      <Route path="/requerimento" element={<Requerimento />} />
    </Route>
  </Routes>
  );
};
