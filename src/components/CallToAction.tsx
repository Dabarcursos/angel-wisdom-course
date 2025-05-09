
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CallToAction = () => {
  const handleCheckout = () => {
    window.location.href = 'https://pay.kiwify.com.br/YDBi87q';
  };

  return (
    <section className="py-16 bg-angel-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Garanta sua vaga agora e mergulhe no mistério dos anjos!
        </h2>
        
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Entre para a lista dos interessados e seja avisado quando as matrículas abrirem.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Badge variant="outline" className="py-2 px-4 border-angel-gold text-angel-gold">
            Curso com certificado
          </Badge>
          <Badge variant="outline" className="py-2 px-4 border-angel-gold text-angel-gold">
            Acesso vitalício
          </Badge>
          <Badge variant="outline" className="py-2 px-4 border-angel-gold text-angel-gold">
            Suporte via WhatsApp
          </Badge>
        </div>
        
        <Button 
          size="lg" 
          className="bg-angel-gold hover:bg-amber-600 text-black font-bold px-8 py-6"
          onClick={handleCheckout}
        >
          Quero aprender sobre os anjos agora!
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
