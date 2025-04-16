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
  <h2
    className="text-3xl md:text-4xl font-bold mb-6"
    style={{ color: '#690742' }}
  >
    Você encontrou a resposta que precisava:
  </h2>
</div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {benefitsList.map((benefit, index) => (
  <motion.div
    key={index}
    className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
    viewport={{ once: false, amount: 0.3 }}
  >
    <div className="flex-shrink-0 mt-1 text-rose-DEFAULT">
      <CheckCircle size={28} />
    </div>
    <p className="text-lg text-gray-800">{benefit}</p>
  </motion.div>
))}
        </div>

        <div className="mt-12 text-center">
        <a
        href="#checkout"
        className="btn-primary text-lg md:text-xl px-8 py-4 block mx-auto text-center mt-8"
      >
        QUERO MUDAR
      </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
