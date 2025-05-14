import { Bookmark, Clock, Award, School } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutCourse = () => {
  const handleCheckout = () => {
    window.location.href = 'https://chat.whatsapp.com/KWhHkjbu8BdEZbjPtsv6wq';
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-angel-primary">
                Sobre o Curso
              </h2>
              <div className="w-24 h-1 bg-angel-gold mb-8"></div>
            </div>
            
            <p className="text-lg mb-6">
              Um curso é 100% presencial, com início no mês de Junho dividido em módulos temáticos.
              Com linguagem simples, direta e fiel à doutrina católica.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Bookmark className="h-6 w-6 text-angel-gold mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Origem e natureza dos anjos</h3>
                  <p className="text-gray-600">Compreenda quem são os anjos e seu propósito divino</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Bookmark className="h-6 w-6 text-angel-gold mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Missão dos anjos na Bíblia</h3>
                  <p className="text-gray-600">Estudo detalhado de passagens bíblicas sobre os anjos</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Bookmark className="h-6 w-6 text-angel-gold mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Os nove coros angélicos</h3>
                  <p className="text-gray-600">Hierarquia celestial e suas funções específicas</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Bookmark className="h-6 w-6 text-angel-gold mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Anjos na vida dos santos</h3>
                  <p className="text-gray-600">Testemunhos e relatos da interação com anjos</p>
                </div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="bg-angel-gold hover:bg-amber-600 text-black font-bold"
              onClick={handleCheckout}
            >
              Quero Me Inscrever
            </Button>
          </div>
          
          <div className="md:w-1/2 bg-angel-light rounded-lg p-8">
            <h3 className="text-2xl font-serif font-bold mb-6 text-angel-primary">Características do Curso</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Clock className="h-10 w-10 text-angel-gold mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">44 horas de conteúdo</h4>
                  <p>Distribuídas em 22 aulas presenciais</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Award className="h-10 w-10 text-angel-gold mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Certificado</h4>
                  <p>Receba um certificado ao concluir o curso</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <School className="h-10 w-10 text-angel-gold mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Base doutrinária sólida</h4>
                  <p>Fiel ao Magistério da Igreja Católica</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-10 w-10 text-angel-gold mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-lg">Inicio em Junho</h4>
                  <p>Turmas presenciais limitadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCourse;
