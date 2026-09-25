import { useState } from 'react';

// Números oficiais informados pela SouJunior.
const numeros = [
  { valor: '120+', texto: 'membros na comunidade' },
  { valor: '3+', texto: 'projetos em desenvolvimento' },
  { valor: '50+', texto: 'pessoas empregadas' },
  { valor: '35+', texto: 'mentores ativos' },
];

export default function BarraImpacto() {
  // No celular os números viram um carrossel: a seta volta ao início a
  // partir do último item, e avança para o último a partir do primeiro.
  const [indice, setIndice] = useState(0);

  const anterior = () => setIndice((i) => (i === 0 ? numeros.length - 1 : i - 1));
  const proximo = () => setIndice((i) => (i === numeros.length - 1 ? 0 : i + 1));

  return (
    <div id="impacto" className="bg-secondary py-5 md:py-8 border-y border-dark/10 overflow-hidden px-4">
      <div className="section-shell">
        {/* Celular: carrossel com um número por vez. Setas na borda e altura
            fixa no texto, para não pular quando a frase quebra em duas linhas. */}
        <div className="flex items-center justify-between gap-3 md:hidden">
          <button
            type="button"
            onClick={anterior}
            aria-label="Ver número anterior"
            className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-dark text-dark transition hover:bg-dark hover:text-secondary"
          >
            <svg width="7" height="12" viewBox="0 0 8 14" fill="none">
              <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex min-h-[40px] min-w-0 flex-1 items-center justify-center gap-2 text-center text-sm font-bold">
            <span className="text-2xl">{numeros[indice].valor}</span>
            <span>{numeros[indice].texto}</span>
          </div>

          <button
            type="button"
            onClick={proximo}
            aria-label="Ver próximo número"
            className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-dark text-dark transition hover:bg-dark hover:text-secondary"
          >
            <svg width="7" height="12" viewBox="0 0 8 14" fill="none">
              <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* A partir de md: todos os números lado a lado, como no design */}
        <div className="hidden md:flex flex-row flex-wrap justify-between items-center gap-6 lg:gap-8 text-sm font-bold text-left">
          {numeros.map((item) => (
            <div key={item.texto} className="flex items-center gap-2">
              <span className="text-xl">{item.valor}</span> {item.texto}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
