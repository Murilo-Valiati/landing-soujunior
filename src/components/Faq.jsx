import { MOLDURA } from './moldura';

const faqs = [
    { q: "Posso apoiar com apenas R$2?", a: "Sim! Qualquer valor, a partir de R$ 2, ajuda a manter a infraestrutura no ar para que os projetos continuem acontecendo." },
    { q: "Preciso fazer parte da SouJunior para apoiar?", a: "Não. Qualquer pessoa ou empresa que acredita na inserção de novos talentos no mercado pode contribuir." },
    { q: "Como minha contribuição é utilizada?", a: "Os valores são utilizados para manter servidores (AWS, Vultr, DigitalOcean), domínio e outras ferramentas que a comunidade usa diariamente." },
    { q: "Posso apoiar de outras maneiras?", a: "Sim! Você pode ser mentor, ajudar na revisão de códigos, puxar novas iniciativas ou compartilhar nossas vagas e projetos." },
    { q: "Onde posso acompanhar o trabalho da SouJunior?", a: "Através do nosso Discord, GitHub, LinkedIn e demais canais oficiais. Tudo o que fazemos é aberto para a comunidade." }
  ];
export default function Faq() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32">
      {/* Brilhos azuis e moldura roxa do Figma */}
      <span aria-hidden="true" className="pointer-events-none absolute -left-16 top-24 h-[502px] w-[502px] rounded-full bg-primary/10 blur-3xl" />
      <span aria-hidden="true" className="pointer-events-none absolute -right-24 bottom-0 h-[637px] w-[637px] rounded-full bg-primary/10 blur-3xl" />
      <svg
        aria-hidden="true"
        viewBox="0 0 821 821"
        width="820.844"
        height="820.844"
        fill="none"
        className="pointer-events-none absolute -left-20 bottom-[-320px] hidden max-w-none lg:block"
      >
        <path d={MOLDURA} stroke="#6366F1" strokeWidth="3" />
      </svg>

      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-2 lg:gap-24">
        <div>
          <span className="inline-block rounded-full bg-roxo px-5 py-2 text-sm font-bold text-white">
            FAQ
          </span>
          <h2 className="mt-8 text-4xl font-black leading-tight md:text-5xl">
            Dúvidas sobre{' '}<br className="hidden md:block" />o projeto
          </h2>
        </div>

        <dl>
          {faqs.map((item) => (
            <div key={item.q} className="flex items-start gap-6 border-b border-dark/15 py-7">
              <div className="flex-1">
                <dt className="text-xl font-bold leading-snug md:text-2xl">{item.q}</dt>
                <dd className="mt-2 max-w-md text-sm leading-relaxed text-dark/70 md:text-base">{item.a}</dd>
              </div>
              <span
                aria-hidden="true"
                className="mt-2 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-2 border-roxo text-roxo"
              >
                <svg width="11" height="7" viewBox="0 0 12.5 7.36" fill="none">
                  <path d="M1 1L6.25 6L11.5 1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
