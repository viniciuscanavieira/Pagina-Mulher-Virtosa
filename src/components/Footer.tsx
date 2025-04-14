
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 bg-lilac-dark text-white">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Virtude em Flor</h2>
          <p className="mb-6">Uma jornada de cura emocional e restauração espiritual</p>
          
          <div className="flex justify-center items-center gap-2 mb-6">
            <Heart size={18} fill="white" />
            <p>Feito com amor para mulheres que buscam cura</p>
            <Heart size={18} fill="white" />
          </div>
          
          <div className="text-sm opacity-80">
            <p>© {new Date().getFullYear()} Virtude em Flor. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
