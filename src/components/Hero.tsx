import { ArrowDown } from 'lucide-react';
import mulherImg from '../assets/mulher.png'; // Caminho relativo correto

const Hero = () => {
  return (
    <section className="pt-20 pb-10 md:pt-28 md:pb-12 from-rose-light/30 to-white bg-lilac-dark/20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            style={{ color: '#690742' }}
            className="text-3xl md:text-5xl font-semibold mb-8"
          >
            VOCÊ JÁ SENTIU QUE CARREGA <span style={{ color: '#E348A1' }}>FERIDAS</span> QUE <span style={{ color: '#E348A1' }}>NINGUÉM VÊ</span>?
          </h1>

          <img
            src={mulherImg}
            alt="Imagem emocional representando feridas internas"
            className="mx-auto mb-8 w-1/2 sm:w-1/3 max-w-md animate-pulse-scale"
          />

<div className="space-y-2 mb-8 text-lg md:text-xl">
  <p className="text-gray-700 p-2">
    Já tentou ser forte o tempo todo, mesmo quando tudo dentro de você pedia socorro?
  </p>

  <h4 className="text-xl md:text-2xl font-bold text-[#690742] p-2">
    CHEGA DE IGNORAR A DOR!
  </h4>

  <p className="italic text-gray-700 p-2">
    E você não precisa fazer isso sozinha.
  </p>
          </div>
          <div className="mt-10 animate-bounce">
            <a href="#sobre" className="inline-block">
              <ArrowDown size={32} className="text-rose mx-auto" />
            </a>
          </div>
          <a
            href="#checkout"
            className="btn-primary text-lg md:text-xl px-8 py-4 block mx-auto text-center mt-6"
          >
            QUERO CONHECER
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
