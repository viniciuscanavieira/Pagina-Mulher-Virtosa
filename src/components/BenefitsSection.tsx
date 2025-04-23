import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import bg from '../assets/bg-02.png';

const BenefitsSection = () => {
  const benefitsList = [
    '7 capítulos profundos sobre cura, identidade, perdão e restauração',
    'Devocionais guiados para fortalecer sua alma',
    'Exercícios práticos e orações que transformam',
    'Versículos para memorizar e declarar',
    'Espaços de reflexão para registrar sua jornada',
    'Um verdadeiro recomeço ao lado de Deus',
  ];

  return (
    <section
      id="conteudo"
      className="relative section-padding bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-[#fce4ef]/10 backdrop-blur-[2px] z-0" />

      <div className="container-custom relative z-10">
        {/* Título */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#690742]">
            Você encontrou a resposta que precisava:
          </h2>
        </div>

        {/* Lista de Benefícios */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefitsList.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-5 bg-white/90 rounded-2xl shadow-lg hover:shadow-2xl border-l-4 border-rose-300 transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="text-rose-500 mt-1">
                <CheckCircle size={26} />
              </div>
              <p className="text-lg text-gray-800">{benefit}</p>
            </motion.div>
          ))}
        </div>

        {/* Botão CTA */}
        <div className="mt-16 text-center">
          <a
            href="#checkout"
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold text-lg md:text-xl px-8 py-4 rounded-full shadow-lg transition-all duration-300"
          >
            QUERO MUDAR
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
