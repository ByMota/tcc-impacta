import { Routes, Route } from 'react-router-dom';
import App from './App';
import AlunoDefault from './pages/alunoDefault';


export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aluno" element={<AlunoDefault />} />
      </Routes>
  );
};
