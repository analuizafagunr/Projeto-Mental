import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './componets/Menu';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Exercicios from './pages/Exercicios';
import Recursos from './pages/Recursos';
import Contato from './pages/Contato';
import Footer from './componets/Footer';

const Router = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/exercicios" element={<Exercicios />} />
        <Route path="/recursos" element={<Recursos />} /> {/* Coloca a página Depoimentos após a página Exercicios */}
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer content="Desenvolvido por Ana ♡" />
    </BrowserRouter>
  );
};

export default Router;