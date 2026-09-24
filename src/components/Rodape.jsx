export default function Rodape() {
  return (
    <footer className="bg-dark text-white pt-20 pb-10 border-t border-white/10">
      <div className="section-shell">
        <div className="grid md:grid-cols-2 gap-10 items-start text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black leading-tight">
            O júnior de hoje<br/>transforma o amanhã.
          </h2>
          <p className="text-white/80 max-w-sm mx-auto md:mx-0 text-base leading-relaxed">
            Ajude a criar espaço para quem só precisa de uma oportunidade
            para mostrar o que sabe fazer.
          </p>
        </div>

        <div className="mt-12 border-t border-white/20 pt-10 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://apoia.se/soujunior"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-3 text-sm font-bold text-dark transition hover:bg-secondary/90"
            >
              Apoiar a partir de R$2 <span aria-hidden="true">→</span>
            </a>
            <a
              href="#impacto"
              className="inline-flex items-center justify-center rounded-full border border-secondary px-8 py-3 text-sm font-bold text-secondary transition hover:bg-secondary hover:text-dark"
            >
              Conheça nosso impacto
            </a>
          </div>

          <nav aria-label="Canais oficiais da SouJunior" className="flex flex-wrap justify-center lg:justify-end gap-6 lg:gap-8 lg:ml-auto text-sm font-medium text-secondary">
            {[
              ['Discord', 'https://discord.gg/soujunior'],
              ['LinkedIn', 'https://linkedin.com/company/soujunior'],
              ['GitHub', 'https://github.com/SouJunior'],
              ['Site', 'https://soujunior.tech']
            ].map(([nome, url]) => (
              <a
                key={nome}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <span aria-hidden="true" className="w-5 h-5 rounded-full border-2 border-secondary flex-shrink-0"></span>
                {nome}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-12 text-center text-xs text-white/40">
          SouJunior {new Date().getFullYear()} | Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}
