import Cabecalho from './components/Cabecalho';
import Hero from './components/Hero';
import BarraImpacto from './components/BarraImpacto';
import Problema from './components/Problema';
import OQueTornaPossivel from './components/OQueTornaPossivel';
import Ecossistema from './components/Ecossistema';
import FaixaFrase from './components/FaixaFrase';
import Depoimentos from './components/Depoimentos';
import Contribuicao from './components/Contribuicao';
import Transparencia from './components/Transparencia';
import PlanosApoio from './components/PlanosApoio';
import Faq from './components/Faq';
import Rodape from './components/Rodape';

// A ordem das seções segue o wireframe aprovado pelo time.
export default function App() {
  return (
    <div className="min-h-screen bg-light text-dark font-sans overflow-x-hidden selection:bg-primary selection:text-white">
      <Cabecalho />

      <main className="pt-24 md:pt-32 relative">
        <Hero />
        <BarraImpacto />
        <Problema />
        <OQueTornaPossivel />
        <Ecossistema />
        <FaixaFrase />
        <Depoimentos />
        <Contribuicao />
        <Transparencia />
        <PlanosApoio />
        <Faq />
      </main>

      <Rodape />
    </div>
  );
}
