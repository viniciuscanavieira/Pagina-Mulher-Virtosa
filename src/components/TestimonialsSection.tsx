
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  // Mock testimonials data
  const testimonials = [
    {
      text: "Esse livro mudou completamente minha perspectiva sobre minhas feridas emocionais. Finalmente entendi que não precisava ser forte o tempo todo.",
      name: "Camila S.",
      role: "Professora"
    },
    {
      text: "Foi como se cada palavra falasse diretamente com as minhas dores. Me reconectei com Deus de uma forma que não imaginava ser possível.",
      name: "Renata M.",
      role: "Empresária"
    },
    {
      text: "Os exercícios práticos transformaram meu processo de cura. Não foi apenas teoria, mas passos reais de restauração com Deus.",
      name: "Fernanda L.",
      role: "Psicóloga"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Depoimentos
          </h2>
          <p className="text-lg text-gray-700">
            Veja o que outras mulheres estão falando sobre sua jornada de cura com o Mulher Virtuosa.
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto relative bg-white rounded-2xl shadow-lg p-8 md:p-10">
          <div className="absolute -top-5 -left-2 text-rose-DEFAULT opacity-30">
            <Quote size={48} />
          </div>
          
          <div className="text-lg md:text-xl italic text-gray-700 mb-6">
            {testimonials[currentIndex].text}
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold">{testimonials[currentIndex].name}</p>
              <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={goToPrevious} 
                className="w-10 h-10 rounded-full bg-lilac-light hover:bg-lilac-DEFAULT flex items-center justify-center"
                aria-label="Depoimento anterior"
              >
                <ArrowLeft size={18} className="text-gray-700" />
              </button>
              <button 
                onClick={goToNext} 
                className="w-10 h-10 rounded-full bg-rose-light hover:bg-rose-DEFAULT flex items-center justify-center"
                aria-label="Próximo depoimento"
              >
                <ArrowRight size={18} className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
