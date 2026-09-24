const depoimentos = [
    {
      label: 'Mentoria',
      color: 'secondary',
      quote: 'A Sou Junior me desafia todos os dias com experiencias reais de trabalho: através da mentoria e do compromisso com o trabalho',
      name: 'Priscyla Antônio de A. Ribeiro',
      role: 'Mentora UX/UI Designer',
      photo: '/depoimentos/priscyla.jpg'
    },
    {
      label: 'Júnior',
      color: 'cyan',
      quote: 'Fui voluntário na Sou Junior e pude aprender sobre diversos aspectos da área de desenvolvimento e empregabilidade, o que acabou me auxiliando em processos seletivos, construção do perfil profissional e como ser encontrado pelos tech recruiters, até que após 6 meses de participação meu ‘sim’ chegou.',
      name: 'Anderson Nunes',
      role: 'Front-end',
      photo: '/depoimentos/anderson-nunes.jpg'
    },
    {
      label: 'Tech Recruiter',
      color: 'primary',
      quote: 'Eu conheci o projeto da SouJunior quando estava estudando para ter mais segurança na área, e comecei assistindo as lives e as trocas eram incríveis pra mim, me ajudavam muito a me desenvolver e eu senti que precisava retribuir de alguma forma, então resolvi me inscrever como voluntária e fico muito feliz que posso participar de um projeto incrível assim.',
      name: 'Bianca Alessandra',
      role: 'Tech Recruiter',
      photo: '/depoimentos/bianca-alessandra.jpg'
    }
  ];
export default function Depoimentos() {
  return (
    <section className="bg-dark text-white py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute top-10 left-4 text-[120px] md:text-[200px] leading-none font-serif text-primary/10 select-none">“</div>
      <div className="absolute bottom-10 right-4 text-[120px] md:text-[200px] leading-none font-serif text-primary/10 select-none rotate-180">“</div>

      <div className="section-shell relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-16 max-w-3xl mx-auto leading-tight">
          Por trás de cada projeto, existe uma carreira em construção.
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left items-stretch">
          {depoimentos.map((item, idx) => (
            <figure key={idx} className={`flex h-full flex-col border border-white/10 rounded-[32px] p-8 bg-white/5 relative shadow-lg ${item.color === 'cyan' ? 'border-cyan/30' : ''}`}>
              <span className={`absolute -top-3 left-8 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm ${item.color === 'secondary' ? 'bg-secondary text-dark' : item.color === 'cyan' ? 'bg-cyan text-dark' : 'bg-primary text-white'}`}>
                {item.label}
              </span>
              <blockquote className="text-sm text-white/70 mb-8 mt-4 leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-4">
                <img
                  src={item.photo}
                  alt={`Foto de ${item.name}`}
                  loading="lazy"
                  className="w-12 h-12 rounded-full border border-white/20 object-cover flex-shrink-0"
                />
                <div>
                  <p className="font-bold text-sm text-white">{item.name}</p>
                  <p className="text-xs text-white/50">{item.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
