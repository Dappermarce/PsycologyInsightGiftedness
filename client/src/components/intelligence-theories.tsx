import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Languages, Calculator, Box, Music, Zap, Users, User, Leaf } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function IntelligenceTheories() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const multipleIntelligences = [
    { icon: Languages, name: "Lingüística", color: "text-primary" },
    { icon: Calculator, name: "Lógico-Matemática", color: "text-sky-blue" },
    { icon: Box, name: "Espacial", color: "text-green-500" },
    { icon: Music, name: "Musical", color: "text-purple-500" },
    { icon: Zap, name: "Corporal-Kinestésica", color: "text-orange-500" },
    { icon: Users, name: "Interpersonal", color: "text-red-500" },
    { icon: User, name: "Intrapersonal", color: "text-yellow-500" },
    { icon: Leaf, name: "Naturalista", color: "text-indigo-500" }
  ];

  return (
    <section 
      ref={ref}
      className={`py-20 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">Teorías de la Inteligencia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprende las diferentes perspectivas sobre la naturaleza de la inteligencia humana
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-dark-slate mb-6">Teoría de las Inteligencias Múltiples</h3>
              <p className="text-gray-600 mb-6">Howard Gardner propuso que la inteligencia no es unitaria, sino que existen múltiples tipos de inteligencia.</p>
              
              <div className="space-y-4">
                {multipleIntelligences.map((intelligence, index) => (
                  <div key={index} className={`flex items-center p-3 bg-${intelligence.color.split('-')[1]}/5 rounded-lg`}>
                    <intelligence.icon className={`${intelligence.color} w-6 h-6 mr-3`} />
                    <span className="font-medium">{intelligence.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-dark-slate mb-4">Teoría Triárquica (Sternberg)</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="bg-primary w-3 h-3 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-dark-slate">Analítica</p>
                      <p className="text-gray-600 text-sm">Resolución de problemas académicos</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-sky-blue w-3 h-3 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-dark-slate">Creativa</p>
                      <p className="text-gray-600 text-sm">Generación de ideas innovadoras</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-green-500 w-3 h-3 rounded-full mt-2 mr-3"></div>
                    <div>
                      <p className="font-medium text-dark-slate">Práctica</p>
                      <p className="text-gray-600 text-sm">Aplicación en situaciones reales</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-dark-slate mb-4">Inteligencia Emocional (Goleman)</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="text-primary mr-3" size={16} />
                    <span className="text-gray-700">Autoconciencia emocional</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-primary mr-3" size={16} />
                    <span className="text-gray-700">Autorregulación emocional</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-primary mr-3" size={16} />
                    <span className="text-gray-700">Empatía y habilidades sociales</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="text-primary mr-3" size={16} />
                    <span className="text-gray-700">Motivación intrínseca</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <img 
              src="https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400" 
              alt="Brain imaging showing neural networks" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
