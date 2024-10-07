import { Routes, Route } from 'react-router-dom';
import App from './App';
import AlunoDefault from './pages/AlunoDefault';
import NotasFaltas from './pages/NotasFaltas';



export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aluno" element={<AlunoDefault />} />
        <Route path="/notas-faltas" element={<NotasFaltas />} />
      </Routes>
  );
};
