// Números oficiais informados pela SouJunior.
const numeros = [
  { valor: '120+', texto: 'membros na comunidade' },
  { valor: '3+', texto: 'projetos em desenvolvimento' },
  { valor: '50+', texto: 'pessoas empregadas' },
  { valor: '35+', texto: 'mentores ativos' },
];

export default function BarraImpacto() {
  return (
    <div id="impacto" className="bg-secondary py-6 md:py-8 border-y border-dark/10 overflow-hidden px-4">
      <div className="section-shell flex flex-col md:flex-row flex-wrap justify-center lg:justify-between items-center gap-6 lg:gap-8 text-sm font-bold text-center md:text-left">
        {numeros.map((item) => (
          <div key={item.texto} className="flex items-center gap-2">
            <span className="text-2xl md:text-xl">{item.valor}</span> {item.texto}
          </div>
        ))}
      </div>
    </div>
  );
}
