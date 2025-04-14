
import { Check } from 'lucide-react';

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
            <div className="bg-gradient-to-r from-rose to-lilac-dark p-8 text-white text-center">
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
                  <div key={index} className="flex items-start gap-2">
                    <div className="flex-shrink-0 w-5 h-5 bg-rose rounded-full flex items-center justify-center text-white mt-1">
                      <Check size={12} />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-lilac-light/20 p-6 rounded-lg text-center mb-8">
                <div className="mb-2">
                  <span className="text-gray-500 line-through text-lg">De R$ 00,00</span>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-rose mb-1">
                  por 12x de R$ 00,00
                </div>
                <div className="text-xl">
                  ou R$ 00,00 à vista
                </div>
              </div>
              
              <button className="btn-primary w-full py-4 text-xl">
                QUERO ME INSCREVER
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutCard;
