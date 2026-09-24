import { MOLDURA } from './moldura';

export default function Ecossistema() {
  return (
    <section className="bg-roxo text-white py-20 lg:py-32 relative overflow-hidden">
      {/* Moldura do Figma: 820,844px, traco 3px #FACC15. viewBox corrigido para 821 (o export vinha com 480x768 e cortava o desenho). */}
      {[
        { lado: 'direita', estilo: { right: '-341.344px', bottom: '-53.219px' }, espelhar: '' },
        { lado: 'esquerda', estilo: { left: '-341.344px', top: '-53.219px' }, espelhar: 'scale-[-1]' }
      ].map((m) => (
        <svg
          key={m.lado}
          aria-hidden="true"
          viewBox="0 0 821 821"
          width="820.844"
          height="820.844"
          fill="none"
          style={m.estilo}
          className={`pointer-events-none absolute hidden lg:block max-w-none ${m.espelhar}`}
        >
          <path d={MOLDURA} stroke="#FACC15" strokeWidth="3" />
        </svg>
      ))}

      <div className="section-shell relative z-10 text-center">
        <span className="inline-block px-5 py-2 rounded-full bg-secondary text-dark text-sm font-bold mb-8">
          Uma comunidade que cresce junto
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 max-w-3xl mx-auto leading-tight">
          Aqui, ensinar e aprender fazem parte da mesma jornada.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {[
            {
              titulo: 'Quem está começando',
              texto: 'Encontra espaço para praticar, errar, receber feedback e construir repertório profissional.',
              cor: 'bg-primary text-dark',
              icone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v7m0-7l6.16-3.42A12 12 0 0112 21a12 12 0 01-6.16-10.42L12 14z" />
            },
            {
              titulo: 'Quem já tem experiência',
              texto: 'Compartilha conhecimento, desenvolve liderança e pode aprender algo novo em outras áreas.',
              cor: 'bg-cyan text-dark',
              icone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            },
            {
              titulo: 'Quem busca talentos',
              texto: 'Se aproxima de uma comunidade de profissionais engajados, colaborativos e com experiência prática.',
              cor: 'bg-secondary text-dark',
              icone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            }
          ].map((card) => (
            <div key={card.titulo} className="bg-dark rounded-3xl p-8 shadow-lg">
              <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center ${card.cor}`}>
                <svg className="w-7 h-7 lg:w-9 lg:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">{card.icone}</svg>
              </div>
              <h3 className="text-lg font-bold mb-3">{card.titulo}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{card.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
