import { Brain, Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-slate text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="text-primary text-2xl mr-3" />
              <span className="text-xl font-semibold">Psicología de la Superdotación</span>
            </div>
            <p className="text-gray-400 mb-4">
              Plataforma educativa especializada en psicología y superdotación intelectual basada en evidencia científica.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('evaluacion-avanzada')}
                  className="hover:text-white transition-colors"
                >
                  Evaluaciones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('recursos')}
                  className="hover:text-white transition-colors"
                >
                  Artículos Científicos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('recursos')}
                  className="hover:text-white transition-colors"
                >
                  Libros Especializados
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('recursos')}
                  className="hover:text-white transition-colors"
                >
                  Centros de Investigación
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Temas</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button 
                  onClick={() => scrollToSection('superdotacion')}
                  className="hover:text-white transition-colors"
                >
                  Superdotación
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('metodologia-investigacion')}
                  className="hover:text-white transition-colors"
                >
                  Investigación
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('psiquiatria')}
                  className="hover:text-white transition-colors"
                >
                  Psiquiatría
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('evaluacion-avanzada')}
                  className="hover:text-white transition-colors"
                >
                  Evaluación
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Información</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <div className="bg-primary w-2 h-2 rounded-full mt-2 mr-3"></div>
                Contenido basado en evidencia científica
              </li>
              <li className="flex items-start">
                <div className="bg-primary w-2 h-2 rounded-full mt-2 mr-3"></div>
                Información actualizada 2025
              </li>
              <li className="flex items-start">
                <div className="bg-primary w-2 h-2 rounded-full mt-2 mr-3"></div>
                Recursos profesionales validados
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Psicología de la Superdotación. Todos los derechos reservados.</p>
          <p className="text-sm text-gray-500 mt-2">
            Este sitio web no constituye asesoramiento médico o psicológico profesional.
          </p>
          <p className="mt-2">Desarrollado por <strong>Marcelo Carmelino Kroll</strong></p>
          <p className="text-xs text-gray-600 mt-2">
            Creado en 2025 • Basado en investigación científica actual
          </p>
        </div>
      </div>
    </footer>
  );
}
