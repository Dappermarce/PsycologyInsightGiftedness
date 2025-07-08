import { Card, CardContent } from "@/components/ui/card";
import QuizComponent from "./quiz-component";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function EvaluationSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const intelligenceTests = [
    {
      name: "WAIS-IV (Adultos)",
      description: "Escala de Inteligencia de Wechsler para Adultos",
      ageRange: "16-90 años",
      duration: "90 min",
      color: "border-primary"
    },
    {
      name: "WISC-V (Niños)",
      description: "Escala de Inteligencia de Wechsler para Niños",
      ageRange: "6-16 años",
      duration: "65 min",
      color: "border-sky-blue"
    },
    {
      name: "Stanford-Binet 5",
      description: "Evaluación comprehensiva de inteligencia",
      ageRange: "2-85 años",
      duration: "45-75 min",
      color: "border-green-500"
    }
  ];

  const complementaryTests = [
    {
      name: "Evaluación Creatividad",
      description: "Test de Pensamiento Creativo de Torrance",
      color: "border-purple-500"
    },
    {
      name: "Escalas de Renzulli",
      description: "Evaluación de características comportamentales",
      color: "border-orange-500"
    },
    {
      name: "Perfil Socioemocional",
      description: "Evaluación de aspectos emocionales y sociales",
      color: "border-red-500"
    }
  ];

  return (
    <section 
      id="evaluacion" 
      ref={ref}
      className={`py-20 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">Evaluación Psicológica</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Herramientas y métodos para la identificación y evaluación de la superdotación
          </p>
        </div>

        {/* Interactive Quiz */}
        <QuizComponent />

        {/* Pruebas Profesionales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-dark-slate mb-4">Pruebas de Inteligencia</h3>
              <div className="space-y-4">
                {intelligenceTests.map((test, index) => (
                  <div key={index} className={`border-l-4 ${test.color} pl-4`}>
                    <h4 className="font-semibold text-dark-slate">{test.name}</h4>
                    <p className="text-gray-600 text-sm">{test.description}</p>
                    <p className="text-gray-500 text-xs mt-1">
                      Edad: {test.ageRange} | Duración: {test.duration}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-dark-slate mb-4">Evaluación Complementaria</h3>
              <div className="space-y-4">
                {complementaryTests.map((test, index) => (
                  <div key={index} className={`border-l-4 ${test.color} pl-4`}>
                    <h4 className="font-semibold text-dark-slate">{test.name}</h4>
                    <p className="text-gray-600 text-sm">{test.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
