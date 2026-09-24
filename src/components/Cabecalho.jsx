import { useEffect, useState } from 'react';

const links = [
  { nome: 'causa', href: '#causa' },
  { nome: 'impacto', href: '#impacto' },
  { nome: 'planos', href: '#planos' },
];

export default function Cabecalho() {
  // O cabeçalho ganha fundo branco assim que a pessoa começa a rolar a página.
  const [rolou, setRolou] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 20);
    window.addEventListener('scroll', aoRolar);
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        rolou ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="section-shell flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-bold text-dark/70">
          {links.map((link) => (
            <a key={link.nome} href={link.href} className="hover:text-primary transition-colors">
              {link.nome}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-center font-black text-xl tracking-tight text-primary">
          <span className="text-2xl mr-1">❖</span> SouJunior
        </div>

        <div className="hidden md:flex">
          <a
            href="https://apoia.se/soujunior"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-dark px-6 py-2.5 text-sm font-bold text-white transition hover:bg-dark/80 whitespace-nowrap"
          >
            Apoiar a partir de R$2
          </a>
        </div>

        {/* Botão do menu no celular */}
        <button
          className="md:hidden p-2 text-dark"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuAberto ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Menu aberto no celular */}
      {menuAberto && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-dark/10 shadow-lg py-4 px-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.nome}
              href={link.href}
              className="text-lg font-bold text-dark"
              onClick={() => setMenuAberto(false)}
            >
              {link.nome}
            </a>
          ))}
          <a
            href="https://apoia.se/soujunior"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block rounded-full bg-dark px-6 py-3 text-center font-bold text-white"
          >
            Apoiar a partir de R$2
          </a>
        </div>
      )}
    </header>

  );
}
