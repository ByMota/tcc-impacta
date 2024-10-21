import { Routes, Route } from 'react-router-dom';
import App from './App';
import AlunoDefault from './pages/AlunoDefault';
import NotasFaltas from './pages/NotasFaltas';
import Financeiro from './pages/financeiro';
import Boletim from './pages/Boletim';




export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aluno" element={<AlunoDefault />} />
        <Route path="/notas-faltas" element={<NotasFaltas />} />
        <Route path="/notas-faltas/boletim" element={<Boletim />} />
        <Route path="/financeiro" element={<Financeiro />} />
      </Routes>
  );
};
