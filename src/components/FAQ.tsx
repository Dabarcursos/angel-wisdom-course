
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Preciso ter formação teológica?",
      answer: "Não, o curso foi desenvolvido para ser acessível a todos os interessados, independentemente de formação prévia. A didática do professor Edinei torna os conceitos teológicos compreensíveis para leigos."
    },
    {
      question: "O conteúdo é fiel ao Magistério?",
      answer: "Sim, absolutamente. Todo o conteúdo do curso está fundamentado na Tradição da Igreja Católica, nos ensinamentos dos Papas, Doutores da Igreja e especialmente na obra de Santo Tomás de Aquino."
    },
    {
      question: "O curso é presencial ou online?",
      answer: "Este é um curso 100% presencial, permitindo maior interação com o professor e entre os participantes. As aulas acontecem em local específico que será informado aos inscritos."
    },
    {
      question: "Qual a duração total do curso?",
      answer: "O curso tem duração total de 44 horas, distribuídas em 22 aulas presenciais. O cronograma detalhado será disponibilizado aos alunos matriculados."
    },
    {
      question: "É possível receber certificado?",
      answer: "Sim, todos os alunos que concluírem o curso receberão um certificado comprovando a participação e a carga horária do curso."
    },
    {
      question: "Quais materiais são incluídos no curso?",
      answer: "Os alunos receberão apostilas com o conteúdo das aulas, bibliografia recomendada e acesso a materiais complementares para aprofundamento."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-angel-primary">
            Dúvidas Frequentes
          </h2>
          <div className="w-24 h-1 bg-angel-gold mx-auto mb-8"></div>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-lg font-medium py-4 hover:text-angel-gold transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
