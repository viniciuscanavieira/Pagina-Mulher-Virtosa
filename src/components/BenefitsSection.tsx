import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <section id="conteudo" className="section-padding bg-lilac-light/100">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            Você encontrou a resposta que precisava:
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefitsList.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 mt-1 text-rose-DEFAULT">
                <CheckCircle size={28} />
              </div>
              <p className="text-lg text-gray-800">{benefit}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn-primary">
            QUERO MUDAR
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
