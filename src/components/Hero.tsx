
import { ArrowDown } from 'lucide-react';
import mulherImg from '../assets/mulher.png'; // caminho relativo correto
const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-20 from-rose-light/30 to-white bg-lilac-dark/20">
  <div className="container-custom">
    <div className="max-w-3xl mx-auto text-center">
      <h1 style={{ color: '#690742' }} className="text-3xl md:text-5xl font-semibold mb-8">
        VOCÊ JÁ SENTIU QUE CARREGA <span style={{ color: '#E348A1' }}>FERIDAS</span> QUE <span style={{ color: '#E348A1' }}>NINGUÉM VÊ</span>?
      </h1>

      {/* IMAGEM AQUI */}
      <img
  src={mulherImg}
  alt="Imagem emocional representando feridas internas"
  className="mx-auto mb-10 w-2/3 sm:w-1/2 max-w-md mb-8"
/>

      <div className="space-y-4 mb-10 text-lg md:text-xl">
        <p className="text-gray-700">
          Já tentou ser forte o tempo todo, mesmo quando tudo dentro de você pedia socorro?
        </p>
        <p
          className="text-xl md:text-2xl font-semibold"
          style={{ color: '#690742' }}
        >
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

      <a
        href="#checkout"
        className="btn-primary text-lg md:text-xl px-8 py-4 block mx-auto text-center mt-8"
      >
        QUERO CONHECER
      </a>
    </div>
  </div>
</section>
  );
};

export default Hero;
