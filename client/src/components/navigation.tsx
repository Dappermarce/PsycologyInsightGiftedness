import { useState } from "react";
import { Menu, X, Brain } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Brain className="text-primary text-2xl mr-3" />
            <span className="text-xl font-semibold text-dark-slate">Psicología de la Superdotación</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-dark-slate hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('superdotacion')}
              className="text-dark-slate hover:text-primary transition-colors"
            >
              Superdotación
            </button>
            <button 
              onClick={() => scrollToSection('metodologia-investigacion')}
              className="text-dark-slate hover:text-primary transition-colors"
            >
              Investigación
            </button>
            <button 
              onClick={() => scrollToSection('psiquiatria')}
              className="text-dark-slate hover:text-primary transition-colors"
            >
              Psiquiatría
            </button>
            <button 
              onClick={() => scrollToSection('cronologia-cientifica')}
              className="text-dark-slate hover:text-primary transition-colors"
            >
              Historia
            </button>
            <button 
              onClick={() => scrollToSection('evaluacion-avanzada')}
              className="text-dark-slate hover:text-primary transition-colors"
            >
              Evaluación
            </button>
            <button 
              onClick={() => scrollToSection('recursos')}
              className="text-dark-slate hover:text-primary transition-colors"
            >
              Recursos
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-dark-slate hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left px-3 py-2 text-dark-slate hover:text-primary"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('superdotacion')}
              className="block w-full text-left px-3 py-2 text-dark-slate hover:text-primary"
            >
              Superdotación
            </button>
            <button 
              onClick={() => scrollToSection('neurociencia')}
              className="block w-full text-left px-3 py-2 text-dark-slate hover:text-primary"
            >
              Neurociencia
            </button>
            <button 
              onClick={() => scrollToSection('psiquiatria')}
              className="block w-full text-left px-3 py-2 text-dark-slate hover:text-primary"
            >
              Psiquiatría
            </button>
            <button 
              onClick={() => scrollToSection('evaluacion-avanzada')}
              className="block w-full text-left px-3 py-2 text-dark-slate hover:text-primary"
            >
              Evaluación
            </button>
            <button 
              onClick={() => scrollToSection('recursos')}
              className="block w-full text-left px-3 py-2 text-dark-slate hover:text-primary"
            >
              Recursos
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
