
import { Check } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
const AudienceSection = () => {
  const audienceList = [
    'Mulheres que enfrentaram rejeição, abandono, traumas ou frustrações',
    'Cristãs que querem aprofundar sua identidade em Cristo',
    'Filhas de Deus que sentem que precisam de cura interior',
    'Você, que sabe que existe um propósito além da dor'
  ];

  return (
    <section className="section-padding from-white to-lilac-light/30 bg-lilac-light/100">
      <div className="container-custom text-center">
        <div className="max-w-4xl mx-auto ">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text">
            PARA QUEM É ESSE LIVRO?
          </h2>
          
          <div className="space-y-6 ">
            {audienceList.map((item, index) => (
              <div key={index} className="benefit-item shadow-md rounded-md bg-white">
                <div className="flex-shrink-0 mt-1 text-rose-DEFAULT">
                <CheckCircle size={28} />
              </div>
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-6 bg-white rounded-xl shadow-md">
            <div className="flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-rose-DEFAULT">📖</span>
              <h3 className="text-xl md:text-2xl font-bold ml-2">CONTEÚDO EXCLUSIVO</h3>
            </div>
            <p className="text-center text-lg mb-6">
              Com linguagem simples, sensível e profundamente espiritual.
            </p>
            
            <div className="bg-lilac-light/40 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-center">🎁 BÔNUS EXCLUSIVOS:</h4>
              <ul className="grid md:grid-cols-2 gap-3">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-DEFAULT">🎯</span>
                  Devocional de 7 dias
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-DEFAULT">📝</span>
                  Diário de Reflexão
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-DEFAULT">📜</span>
                  Checklist da Cura Emocional
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-rose-DEFAULT">📖</span>
                  Versículos de Identidade e Cura
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
