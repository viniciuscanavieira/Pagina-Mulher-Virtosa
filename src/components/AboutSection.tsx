import ebookMockup from '../assets/ebook-mockup.png';

const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="section-padding bg-gradient-to-b from-white to-rose-light/40"
    >
      <div className="container-custom">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
          {/* Imagem no topo no mobile */}
          <div className="md:w-1/2 relative order-1 md:order-none">
            <img
              src={ebookMockup}
              alt="E-book Mulher Virtuosa"
              className="w-full max-w-sm mx-auto animate-pulse-scale drop-shadow-xl"
            />
            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-rose-light rounded-full -z-10 blur-md opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-lilac-light rounded-full -z-10 blur-sm opacity-50"></div>
          </div>

          {/* Texto */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug text-[#690742]">
              Mulher Virtuosa não é apenas um material de leitura.
            </h2>

            <p className="text-xl md:text-2xl font-semibold text-rose-DEFAULT">
              É um chamado.
            </p>

            <p className="text-lg text-gray-700">
              Uma jornada de reencontro com o seu valor, sua essência com Deus.
            </p>

            <a
  href="#checkout"
  className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-lg md:text-xl px-8 py-4 rounded-full shadow-lg transition-all duration-300 mt-8 inline-block"
>
  QUERO MUDAR
</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
