
import { CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const CourseOverview = () => {
  return (
    <section id="overview" className="py-16 bg-angel-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-center text-angel-primary">
          O Que Você Vai Aprender
        </h2>
        
        <div className="w-24 h-1 bg-angel-gold mx-auto mb-8"></div>
        
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          São 22 aulas detalhadas sobre o mundo angélico, sem necessidade de formação prévia, 
          com base na Suma Teológica de Santo Tomás de Aquino (Parte I, q. 50–63).
          Ideal para leigos, católicos devotos e todos interessados em espiritualidade.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Módulo 1 */}
          <Card className="p-6 border border-gray-200 rounded-lg shadow-sm module-card bg-white">
            <div className="h-12 w-12 rounded-full bg-angel-light flex items-center justify-center mb-4">
              <span className="text-2xl font-semibold text-angel-primary">1</span>
            </div>
            <h3 className="text-xl font-serif font-bold mb-4 text-angel-primary">Fundamentos da Angeologia</h3>
            <ul className="space-y-3">
              <li className="flex">
                <CheckCircle className="h-5 w-5 text-angel-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>O que são os anjos</span>
              </li>
              <li className="flex">
                <CheckCircle className="h-5 w-5 text-angel-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Natureza espiritual</span>
              </li>
              <li className="flex">
                <CheckCircle className="h-5 w-5 text-angel-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Visão dos Padres da Igreja</span>
              </li>
            </ul>
          </Card>
          
          {/* Módulo 2 */}
          <Card className="p-6 border border-gray-200 rounded-lg shadow-sm module-card bg-white">
            <div className="h-12 w-12 rounded-full bg-angel-light flex items-center justify-center mb-4">
              <span className="text-2xl font-semibold text-angel-primary">2</span>
            </div>
            <h3 className="text-xl font-serif font-bold mb-4 text-angel-primary">Hierarquia e Ordem Angélica</h3>
            <ul className="space-y-3">
              <li className="flex">
                <CheckCircle className="h-5 w-5 text-angel-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Os nove coros angélicos</span>
              </li>
              <li className="flex">
                <CheckCircle className="h-5 w-5 text-angel-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Funções de cada hierarquia</span>
              </li>
              <li className="flex">
                <CheckCircle className="h-5 w-5 text-angel-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Papel na criação divina</span>
              </li>
            </ul>
          </Card>
          
          {/* Módulo 3 */}
          <Card className="p-6 border border-gray-200 rounded-lg shadow-sm module-card bg-white">
            <div className="h-12 w-12 rounded-full bg-angel-light flex items-center justify-center mb-4">
              <span className="text-2xl font-semibold text-angel-primary">3</span>
            </div>
            <h3 className="text-xl font-serif font-bold mb-4 text-angel-primary">Criação e Provação dos Anjos</h3>
            <ul className="space-y-3">
              <li className="flex">
                <CheckCircle className="h-5 w-5 text-angel-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Livre arbítrio angélico</span>
              </li>
              <li className="flex">
                <CheckCircle className="h-5 w-5 text-angel-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>A queda de Lúcifer</span>
              </li>
              <li className="flex">
                <CheckCircle className="h-5 w-5 text-angel-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Estado atual dos anjos</span>
              </li>
            </ul>
          </Card>
          
          {/* Módulo 4 */}
          <Card className="p-6 border border-gray-200 rounded-lg shadow-sm module-card bg-white">
            <div className="h-12 w-12 rounded-full bg-angel-light flex items-center justify-center mb-4">
              <span className="text-2xl font-semibold text-angel-primary">4</span>
            </div>
            <h3 className="text-xl font-serif font-bold mb-4 text-angel-primary">Ação dos Anjos e dos Demônios</h3>
            <ul className="space-y-3">
              <li className="flex">
                <CheckCircle className="h-5 w-5 text-angel-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Anjos da guarda</span>
              </li>
              <li className="flex">
                <CheckCircle className="h-5 w-5 text-angel-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Tentações e combate espiritual</span>
              </li>
              <li className="flex">
                <CheckCircle className="h-5 w-5 text-angel-gold mr-2 flex-shrink-0 mt-0.5" />
                <span>Aplicações para vida prática</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;
