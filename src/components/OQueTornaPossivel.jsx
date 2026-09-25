export default function OQueTornaPossivel() {
  return (
    <section className="py-20 lg:py-32 radial-glow-yellow">
      <div className="section-shell grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="text-center lg:text-left">
          <div className="relative mx-auto mb-10 w-full max-w-[456px] lg:mx-0">
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
          <p className="mx-auto max-w-md leading-relaxed text-dark/70 lg:mx-0">
            <strong className="text-dark">Aprender significa colocar a mão na massa.</strong>{' '}
            Projetos reais, mentoria e comunidade criam um espaço onde profissionais
            podem praticar, evoluir e construir experiência juntos.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-14 lg:mt-0 lg:gap-10">
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
            <div key={card.titulo} className="relative lg:pl-9">
              <div className={`relative w-full min-w-0 rounded-[28px] border-2 bg-white/60 px-6 pb-6 pt-10 text-center lg:py-9 lg:pl-[76px] lg:pr-10 lg:text-left ${card.borda}`}>
                {/* No celular o ícone fica dentro do card (40x40). No desktop ele sobe
                    para 72x72 e monta sobre a borda esquerda, como no Figma. */}
                <div className={`absolute left-1/2 top-0 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl shadow-md ${card.fundoIcone} lg:left-0 lg:top-1/2 lg:h-[72px] lg:w-[72px] lg:rounded-2xl`}>
                  <svg className="h-5 w-5 lg:h-9 lg:w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">{card.icone}</svg>
                </div>
                <h3 className="mb-2 text-xl font-bold md:text-2xl">{card.titulo}</h3>
                <p className="text-sm leading-relaxed text-dark/70 md:text-base">
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
