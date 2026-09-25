// Valores e contrapartidas conforme as recompensas publicadas no Apoia.se oficial.
const planos = [
  {
    valor: 'R$ 2 ou mais',
    beneficio: 'Acesso ao grupo e aos projetos da SouJunior',
    destaque: false,
  },
  {
    valor: 'R$ 5 ou mais',
    beneficio: 'Guia Iniciante em TI — material exclusivo para apoiadores',
    destaque: false,
  },
  {
    valor: 'R$ 9 ou mais',
    beneficio: 'Participação nos hackathons oficiais da SouJunior',
    destaque: true,
  },
];

export default function PlanosApoio() {
  return (
    <section id="planos-apoio" className="bg-dark py-20 text-white lg:py-32">
      <div className="section-shell text-center">
        <h2 className="text-4xl font-black leading-tight md:text-5xl">Escolha como apoiar</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/70">
          Cada nível oferece um retorno diferente — e todo apoio contribui para
          manter a SouJunior funcionando.
        </p>

        <ul className="mt-14 grid gap-6 text-left md:grid-cols-3">
          {planos.map((plano) => (
            <li
              key={plano.valor}
              className={`flex flex-col rounded-[28px] border p-8 ${
                plano.destaque ? 'border-secondary bg-secondary/10' : 'border-white/15 bg-white/5'
              }`}
            >
              {plano.destaque && (
                <span className="mb-4 self-start rounded-full bg-secondary px-3 py-1 text-xs font-bold text-dark">
                  Apoio recomendado
                </span>
              )}
              <p className="text-2xl font-black text-secondary">{plano.valor}</p>
              <p className="mt-4 leading-relaxed text-white/80">{plano.beneficio}</p>
            </li>
          ))}
        </ul>

        <a
          href="https://apoia.se/soujunior"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex rounded-full bg-secondary px-10 py-4 text-sm font-bold text-dark transition hover:bg-secondary/90"
        >
          Apoiar no Apoia.se
        </a>

        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/50">
          A participação nas atividades da SouJunior é gratuita. Apoiar é uma forma
          voluntária de contribuir para que esse espaço continue aberto para quem
          está começando.
        </p>
      </div>
    </section>
  );
}
