
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-20 from-rose-light/30 to-white bg-lilac-dark/20">
      <div className="container-custom ">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-semibold mb-8 text-lilac-dark">
            VOCÊ JA SENTIU QUE CARREGA FERIDAS QUE NINGUÉM VÊ?
          </h1>
          
          <div className="space-y-4 mb-10 text-lg md:text-xl">
            <p className="text-gray-700">
              Já tentou ser forte o tempo todo, mesmo quando tudo dentro de você pedia socorro?
            </p>
            <p className="text-xl md:text-2xl font-semibold text-lilac-dark">
              CHEGA DE IGNORAR A DOR!
            </p>
            <p className="italic text-gray-700">
              E você não precisa fazer isso sozinha.
            </p>
          </div>
          <div className="mt-16 animate-bounce">
            <a href="#sobre" className="inline-block">
              <ArrowDown size={32} className="text-rose mx-auto" />
            </a>
          </div>
          <button className="btn-primary text-lg md:text-xl px-8 py-4">
          <a href="#checkout" className="btn-primary text-lg md:text-xl px-8 py-4 block mx-auto text-center">
  QUERO CONHECER
</a>
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
