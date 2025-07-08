import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";

interface QuizQuestion {
  id: string;
  question: string;
  options: { value: string; text: string; score: number }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "¿A qué edad comenzó a leer de forma fluida?",
    options: [
      { value: "1", text: "Antes de los 4 años", score: 1 },
      { value: "2", text: "Entre 4-5 años", score: 2 },
      { value: "3", text: "Entre 6-7 años", score: 3 },
      { value: "4", text: "Después de los 7 años", score: 4 }
    ]
  },
  {
    id: "q2",
    question: "¿Cómo describiría su capacidad de memoria?",
    options: [
      { value: "1", text: "Excepcional, recuerdo detalles desde muy temprana edad", score: 1 },
      { value: "2", text: "Muy buena, mejor que la mayoría", score: 2 },
      { value: "3", text: "Buena, dentro del promedio", score: 3 },
      { value: "4", text: "Regular, tengo dificultades ocasionales", score: 4 }
    ]
  },
  {
    id: "q3",
    question: "¿Cómo es su nivel de curiosidad e interés por aprender?",
    options: [
      { value: "1", text: "Extremadamente alto, siempre hago preguntas profundas", score: 1 },
      { value: "2", text: "Alto, me gusta explorar temas en profundidad", score: 2 },
      { value: "3", text: "Moderado, me intereso por algunos temas", score: 3 },
      { value: "4", text: "Bajo, prefiero actividades rutinarias", score: 4 }
    ]
  },
  {
    id: "q4",
    question: "¿Cómo maneja la resolución de problemas complejos?",
    options: [
      { value: "1", text: "Encuentro soluciones creativas rápidamente", score: 1 },
      { value: "2", text: "Soy bueno/a resolviendo problemas", score: 2 },
      { value: "3", text: "Resuelvo problemas con esfuerzo", score: 3 },
      { value: "4", text: "Prefiero que otros resuelvan los problemas", score: 4 }
    ]
  },
  {
    id: "q5",
    question: "¿Cómo describiría su sensibilidad emocional?",
    options: [
      { value: "1", text: "Muy alta, siento las emociones intensamente", score: 1 },
      { value: "2", text: "Alta, soy empático/a y sensible", score: 2 },
      { value: "3", text: "Moderada, equilibrada", score: 3 },
      { value: "4", text: "Baja, no me afectan mucho las emociones", score: 4 }
    ]
  }
];

export default function QuizComponent() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<{
    score: number;
    interpretation: string;
    colorClass: string;
  } | null>(null);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const calculateResult = () => {
    const answeredQuestions = Object.keys(answers);
    if (answeredQuestions.length === 0) {
      alert('Por favor, responda al menos una pregunta.');
      return;
    }

    let totalScore = 0;
    answeredQuestions.forEach(questionId => {
      const question = quizQuestions.find(q => q.id === questionId);
      const selectedOption = question?.options.find(opt => opt.value === answers[questionId]);
      if (selectedOption) {
        totalScore += selectedOption.score;
      }
    });

    const averageScore = totalScore / answeredQuestions.length;
    let interpretation = '';
    let colorClass = '';

    if (averageScore <= 1.5) {
      interpretation = `
        <h5 class="font-semibold text-green-600 mb-2">Indicadores Elevados de Superdotación</h5>
        <p class="text-gray-700 mb-3">
          Sus respuestas sugieren características altamente compatibles con la superdotación intelectual. 
          Se recomienda una evaluación profesional completa.
        </p>
        <div class="bg-green-50 p-3 rounded-lg">
          <p class="text-sm text-green-800">
            <strong>Recomendación:</strong> Consulte con un psicólogo especializado en superdotación 
            para una evaluación formal que incluya pruebas de CI y evaluación socioemocional.
          </p>
        </div>
      `;
      colorClass = 'border-green-400';
    } else if (averageScore <= 2.5) {
      interpretation = `
        <h5 class="font-semibold text-blue-600 mb-2">Indicadores Moderados</h5>
        <p class="text-gray-700 mb-3">
          Sus respuestas muestran algunas características asociadas con capacidades superiores. 
          Podría beneficiarse de una evaluación más detallada.
        </p>
        <div class="bg-blue-50 p-3 rounded-lg">
          <p class="text-sm text-blue-800">
            <strong>Recomendación:</strong> Considere realizar una evaluación psicológica 
            si experimenta desafíos académicos o sociales específicos.
          </p>
        </div>
      `;
      colorClass = 'border-blue-400';
    } else {
      interpretation = `
        <h5 class="font-semibold text-orange-600 mb-2">Perfil Dentro del Rango Típico</h5>
        <p class="text-gray-700 mb-3">
          Sus respuestas sugieren un perfil cognitivo y emocional dentro del rango típico. 
          Esto no excluye capacidades especiales en áreas específicas.
        </p>
        <div class="bg-orange-50 p-3 rounded-lg">
          <p class="text-sm text-orange-800">
            <strong>Nota:</strong> La superdotación puede manifestarse de diversas formas. 
            Si tiene inquietudes específicas, consulte con un profesional.
          </p>
        </div>
      `;
      colorClass = 'border-orange-400';
    }

    setResult({
      score: averageScore,
      interpretation,
      colorClass
    });
    setShowResult(true);
    
    // Scroll to result
    setTimeout(() => {
      document.getElementById('quiz-result')?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }, 100);
  };

  return (
    <Card className="shadow-lg mb-16">
      <CardContent className="p-8">
        <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
          Cuestionario de Detección Temprana
        </h3>
        <p className="text-gray-600 text-center mb-8">
          <em>Este cuestionario es únicamente informativo y no constituye un diagnóstico profesional</em>
        </p>
        
        <div className="space-y-6">
          {quizQuestions.map((question) => (
            <div key={question.id} className="space-y-4">
              <h4 className="font-semibold text-dark-slate">{question.question}</h4>
              <RadioGroup 
                value={answers[question.id] || ""} 
                onValueChange={(value) => handleAnswerChange(question.id, value)}
              >
                {question.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} />
                    <Label 
                      htmlFor={`${question.id}-${option.value}`} 
                      className="cursor-pointer flex-1 p-3 border rounded-lg quiz-option"
                    >
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            onClick={calculateResult}
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Calcular Resultado
          </Button>
        </div>

        {showResult && result && (
          <div 
            id="quiz-result"
            className={`mt-8 p-6 bg-gray-50 rounded-lg border-2 ${result.colorClass}`}
          >
            <h4 className="font-semibold text-dark-slate mb-4">Resultado del Cuestionario</h4>
            <div dangerouslySetInnerHTML={{ __html: result.interpretation }} />
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-start">
                <AlertCircle className="text-yellow-600 mr-2 mt-0.5" size={16} />
                <p className="text-sm text-yellow-800">
                  <strong>Importante:</strong> Este cuestionario es únicamente orientativo. Para una evaluación profesional, 
                  consulte con un psicólogo especializado en superdotación.
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
