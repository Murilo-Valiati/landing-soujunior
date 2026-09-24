export default function Problema() {
  return (
    <section className="bg-dark text-white py-20 lg:py-32">
      <div className="section-shell grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">
        <div>
          <span className="inline-block px-5 py-2 rounded-full border border-primary text-white text-sm font-bold mb-6">
            O problema
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            O começo não{' '}<br className="hidden md:block" />deveria ser{' '}<br className="hidden md:block" />
            <span className="text-cyan">uma barreira.</span>
          </h2>
        </div>
        <div className="max-w-lg mx-auto lg:mx-0">
          <h3 className="text-xl md:text-2xl font-bold mb-6">
            Como ganhar experiência se toda vaga pede experiência?
          </h3>
          <p className="text-white/70 leading-relaxed mb-8">
            Para quem está começando, o mercado tech pode parecer um labirinto. Nós acreditamos que a teoria só faz sentido quando aplicada à prática. O desafio aparece de verdade quando chega a hora de trabalhar em equipe, receber feedbacks, lidar com processos e entregar valor.
          </p>
          <div className="inline-block border border-white/20 rounded-xl p-5 bg-white/5 relative mx-auto lg:mx-0">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-cyan rounded-r-full"></div>
            <p className="font-medium text-sm text-left pl-2">
              É nesse espaço entre o estudar e o<br/>trabalhar que a SouJunior entra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
