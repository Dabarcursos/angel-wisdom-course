
import { Button } from "@/components/ui/button";
const Professor = () => {
  const handleCheckout = () => {
    window.location.href = 'https://www.asaas.com/c/ga39caldips4zoy8';
  };
  
  return <section id="professor" className="py-16 bg-angel-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-angel-primary">
            Sobre o Professor
          </h2>
          <div className="w-24 h-1 bg-angel-gold mx-auto mb-8"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-angel-gold shadow-lg">
              <img alt="Professor Edinei Ouriques da Silva" className="w-full h-full object-cover" src="/lovable-uploads/7e6de7e5-d4e6-4e4c-8c2c-5b9ce6568f7e.jpg" />
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-2xl font-serif font-bold mb-4">Edinei Ouriques da Silva</h3>
            <p className="text-lg mb-4 font-medium">Teólogo, Filósofo e Professor</p>
            
            <div className="space-y-4 mb-8">
              <p>Edinei Ouriques da Silva é teólogo, filósofo, professor e palestrante, com mais de 15 anos de experiência em formação cristã. Edinei atua como professor de Antigo e Novo Testamento na Escola de Teologia para Leigos da Diocese de Tubarão (SC), e no curso bíblico católico onde já formou centenas de alunos.</p>
              
              <p>
                Com uma didática clara e acessível, Edinei tem o dom de traduzir temas profundos da fé católica de forma simples 
                e prática para o dia a dia do cristão. Ele acredita que a formação teológica é um caminho para o amadurecimento 
                da fé e para um relacionamento mais íntimo com Deus.
              </p>
              
              <p>
                Apaixonado pelo estudo dos anjos na Bíblia, na Tradição e na doutrina da Igreja, Edinei desenvolveu este curso 
                para te ajudar a conhecer a verdadeira Angelologia Católica, longe de misticismos e falsas crenças.
              </p>
              
              <p className="font-medium italic">
                "Se você deseja aprender de forma segura, profunda e fiel à fé da Igreja sobre os anjos — 
                quem são, o que fazem e como atuam no plano de Deus — este curso é para você!"
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-angel-gold hover:bg-amber-600 text-black font-bold" 
              onClick={handleCheckout}
            >
              Quero aprender sobre os anjos agora!
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Professor;
