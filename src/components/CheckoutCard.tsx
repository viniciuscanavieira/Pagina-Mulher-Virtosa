import { Check } from 'lucide-react';
import selo from '../assets/pg.png';
import { motion } from 'framer-motion';

const CheckoutCard = () => {
  const features = [
    '7 capítulos profundos sobre cura emocional com Deus',
    'Linguagem sensível, bíblica e acessível',
    'Exercícios práticos em cada etapa',
    'Atividades de escrita terapêutica',
    'Oração dirigida em todos os capítulos',
    'Declarações e versículos de identidade',
    'Reflexões guiadas',
    'Cartas de perdão',
    'Linha do tempo da dor',
    'Mapa mental de identidade restaurada',
    'Declarações de cura e libertação',
    'Perguntas de autoavaliação emocional'
  ];

  return (
    <section id="checkout" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-[#690742] to-[#E348A1] p-8 text-white text-center rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Mulher Virtuosa é o guia que eu gostaria de ter quando tudo dentro de mim parecia quebrado.
              </h2>
              <p className="text-lg">
                E agora ele está disponível para você.
              </p>
            </div>

            <div className="p-6 md:p-10">
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-rose rounded-full flex items-center justify-center text-white mt-1">
                      <Check size={12} />
                    </div>
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <div className="bg-lilac-light/20 border border-lilac-dark p-6 rounded-2xl text-center mb-8 shadow-md">
                <div className="mb-2">
                  <span className="text-red-500 text-base line-through">De R$ 129,90</span>
                </div>

                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-1">
                  12x de R$ 9,74
                </div>

                <div className="text-lg text-gray-700 mb-2">
                  no cartão de crédito
                </div>

                <div className="text-xl text-green-800 font-semibold">
                  ou R$ 97,00 à vista
                </div>
              </div>

              <button className="btn-primary w-full py-4 text-xl">
                QUERO ME INSCREVER
              </button>
            </div>

            <img
              src={selo}
              alt="Ilustração representando transformação"
              className="mx-auto w-2/3 sm:w-1/2 md:w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutCard;
