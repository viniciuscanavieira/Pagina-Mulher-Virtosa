
import ebookMockup from '../assets/ebook-mockup.png';

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-white">
  <div className="container-custom text-center">
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
      <div className="md:w-1/2 space-y-6">
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ color: '#690742' }}
        >
          Mulher Virtuosa não é apenas um material de leitura.
        </h2>

        <p
          className="text-xl md:text-2xl font-medium mb-4"
          style={{ color: '#690742' }}
        >
          É um chamado.
        </p>

        <p
          className="text-lg mb-8"
          style={{ color: '#690742' }}
        >
          Uma jornada de reencontro com o seu valor, sua essência com Deus.
        </p>
            
            <button className="btn-primary justify-center">
              QUERO MUDAR
            </button>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              {/* Placeholder for e-book mockup - ideally replace with actual image */}
              <img 
                src={ebookMockup} 
                alt="E-book Mulher Virtuosa" 
                className="w-full max-w-md mx-auto" 
              />
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-lilac-light rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-rose-light rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
