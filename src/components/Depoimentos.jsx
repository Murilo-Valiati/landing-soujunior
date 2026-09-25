const depoimentos = [
    {
      label: 'Mentoria',
      tag: 'bg-secondary text-dark',
      quote: 'A Sou Junior me desafia todos os dias com experiencias reais de trabalho: através da mentoria e do compromisso com o trabalho',
      name: 'Priscyla Antônio de A. Ribeiro',
      role: 'Mentora UX/UI Designer',
      photo: '/depoimentos/priscyla.jpg'
    },
    {
      label: 'Júnior',
      tag: 'bg-cyan text-dark',
      quote: 'Fui voluntário na Sou Junior e pude aprender sobre diversos aspectos da área de desenvolvimento e empregabilidade, o que acabou me auxiliando em processos seletivos, construção do perfil profissional e como ser encontrado pelos tech recruiters, até que após 6 meses de participação meu ‘sim’ chegou.',
      name: 'Anderson Nunes',
      role: 'Front-end',
      photo: '/depoimentos/anderson-nunes.jpg'
    },
    {
      label: 'Tech Recruiter',
      tag: 'bg-roxo text-white',
      quote: 'Eu conheci o projeto da SouJunior quando estava estudando para ter mais segurança na área, e comecei assistindo as lives e as trocas eram incríveis pra mim, me ajudavam muito a me desenvolver e eu senti que precisava retribuir de alguma forma, então resolvi me inscrever como voluntária e fico muito feliz que posso participar de um projeto incrível assim.',
      name: 'Bianca Alessandra',
      role: 'Tech Recruiter',
      photo: '/depoimentos/bianca-alessandra.jpg'
    }
  ];
export default function Depoimentos() {
  return (
    <section className="relative overflow-hidden bg-dark py-20 text-white lg:py-32">
      {/* Aspas do Figma: 356x291, traço roxo. A de baixo sangra no canto direito. */}
      <img
        src="/formas/aspas.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-8 top-[10%] z-0 w-28 max-w-none select-none sm:-left-12 sm:w-40 md:-left-24 md:w-[356px]"
      />
      <img
        src="/formas/aspas.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-6 -right-8 z-0 w-28 max-w-none rotate-180 select-none sm:-bottom-10 sm:-right-12 sm:w-40 md:-bottom-32 md:-right-28 md:w-[356px]"
      />

      <div className="section-shell relative z-10">
        <div className="text-center">
          <span className="inline-block rounded-full border border-roxo px-5 py-2 text-sm font-medium">
            Histórias que já começaram
          </span>
          <h2 className="mx-auto mt-8 max-w-3xl text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
            Por trás de cada projeto, existe uma carreira em construção.
          </h2>
        </div>

        <div className="mt-14 grid gap-8 text-left md:grid-cols-3">
          {depoimentos.map((item) => (
            <figure
              key={item.name}
              className="flex h-full flex-col relative z-10 rounded-[28px] border border-cyan/60 bg-[#0a0a0a] p-7"
            >
              <span className={`self-start rounded-full px-4 py-1.5 text-xs font-bold ${item.tag}`}>
                {item.label}
              </span>

              <blockquote className="mt-7 text-sm leading-relaxed text-white/80">
                {item.quote}
              </blockquote>

              <figcaption className="mt-auto flex items-end justify-between gap-4 pt-8">
                <div className="flex items-center gap-3">
                  <img
                    src={item.photo}
                    alt={`Foto de ${item.name}`}
                    loading="lazy"
                    className="h-12 w-12 flex-shrink-0 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-bold leading-tight">{item.name}</p>
                    <p className="text-xs text-white/50">{item.role}</p>
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
