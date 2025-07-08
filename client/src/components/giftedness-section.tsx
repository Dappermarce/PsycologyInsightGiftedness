import { Card, CardContent } from "@/components/ui/card";
import { Brain, Palette, Users, CheckCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function GiftednessSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="superdotacion" 
      ref={ref}
      className={`py-20 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">Superdotación Intelectual</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprende las características, identificación y desarrollo del potencial excepcional
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-dark-slate">Definición y Características</h3>
            <p className="text-gray-700 leading-relaxed">
              La superdotación intelectual se define como una capacidad intelectual significativamente superior 
              a la media, típicamente con un CI de 130 o superior, que representa aproximadamente el 2% de la población.
            </p>
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-3">Características Principales:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                    Capacidad de aprendizaje acelerada
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                    Pensamiento abstracto y complejo
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                    Creatividad excepcional
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                    Intensidad emocional
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                    Perfeccionismo
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Gifted child solving mathematical problems" 
              className="rounded-xl shadow-lg w-full"
            />
            <Card className="bg-sky-blue/5 border-sky-blue/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-sky-blue mb-3">Datos Estadísticos:</h4>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Prevalencia mundial:</span>
                    <span className="font-semibold">2-3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Identificación temprana:</span>
                    <span className="font-semibold">5-10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Doble excepcionalidad:</span>
                    <span className="font-semibold">10-15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subrendimiento:</span>
                    <span className="font-semibold">15-20%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tipos de Superdotación */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-dark-slate mb-8 text-center">Tipos de Superdotación</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="text-primary" size={24} />
                </div>
                <h4 className="font-semibold text-dark-slate mb-3">Intelectual</h4>
                <p className="text-gray-600">Capacidad excepcional en razonamiento lógico, comprensión verbal y procesamiento cognitivo.</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-sky-blue/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="text-sky-blue" size={24} />
                </div>
                <h4 className="font-semibold text-dark-slate mb-3">Creativo</h4>
                <p className="text-gray-600">Habilidad para generar ideas originales, pensamiento divergente y soluciones innovadoras.</p>
              </CardContent>
            </Card>
            
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-green-500" size={24} />
                </div>
                <h4 className="font-semibold text-dark-slate mb-3">Socioemocional</h4>
                <p className="text-gray-600">Capacidad excepcional para comprender y manejar emociones, liderazgo natural.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
