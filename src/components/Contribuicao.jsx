export default function Contribuicao() {
  return (
    <section id="planos" className="relative overflow-hidden bg-primary">
       {/* Figma: foto 943x757 colada na borda esquerda, painel azul 962 de largura */}
       <div className="grid lg:grid-cols-[943fr_962fr]">

         {/* Fundo em vez de <img>: garante que a foto preencha a coluna inteira
             em qualquer largura, inclusive quando o layout empilha no celular. */}
         <div
           role="img"
           aria-label="Grupo de jovens comemorando juntos durante um projeto em equipe"
           className="aspect-[1000/847] bg-cover bg-center sm:aspect-[16/10] lg:aspect-auto lg:h-auto"
           style={{ backgroundImage: "url('/fotos/comunidade-grupo.jpg')" }}
         />

         <div className="radial-glow-blue px-6 py-16 text-white sm:px-10 lg:py-24 lg:pl-[13.6%] lg:pr-16">
            <h2 className="max-w-xl text-4xl md:text-5xl font-black leading-tight mb-8">
              Uma pequena contribuição pode fazer parte de uma <span className="text-secondary">grande mudança:</span>
            </h2>

            <div className="flex max-w-xl flex-col gap-6">
               <div className="bg-dark rounded-[24px] p-6 md:p-8 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 text-white mt-1">
                     ✓
                  </div>
                  <div>
                     <h3 className="font-bold text-lg mb-2">Para quem está começando</h3>
                     <p className="text-white/70 text-sm leading-relaxed">Acesso gratuito a servidores para deploy, infraestrutura para projetos e ferramentas premium.</p>
                  </div>
               </div>

               <div className="bg-dark rounded-[24px] p-6 md:p-8 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center flex-shrink-0 text-secondary mt-1">
                     ✓
                  </div>
                  <div>
                     <h3 className="font-bold text-lg mb-2">Para toda a comunidade</h3>
                     <p className="text-white/70 text-sm leading-relaxed">Sustentação do ecossistema que gera centenas de vagas e conecta pessoas através da tecnologia.</p>
                  </div>
               </div>
            </div>

            <div className="mt-10">
               <a href="https://apoia.se/soujunior" target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto text-center rounded-full bg-secondary px-10 py-4 text-sm font-bold text-dark transition hover:bg-secondary/90 shadow-lg">
                  Apoiar com R$ 2, R$ 5 ou R$ 9
               </a>
            </div>
         </div>

       </div>
    </section>
  );
}
