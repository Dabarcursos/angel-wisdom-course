
import { Instagram, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-angel-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <h3 className="font-serif text-2xl font-bold mb-4">Angelologia Católica</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Curso completo sobre anjos baseado na tradição da Igreja Católica,
              na teologia tomista e nos ensinamentos dos santos.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/edineiouriques" target="_blank" rel="noopener noreferrer" className="hover:text-angel-gold transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://youtube.com/EdineiOuriques" target="_blank" rel="noopener noreferrer" className="hover:text-angel-gold transition-colors">
                <Youtube size={24} />
              </a>
              <a href="mailto:dabarpalavraemacao@gmail.com" className="hover:text-angel-gold transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Instagram: @edineiouriques</li>
              <li>YouTube: Edinei Ouriques</li>
              <li>E-mail: dabarpalavraemacao@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-6 text-center text-gray-400">
          <p className="mb-2">Apoio doutrinário: 100% fiel à Igreja Católica</p>
          <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
