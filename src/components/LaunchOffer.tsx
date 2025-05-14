
import { Button } from "@/components/ui/button";

const LaunchOffer = () => {
  const handleCheckout = () => {
    window.location.href = 'https://chat.whatsapp.com/KWhHkjbu8BdEZbjPtsv6wq';
  };

  return (
    <section id="launch-offer" className="py-16 bg-angel-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-angel-primary text-white py-5 text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold">OFERTA EXCLUSIVA DE LANÇAMENTO</h2>
          </div>
          
          <div className="p-8 md:p-12">
            <p className="text-lg md:text-xl text-center mb-8">
              Invista na sua formação espiritual com um curso completo, acessível e 100% fiel à doutrina católica.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10">
              <div className="bg-angel-muted p-6 rounded-lg w-full md:w-auto">
                <div className="text-center">
                  <span className="text-xl font-bold text-angel-primary">Valor Total</span>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-3xl font-bold text-angel-primary">R$ 600</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <p className="text-lg font-medium mb-4">Você pode parcelar da seguinte forma:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-angel-gold text-2xl">🔹</span>
                    <span className="text-lg">Matrícula: R$ 100</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-angel-gold text-xl">+</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-angel-gold text-2xl">🔹</span>
                    <span className="text-lg">5 parcelas mensais de R$ 100</span>
                    <span className="text-sm text-gray-600">(no boleto, no cartão ou no pix)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="bg-angel-gold hover:bg-amber-600 text-black font-bold px-8 py-6 text-lg"
                onClick={handleCheckout}
              >
                Garantir Minha Vaga Agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchOffer;
