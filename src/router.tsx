import { Routes, Route } from 'react-router-dom';
import App from './App';
import AlunoDefault from './pages/AlunoDefault';



export default function AppRouter() {
  return (
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aluno" element={<AlunoDefault />} />
      </Routes>
  );
};
