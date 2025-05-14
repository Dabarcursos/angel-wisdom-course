
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCheckout = () => {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSeRmTS0eVtLNQ6QljMcy1Vx3RfKFCuu9tEWKWEIWwCac4CO_g/viewform?usp=sharing&ouid=107269213125400105672';
  };

  return (
    <nav className="bg-angel-primary/95 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="font-serif text-xl font-bold">
              Angelologia <span className="text-angel-gold">Católica</span>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <a href="#overview" className="hover:text-angel-gold transition-colors">O Curso</a>
              <a href="#about" className="hover:text-angel-gold transition-colors">Sobre</a>
              <a href="#professor" className="hover:text-angel-gold transition-colors">Professor</a>
              <a href="#faq" className="hover:text-angel-gold transition-colors">FAQ</a>
              <Button 
                className="bg-angel-gold hover:bg-amber-600 text-black ml-4"
                onClick={handleCheckout}
              >
                Inscrever-se
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-angel-gold focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-angel-primary border-t border-gray-700">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <a 
              href="#overview"
              className="block py-2 hover:text-angel-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              O Curso
            </a>
            <a 
              href="#about"
              className="block py-2 hover:text-angel-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#professor"
              className="block py-2 hover:text-angel-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Professor
            </a>
            <a 
              href="#faq"
              className="block py-2 hover:text-angel-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              className="bg-angel-gold hover:bg-amber-600 text-black w-full mt-2"
              onClick={handleCheckout}
            >
              Inscrever-se
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
