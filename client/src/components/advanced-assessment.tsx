import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Timer, 
  Target, 
  CheckCircle,
  AlertCircle,
  BookOpen,
  Users,
  Lightbulb,
  TrendingUp
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function AdvancedAssessment() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [currentTest, setCurrentTest] = useState(0);
  const [responses, setResponses] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const advancedQuestions = [
    {
      id: 1,
      type: "Razonamiento Abstracto",
      question: "¿Cuál es el siguiente número en la secuencia: 2, 6, 18, 54, ...?",
      options: ["162", "108", "216", "324"],
      correct: "162",
      explanation: "Cada número se multiplica por 3: 2×3=6, 6×3=18, 18×3=54, 54×3=162"
    },
    {
      id: 2,
      type: "Analogías Verbales",
      question: "LIBRO es a BIBLIOTECA como CUADRO es a:",
      options: ["Marco", "Museo", "Pintor", "Color"],
      correct: "Museo",
      explanation: "La relación es de contenido a contenedor especializado"
    },
    {
      id: 3,
      type: "Pensamiento Crítico",
      question: "Si todos los A son B, y algunos B son C, ¿qué podemos concluir definitivamente?",
      options: [
        "Todos los A son C",
        "Algunos A son C", 
        "Ningún A es C",
        "No se puede determinar"
      ],
      correct: "No se puede determinar",
      explanation: "La lógica formal no permite esta conclusión sin información adicional"
    },
    {
      id: 4,
      type: "Creatividad",
      question: "¿Cuántos usos diferentes puedes imaginar para un clip? (Indicador de flexibilidad mental)",
      options: [
        "1-3 usos comunes",
        "4-7 usos variados",
        "8-12 usos creativos",
        "13+ usos muy originales"
      ],
      correct: "13+ usos muy originales",
      explanation: "Alta fluidez y originalidad sugiere pensamiento divergente superior"
    },
    {
      id: 5,
      type: "Metacognición",
      question: "Al resolver problemas complejos, ¿con qué frecuencia evalúas conscientemente tu estrategia?",
      options: [
        "Raramente",
        "Ocasionalmente",
        "Frecuentemente",
        "Constantemente, con autorregulación activa"
      ],
      correct: "Constantemente, con autorregulación activa",
      explanation: "La metacognición superior es característica de individuos superdotados"
    }
  ];

  const assessmentTools = [
    {
      icon: Brain,
      category: "Evaluación Cognitiva",
      tools: [
        {
          name: "WAIS-IV",
          description: "Escala de Inteligencia de Wechsler",
          age: "16-90 años",
          duration: "90 min",
          components: ["ICV", "IRP", "IMT", "IVP"],
          reliability: "α = .98"
        },
        {
          name: "Stanford-Binet 5",
          description: "Evaluación comprehensiva",
          age: "2-85 años", 
          duration: "45-75 min",
          components: ["FR", "CR", "QR", "VS", "WM"],
          reliability: "α = .95-.98"
        }
      ],
      color: "blue-500"
    },
    {
      icon: Target,
      category: "Evaluación Específica",
      tools: [
        {
          name: "Raven APM",
          description: "Matrices Progresivas Avanzadas",
          age: "11+ años",
          duration: "40 min",
          components: ["Set I", "Set II"],
          reliability: "α = .86-.94"
        },
        {
          name: "TTCT",
          description: "Test de Pensamiento Creativo",
          age: "5+ años",
          duration: "45 min",
          components: ["Fluidez", "Flexibilidad", "Originalidad"],
          reliability: "α = .85-.95"
        }
      ],
      color: "green-500"
    },
    {
      icon: Users,
      category: "Evaluación Socioemocional",
      tools: [
        {
          name: "SAGES-2",
          description: "Screening Assessment for Gifted Students",
          age: "5-14 años",
          duration: "30 min",
          components: ["Académico", "Intelectual", "Creativo"],
          reliability: "α = .92-.96"
        },
        {
          name: "GATES",
          description: "Gifted and Talented Evaluation Scales",
          age: "4-18 años",
          duration: "15 min",
          components: ["Intelectual", "Académico", "Creativo", "Liderazgo"],
          reliability: "α = .88-.95"
        }
      ],
      color: "purple-500"
    }
  ];

  const interpretationFramework = [
    {
      score: "130-139",
      classification: "Superdotación Moderada",
      prevalence: "2.1%",
      characteristics: "Capacidades superiores evidentes, beneficio de enriquecimiento",
      interventions: ["Agrupamiento flexible", "Enriquecimiento curricular", "Mentoría"]
    },
    {
      score: "140-149", 
      classification: "Superdotación Alta",
      prevalence: "0.4%",
      characteristics: "Capacidades muy superiores, necesidades educativas especiales",
      interventions: ["Aceleración académica", "Programas especializados", "Diferenciación profunda"]
    },
    {
      score: "150-159",
      classification: "Superdotación Excepcional", 
      prevalence: "0.1%",
      characteristics: "Capacidades excepcionales, alto riesgo de subrendimiento",
      interventions: ["Aceleración radical", "Educación individualizada", "Apoyo socioemocional"]
    },
    {
      score: "160+",
      classification: "Superdotación Profunda",
      prevalence: "0.003%",
      characteristics: "Capacidades extraordinarias, necesidades únicas",
      interventions: ["Programa altamente individualizado", "Mentores especializados", "Apoyo intensivo"]
    }
  ];

  const handleAnswer = (questionId: number, answer: string) => {
    setResponses(prev => ({ ...prev, [questionId]: answer }));
  };

  const calculateResults = () => {
    let correct = 0;
    advancedQuestions.forEach(q => {
      if (responses[q.id] === q.correct) correct++;
    });
    
    const percentage = (correct / advancedQuestions.length) * 100;
    return {
      correct,
      total: advancedQuestions.length,
      percentage,
      interpretation: percentage >= 80 ? "Indicadores fuertes de capacidades superiores" :
                     percentage >= 60 ? "Indicadores moderados, evaluación recomendada" :
                     "Perfil dentro del rango típico"
    };
  };

  return (
    <section 
      id="evaluacion-avanzada"
      ref={ref}
      className={`py-20 bg-gradient-to-br from-indigo-50 to-cyan-50 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">Evaluación Avanzada</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instrumentos especializados y metodología científica para identificación precisa
          </p>
        </div>

        {/* Mini Assessment Interactivo */}
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Mini-Evaluación Cognitiva Interactiva
            </h3>
            
            {!showResults ? (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <Progress value={((currentTest + 1) / advancedQuestions.length) * 100} className="flex-1 mr-4" />
                  <span className="text-sm text-gray-600">
                    {currentTest + 1} de {advancedQuestions.length}
                  </span>
                </div>

                <div className="space-y-4">
                  <Badge variant="outline" className="mb-2">
                    {advancedQuestions[currentTest].type}
                  </Badge>
                  <h4 className="text-lg font-semibold text-dark-slate">
                    {advancedQuestions[currentTest].question}
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {advancedQuestions[currentTest].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(advancedQuestions[currentTest].id, option)}
                        className={`p-3 text-left border rounded-lg transition-colors ${
                          responses[advancedQuestions[currentTest].id] === option
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentTest(Math.max(0, currentTest - 1))}
                    disabled={currentTest === 0}
                  >
                    Anterior
                  </Button>
                  
                  {currentTest < advancedQuestions.length - 1 ? (
                    <Button
                      onClick={() => setCurrentTest(currentTest + 1)}
                      disabled={!responses[advancedQuestions[currentTest].id]}
                    >
                      Siguiente
                    </Button>
                  ) : (
                    <Button
                      onClick={() => setShowResults(true)}
                      disabled={Object.keys(responses).length < advancedQuestions.length}
                    >
                      Ver Resultados
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {calculateResults().percentage.toFixed(0)}%
                  </div>
                  <p className="text-gray-600">{calculateResults().interpretation}</p>
                </div>

                <div className="space-y-4">
                  {advancedQuestions.map((q, idx) => (
                    <div key={q.id} className="border rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        {responses[q.id] === q.correct ? (
                          <CheckCircle className="text-green-500 mt-1" size={20} />
                        ) : (
                          <AlertCircle className="text-red-500 mt-1" size={20} />
                        )}
                        <div className="flex-1">
                          <p className="font-medium">{q.question}</p>
                          <p className="text-sm text-gray-600 mt-1">
                            <strong>Tu respuesta:</strong> {responses[q.id]}
                          </p>
                          <p className="text-sm text-green-600">
                            <strong>Respuesta correcta:</strong> {q.correct}
                          </p>
                          <p className="text-xs text-gray-500 mt-2">{q.explanation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Nota:</strong> Esta evaluación es únicamente ilustrativa. Para una evaluación 
                    profesional completa, consulte con un psicólogo especializado.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instrumentos de Evaluación */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {assessmentTools.map((category, index) => (
            <Card key={index} className="shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`bg-${category.color}/10 w-12 h-12 rounded-lg flex items-center justify-center mr-3`}>
                    <category.icon className={`text-${category.color}`} size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-dark-slate">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.tools.map((tool, idx) => (
                    <div key={idx} className="border-l-4 border-gray-200 pl-4">
                      <h4 className="font-semibold text-dark-slate text-sm">{tool.name}</h4>
                      <p className="text-xs text-gray-600 mb-2">{tool.description}</p>
                      <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                        <div>Edad: {tool.age}</div>
                        <div>Duración: {tool.duration}</div>
                        <div>Confiabilidad: {tool.reliability}</div>
                        <div>Componentes: {tool.components.join(", ")}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Marco de Interpretación */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Marco de Interpretación CI
            </h3>
            <div className="space-y-4">
              {interpretationFramework.map((level, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-xl font-bold text-primary">{level.score}</div>
                      <p className="text-xs text-gray-500">Rango CI</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-slate">{level.classification}</h4>
                      <p className="text-sm text-gray-600">Prevalencia: {level.prevalence}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-700">{level.characteristics}</p>
                    </div>
                    <div>
                      <div className="space-y-1">
                        {level.interventions.map((intervention, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs mr-1">
                            {intervention}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Criterio DSM-5-TR:</strong> La superdotación intelectual se define como capacidades 
                significativamente superiores (2+ desviaciones estándar) en uno o más dominios cognitivos.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}