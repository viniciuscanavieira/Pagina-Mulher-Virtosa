
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-4 fixed w-full bg-white bg-opacity-95 shadow-sm z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="text-2xl font-bold text-rose">
          <h1 className="font-playfair">Mulher Virtuosa</h1>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-rose"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#sobre" className="text-gray-700 hover:text-rose">Sobre</a>
          <a href="#conteudo" className="text-gray-700 hover:text-rose">Conteúdo</a>
          <a href="#depoimentos" className="text-gray-700 hover:text-rose">Depoimentos</a>
          <a href="#faq" className="text-gray-700 hover:text-rose">FAQ</a>
          <button className="btn-primary">QUERO CONHECER</button>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden py-4">
            <div className="flex flex-col items-center space-y-4">
              <a href="#sobre" className="text-gray-700 hover:text-rose" onClick={() => setIsMenuOpen(false)}>Sobre</a>
              <a href="#conteudo" className="text-gray-700 hover:text-rose" onClick={() => setIsMenuOpen(false)}>Conteúdo</a>
              <a href="#depoimentos" className="text-gray-700 hover:text-rose" onClick={() => setIsMenuOpen(false)}>Depoimentos</a>
              <a href="#faq" className="text-gray-700 hover:text-rose" onClick={() => setIsMenuOpen(false)}>FAQ</a>
              <button className="btn-primary" onClick={() => setIsMenuOpen(false)}>QUERO CONHECER</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
