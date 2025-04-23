import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Este eBook é para qualquer mulher?',
      answer:
        'Sim! Ele foi escrito com carinho para mulheres de todas as idades e fases da vida que desejam experimentar a cura emocional por meio da presença de Deus.',
    },
    {
      question: 'Preciso ser cristã para aproveitar o conteúdo?',
      answer:
        'O eBook é baseado em princípios bíblicos e na fé cristã, mas é acessível e acolhedor para qualquer mulher que deseje uma jornada espiritual de restauração.',
    },
    {
      question: 'Em qual formato receberei o eBook?',
      answer:
        'Você receberá o eBook em formato PDF digital, podendo acessá-lo no celular, tablet ou computador quando e onde quiser.',
    },
    {
      question: 'Como vou receber o eBook?',
      answer:
        'Assim que a compra for confirmada, você receberá o link para download diretamente no seu e-mail ou WhatsApp, de acordo com a plataforma de venda.',
    },
    {
      question: 'Quanto tempo dura a leitura?',
      answer:
        'A leitura pode ser feita no seu tempo. Algumas leitoras preferem ler um capítulo por dia, outras mergulham na jornada de uma vez. Você escolhe.',
    },
    {
      question: 'Quais formas de pagamento estão disponíveis?',
      answer:
        'Cartão de crédito, PIX, boleto bancário e parcelamento — dependendo da plataforma utilizada.',
    },
    {
      question: 'E se eu tiver dúvidas após a compra?',
      answer:
        'Nossa equipe estará disponível para você por e-mail ou WhatsApp, oferecendo suporte e orientação sempre que necessário.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-white via-[#fbe7f3]/60 to-[#f3e7f9]/80">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#690742]">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`bg-white/90 rounded-xl border border-rose-100 shadow-md transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'shadow-lg border-rose-200' : ''
                }`}
              >
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full p-5 flex items-center justify-between text-left focus:outline-none transition-colors hover:bg-white/80"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">{faq.question}</h3>
                  <div className="transition-transform duration-300">
                    {openIndex === index ? (
                      <ChevronUp className="text-rose-500" />
                    ) : (
                      <ChevronDown className="text-rose-500" />
                    )}
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-5 text-gray-700 text-base border-t border-gray-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
