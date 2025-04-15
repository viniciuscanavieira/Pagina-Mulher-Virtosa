import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import professora from '../assets/Professora.jpg'; // caminho relativo correto
import psicologa from '../assets/Psicologa.jpg'; // caminho relativo correto
import empresaria from '../assets/Empresaria.jpg'; // caminho relativo correto
const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Esse livro mudou completamente minha perspectiva sobre minhas feridas emocionais. Finalmente entendi que não precisava ser forte o tempo todo.",
      name: "Camila S.",
      role: "Professora",
      image: professora,
    },
    {
      text: "Foi como se cada palavra falasse diretamente com as minhas dores. Me reconectei com Deus de uma forma que não imaginava ser possível.",
      name: "Renata M.",
      role: "Empresária",
      image: empresaria,
    },
    {
      text: "Os exercícios práticos transformaram meu processo de cura. Não foi apenas teoria, mas passos reais de restauração com Deus.",
      name: "Fernanda L.",
      role: "Psicóloga",
      image: psicologa,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      transition: { duration: 0.5 },
    }),
  };

  return (
    <section id="depoimentos" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#690742' }}>
  <span style={{ color: '#690742' }}>Depoimentos</span>
</h2>
          <p className="text-lg text-gray-700">
            Veja o que outras mulheres estão falando sobre sua jornada de cura com o Mulher Virtuosa.
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative bg-white rounded-2xl shadow-lg p-8 md:p-10 overflow-hidden bg-lilac-light/30">

          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="text-lg md:text-xl italic text-gray-700 mb-6 absolute top-0 left-0 right-0 px-8"
            >
              {testimonials[currentIndex].text}
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <p className="font-bold">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="relative mt-40 flex justify-end gap-2">
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
    </section>
  );
};

export default TestimonialsSection;
