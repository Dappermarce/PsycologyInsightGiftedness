import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Users, Brain } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function PsychiatrySection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const commonConditions = [
    {
      name: "TDAH (Trastorno por Déficit de Atención e Hiperactividad)",
      prevalence: "5-8% en población superdotada"
    },
    {
      name: "Trastorno del Espectro Autista (TEA)",
      prevalence: "2-3% en población superdotada"
    },
    {
      name: "Dislexia",
      prevalence: "3-5% en población superdotada"
    },
    {
      name: "Ansiedad y Depresión",
      prevalence: "10-12% en población superdotada"
    }
  ];

  const socioEmotionalChallenges = [
    {
      icon: AlertTriangle,
      title: "Perfeccionismo",
      description: "Expectativas excesivamente altas que pueden generar ansiedad y procrastinación.",
      color: "text-red-500"
    },
    {
      icon: Users,
      title: "Aislamiento Social",
      description: "Dificultades para relacionarse con pares de su edad cronológica.",
      color: "text-orange-500"
    },
    {
      icon: Brain,
      title: "Sobreexcitabilidad",
      description: "Intensidad emocional, sensorial e intelectual elevada según Dabrowski.",
      color: "text-purple-500"
    }
  ];

  return (
    <section 
      id="psiquiatria" 
      ref={ref}
      className={`py-20 bg-light-gray section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">Psiquiatría y Superdotación</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aspectos médicos y clínicos relacionados con la superdotación intelectual
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-dark-slate">Doble Excepcionalidad</h3>
            <p className="text-gray-700 leading-relaxed">
              La doble excepcionalidad se refiere a individuos que son tanto superdotados como tienen 
              alguna discapacidad o trastorno del desarrollo. Aproximadamente el 10-15% de personas 
              superdotadas presentan esta condición.
            </p>
            
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h4 className="font-semibold text-primary mb-4">Condiciones Comunes:</h4>
                <div className="space-y-3">
                  {commonConditions.map((condition, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-primary w-2 h-2 rounded-full mt-2 mr-3"></div>
                      <div>
                        <p className="font-medium">{condition.name}</p>
                        <p className="text-sm text-gray-600">Prevalencia: {condition.prevalence}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1559131397-f94da358f7ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Medical professional examining brain scans" 
              className="rounded-xl shadow-lg w-full"
            />
            
            <Card className="bg-sky-blue/5 border-sky-blue/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-sky-blue mb-4">Intervención Multidisciplinaria</h4>
                <p className="text-gray-700 mb-4">
                  El tratamiento de la doble excepcionalidad requiere un enfoque integral que combine:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-sky-blue w-2 h-2 rounded-full mt-2 mr-3"></div>
                    Evaluación neuropsicológica completa
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-blue w-2 h-2 rounded-full mt-2 mr-3"></div>
                    Terapia cognitivo-conductual
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-blue w-2 h-2 rounded-full mt-2 mr-3"></div>
                    Apoyo educativo especializado
                  </li>
                  <li className="flex items-start">
                    <div className="bg-sky-blue w-2 h-2 rounded-full mt-2 mr-3"></div>
                    Medicación cuando sea necesaria
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Desafíos Socioemocionales */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6">Desafíos Socioemocionales</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {socioEmotionalChallenges.map((challenge, index) => (
                <div key={index} className="text-center">
                  <div className={`bg-${challenge.color.split('-')[1]}/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <challenge.icon className={`${challenge.color}`} size={24} />
                  </div>
                  <h4 className="font-semibold text-dark-slate mb-2">{challenge.title}</h4>
                  <p className="text-gray-600 text-sm">{challenge.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
