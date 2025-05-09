
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2800&q=80')"
    }} />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-angel-gradient z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
          Descubra o Mundo Oculto dos Anjos: <br />
          <span className="text-angel-gold italic">Um Curso de Angeologia</span>
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
          Aprenda a teologia dos anjos como nunca antes, com base na tradição católica, 
          nos ensinamentos dos santos e nos doutores da Igreja.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button 
            size="lg" 
            className="bg-angel-gold hover:bg-amber-600 text-black font-bold px-8 py-6"
            onClick={() => window.location.href = 'https://pay.herospark.com/curso-de-angeologia-423506'}
          >
            Quero Me Inscrever
          </Button>
        </div>

        <div className="text-sm md:text-base flex flex-wrap justify-center gap-x-6 gap-y-2 animate-fade-in">
          <span className="flex items-center">
            <span className="bg-angel-gold w-2 h-2 rounded-full mr-2"></span>
            Curso 100% presencial
          </span>
          <span className="flex items-center">
            <span className="bg-angel-gold w-2 h-2 rounded-full mr-2"></span>
            44 horas de conteúdo
          </span>
          <span className="flex items-center">
            <span className="bg-angel-gold w-2 h-2 rounded-full mr-2"></span>
            Baseado na tradição da Igreja
          </span>
        </div>
      </div>
    </section>;
};
export default HeroSection;
