export default function OQueTornaPossivel() {
  return (
    <section className="py-20 lg:py-32 radial-glow-yellow">
      <div className="section-shell grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="text-center lg:text-left order-2 lg:order-1">
          <div className="relative w-full max-w-md mx-auto lg:mx-0 mb-10">
            {/* Elipses desfocadas que ficam atrás da imagem, como no Figma */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[18%] top-[32%] h-[302px] w-[302px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary opacity-25 blur-[100px]"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-[79%] top-1/2 h-[371px] w-[371px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-primary to-cyan opacity-25 blur-[100px]"
            />
            <img
              src="/fotos/mentoria-composicao.png"
              alt="Mentora acompanhando uma pessoa júnior durante um projeto, ao lado do mascote da SouJunior"
              className="relative w-full object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-primary leading-tight mb-6">
            O que a SouJunior{' '}<br className="hidden md:block"/>torna possível
          </h2>
          <p className="text-dark/70 leading-relaxed max-w-md mx-auto lg:mx-0">
            <strong className="text-dark">Aprender significa colocar a mão na massa.</strong>{' '}
            Projetos reais, mentoria e comunidade criam um espaço onde profissionais
            podem praticar, evoluir e construir experiência juntos.
          </p>
        </div>

        <div className="flex flex-col gap-10 order-1 lg:order-2">
          {[
            {
              titulo: 'Projetos reais',
              destaque: 'Para quem está começando, estudar é apenas parte do caminho.',
              texto: 'O desafio aparece quando chega a hora de trabalhar em equipe, receber feedback, lidar com processos e transformar conhecimento em entregas reais.',
              borda: 'border-primary',
              fundoIcone: 'bg-primary text-white',
              icone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            },
            {
              titulo: 'Mentoria',
              destaque: 'Aprender com quem já percorreu esse caminho.',
              texto: 'Mentores compartilham experiências, oferecem direcionamento e ajudam a encurtar a curva de aprendizado.',
              borda: 'border-roxo',
              fundoIcone: 'bg-roxo text-white',
              icone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            },
            {
              titulo: 'Comunidade',
              destaque: 'Ninguém precisa crescer sozinho.',
              texto: 'Trocas, feedbacks e networking aproximam profissionais em diferentes momentos da carreira.',
              borda: 'border-secondary',
              fundoIcone: 'bg-secondary text-dark',
              icone: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            }
          ].map((card) => (
            <div key={card.titulo} className="relative flex flex-col items-center gap-4 text-center lg:block lg:pl-9 lg:text-left">
              <div className={`w-14 h-14 lg:w-[72px] lg:h-[72px] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md ${card.fundoIcone} lg:absolute lg:left-9 lg:top-1/2 lg:z-10 lg:-translate-x-1/2 lg:-translate-y-1/2`}>
                <svg className="w-7 h-7 lg:w-9 lg:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">{card.icone}</svg>
              </div>
              <div className={`w-full min-w-0 rounded-[28px] border-2 bg-white/60 px-6 py-6 lg:py-9 lg:pl-[76px] lg:pr-10 ${card.borda}`}>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{card.titulo}</h3>
                <p className="text-sm md:text-base text-dark/70 leading-relaxed">
                  <strong className="text-dark">{card.destaque}</strong> {card.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
