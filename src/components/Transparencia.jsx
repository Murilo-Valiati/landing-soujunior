const servicos = ['AWS', 'Vultr', 'DigitalOcean', 'Domínio'];

export default function Transparencia() {
  return (
    <section id="transparencia" className="relative overflow-hidden bg-light py-20 lg:py-32">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-10 h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-24 lg:items-center">
        <div>
          <h2 className="text-4xl font-black leading-tight md:text-5xl">
            Para onde vai o{' '}<span className="text-primary">seu apoio</span>
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-dark/70">
            Seu apoio ajuda a manter a infraestrutura que faz a SouJunior acontecer.
            Em 2026, já foram R$ 1.849,59 em custos com serviços como AWS, Vultr,
            DigitalOcean e domínio.
          </p>
          <p className="mt-6 max-w-lg border-l-4 border-secondary pl-5 leading-relaxed text-dark/70">
            É essa estrutura que mantém a comunidade, os projetos e as iniciativas
            da SouJunior funcionando para quem está começando.
          </p>
        </div>

        <div className="rounded-[32px] bg-dark p-8 text-white shadow-xl md:p-10">
          <p className="text-sm font-bold uppercase tracking-wide text-secondary">
            Infraestrutura em 2026
          </p>
          <p className="mt-3 text-3xl font-black leading-none sm:text-4xl md:text-6xl">R$ 1.849,59</p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {servicos.map((servico) => (
              <li
                key={servico}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/80"
              >
                {servico}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-white/70">
            A partir de R$ 2, você também pode ajudar a manter esse movimento.
          </p>
          <a
            href="https://apoia.se/soujunior"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-secondary px-8 py-3 text-sm font-bold text-dark transition hover:bg-secondary/90"
          >
            Apoiar no Apoia.se
          </a>
        </div>
      </div>
    </section>
  );
}
