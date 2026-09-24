export default function BarraImpacto() {
  return (
    <div id="impacto" className="bg-secondary py-6 md:py-8 border-y border-dark/10 overflow-hidden px-4">
      <div className="section-shell flex flex-col md:flex-row flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-8 text-sm font-bold text-center md:text-left">
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-xl">[120]+</span> membros na comunidade
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-xl">[3]+</span> projetos em desenvolvimento
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-xl">[50]+</span> pessoas empregadas
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl md:text-xl">[35]+</span> mentores ativos
        </div>
      </div>
    </div>
  );
}
