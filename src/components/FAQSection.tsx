
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: '📘 Esse eBook é para qualquer mulher?',
      answer: 'Sim! Ele foi escrito com carinho para mulheres de todas as idades e fases da vida que desejam experimentar a cura emocional por meio da presença de Deus.'
    },
    {
      question: '⛪ Preciso ser cristã para entender o conteúdo?',
      answer: 'O eBook é baseado em princípios bíblicos e na fé cristã, mas é acessível e acolhedor para qualquer mulher que deseje uma jornada espiritual de restauração.'
    },
    {
      question: '📲 Em qual formato receberei o eBook?',
      answer: 'Você receberá o eBook em formato PDF digital, podendo acessar no celular, tablet ou computador quando e onde quiser.'
    },
    {
      question: '📥 Como vou receber o eBook?',
      answer: 'Assim que a compra for confirmada, você receberá o link para download diretamente no seu e-mail ou WhatsApp (dependendo da plataforma de venda).'
    },
    {
      question: '🕊️ Quanto tempo dura a leitura?',
      answer: 'A leitura pode ser feita no seu tempo! Algumas leitoras preferem ler um capítulo por dia, outras mergulham tudo de uma vez. A jornada é sua!'
    },
    {
      question: '💳 Quais formas de pagamento são aceitas?',
      answer: 'Cartão de crédito, PIX, boleto bancário e até parcelamento — dependendo da plataforma utilizada.'
    },
    {
      question: '📞 E se eu tiver dúvidas depois da compra?',
      answer: 'Você poderá entrar em contato com nossa equipe de suporte por e-mail ou WhatsApp para receber orientação ou ajuda com o acesso.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-lilac-light/100">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center gradient-text">
            ❓ PERGUNTAS FREQUENTES (FAQ)
          </h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-lg' : ''}`}
              >
                <button 
                  className="w-full p-5 flex items-center justify-between text-left" 
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-rose-DEFAULT" />
                  ) : (
                    <ChevronDown className="text-rose-DEFAULT" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="p-5 pt-0 text-gray-700 border-t border-gray-100">
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
