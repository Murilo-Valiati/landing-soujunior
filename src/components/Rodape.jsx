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
              {
                nome: 'Discord',
                url: 'https://discord.com/invite/FkBcf3vdQZ',
                caminho: 'M20.317 4.369a19.79 19.79 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.249a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.036A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.009c.12.099.246.198.373.292a.077.077 0 01-.006.127 12.3 12.3 0 01-1.873.891.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.029zM8.02 15.331c-1.182 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z',
              },
              {
                nome: 'LinkedIn',
                url: 'https://linkedin.com/company/soujunior',
                caminho: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
              },
              {
                nome: 'GitHub',
                url: 'https://github.com/SouJunior',
                caminho: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
              },
              {
                nome: 'Site',
                url: 'https://www.soujunior.tech/',
                caminho: 'M12 2a10 10 0 100 20 10 10 0 000-20zm0 2c1.3 0 2.5 2.1 3 5H9c.5-2.9 1.7-5 3-5zM4.3 10h3.4a22 22 0 000 4H4.3a8 8 0 010-4zm5.4 0h4.6a20 20 0 010 4H9.7a20 20 0 010-4zm6.6 0h3.4a8 8 0 010 4h-3.4a22 22 0 000-4zM9 16h6c-.5 2.9-1.7 5-3 5s-2.5-2.1-3-5z',
              },
            ].map((canal) => (
              <a
                key={canal.nome}
                href={canal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition hover:text-white"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 flex-shrink-0 fill-current">
                  <path d={canal.caminho} />
                </svg>
                {canal.nome}
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
