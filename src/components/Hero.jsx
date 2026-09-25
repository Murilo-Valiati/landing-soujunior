export default function Hero() {
  return (
    <section id="causa" className="relative section-shell py-12 md:py-20 lg:py-24">
      {/* Elipses de fundo do Figma */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 h-full w-screen -translate-x-1/2 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: "url('/fotos/hero-elipses.png')" }}
      />
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
            O júnior de hoje transforma o amanhã.
          </h1>
          <p className="mt-6 text-lg text-dark/70 font-medium">Toda carreira precisa de uma primeira oportunidade para acontecer.</p>
          <p className="mt-4 text-dark/70">Na SouJunior, profissionais desenvolvem experiência em projetos reais, aprendem com mentores e crescem ao lado de uma comunidade inteira. Com R$ 2 ou mais, você ajuda essa jornada a continuar.</p>
          <div className="mt-10 flex flex-col flex-wrap gap-4 sm:flex-row">
            <a
              href="https://apoia.se/soujunior"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-dark px-8 py-3.5 text-sm font-bold text-white transition hover:bg-dark/80 text-center w-full sm:w-auto"
            >
              Apoiar a partir de R$2
            </a>
            <a
              href="#impacto"
              className="rounded-full bg-secondary px-8 py-3.5 text-sm font-bold text-dark transition hover:bg-secondary/90 text-center w-full sm:w-auto"
            >
              Conheça nosso impacto
            </a>
          </div>
        </div>

        <div className="relative mt-4 flex w-full items-center justify-center lg:mt-0 lg:justify-end">
           {/* Composicao do hero exportada do Figma (fotos + formas + mascote) */}
           <img
             src="/fotos/hero-composicao.png"
             alt="Pessoas da comunidade SouJunior estudando e trabalhando, ao lado do mascote da SouJunior"
             className="relative mx-auto w-full max-w-[360px] object-contain lg:mx-0 lg:max-w-[553px]"
           />
        </div>
      </div>
    </section>
  );
}
