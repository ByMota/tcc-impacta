import { Routes, Route } from 'react-router-dom';
import AlunoDefault from './pages/AlunoDefault';
import NotasFaltas from './pages/NotasFaltas';
import Financeiro from './pages/Financeiro';
import Boletim from './pages/Boletim';
import { Login } from './pages/Login';




export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/aluno" element={<AlunoDefault />} />
        <Route path="/notas-faltas" element={<NotasFaltas />} />
        <Route path="/notas-faltas/boletim" element={<Boletim />} />
        <Route path="/financeiro" element={<Financeiro />} />
      </Routes>
  );
};
