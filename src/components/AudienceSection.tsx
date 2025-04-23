import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import bg from '../assets/bg-02.png';
import audienceImg from '../assets/mulher.png'; // imagem destacada

const AudienceSection = () => {
  const audienceList = [
    'Mulheres que enfrentaram rejeição, abandono, traumas ou frustrações',
    'Cristãs que querem aprofundar sua identidade em Cristo',
    'Filhas de Deus que sentem que precisam de cura interior',
    'Você, que sabe que existe um propósito além da dor'
  ];

  return (
    <section
      className="relative section-padding bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-[#f8e9f3]/80 backdrop-blur-[2px] z-0" />
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          {/* Conteúdo textual */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#690742] leading-snug">
              PARA QUEM É<br />
              <span className="text-rose-500">ESSE LIVRO?</span>
            </h2>

            <div className="space-y-6">
              {audienceList.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-white/90 rounded-2xl shadow-lg hover:shadow-2xl border-l-4 border-rose-300 transition-all"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  <div className="flex-shrink-0 mt-1 text-rose-500">
                    <CheckCircle size={26} />
                  </div>
                  <span className="text-base md:text-lg text-gray-800">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Imagem */}
          <div className="w-full md:w-1/2">
            <img
              src={audienceImg}
              alt="Mulher representando o público"
              className="w-full max-w-md mx-auto rounded-2xl shadow-xl animate-fade-in-up"
            />
          </div>
        </div>

        {/* Bônus Exclusivos */}
        <div className="mt-20 bg-white/90 p-8 rounded-2xl shadow-2xl max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold ml-3 text-[#690742]">
              CONTEÚDO EXCLUSIVO
            </h3>
          </div>
          <p className="text-center text-lg text-gray-700 mb-6">
            Uma jornada com linguagem sensível, simples e profundamente espiritual.
          </p>

          <div className="bg-white/90 p-8 rounded-2xl shadow-xl border border-rose-100">
  <h4 className="text-2xl font-semibold mb-6 text-center text-[#690742]">
    Bônus Exclusivos
  </h4>
  <ul className="grid md:grid-cols-2 gap-6 text-gray-800 text-base">
    <li className="flex items-start gap-4">
      <div className="w-2.5 h-2.5 rounded-full bg-rose-500 mt-1.5"></div>
      <span className="font-medium">Devocional de 7 dias</span>
    </li>
    <li className="flex items-start gap-4">
      <div className="w-2.5 h-2.5 rounded-full bg-rose-500 mt-1.5"></div>
      <span className="font-medium">Diário de Reflexão</span>
    </li>
    <li className="flex items-start gap-4">
      <div className="w-2.5 h-2.5 rounded-full bg-rose-500 mt-1.5"></div>
      <span className="font-medium">Checklist da Cura Emocional</span>
    </li>
    <li className="flex items-start gap-4">
      <div className="w-2.5 h-2.5 rounded-full bg-rose-500 mt-1.5"></div>
      <span className="font-medium">Versículos de Identidade e Cura</span>
    </li>
  </ul>
</div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
