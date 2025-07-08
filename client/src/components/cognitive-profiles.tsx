import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Brain, 
  Calculator, 
  Languages, 
  Music, 
  Palette, 
  Users2, 
  Target,
  TrendingUp,
  Eye,
  Lightbulb
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function CognitiveProfiles() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const cognitiveProfiles = [
    {
      icon: Calculator,
      title: "Perfil Matemático-Lógico",
      prevalence: "28%",
      characteristics: [
        "Razonamiento abstracto superior",
        "Detección de patrones complejos",
        "Resolución algorítmica eficiente",
        "Memoria de trabajo excepcional"
      ],
      neuralCorrelates: "Corteza parietal superior, área intraparietal",
      assessments: ["WAIS-IV Matrices", "Ravens APM", "Spatial Relations"],
      color: "blue-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Languages,
      title: "Perfil Verbal-Lingüístico",
      prevalence: "35%",
      characteristics: [
        "Vocabulario extenso y preciso",
        "Comprensión verbal superior",
        "Fluidez verbal excepcional",
        "Procesamiento semántico rápido"
      ],
      neuralCorrelates: "Área de Broca, Wernicke, fascículo arcuado",
      assessments: ["WAIS-IV Comprensión Verbal", "PPVT-4", "CELF-5"],
      color: "green-500",
      bgColor: "bg-green-50"
    },
    {
      icon: Eye,
      title: "Perfil Visoespacial",
      prevalence: "22%",
      characteristics: [
        "Rotación mental superior",
        "Imaginería visual compleja",
        "Navegación espacial precisa",
        "Integración visomotora avanzada"
      ],
      neuralCorrelates: "Corteza parietal posterior, precúneo",
      assessments: ["Block Design", "Mental Rotation Test", "BVRT"],
      color: "purple-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Palette,
      title: "Perfil Creativo-Divergente",
      prevalence: "18%",
      characteristics: [
        "Pensamiento divergente fluido",
        "Originalidad conceptual alta",
        "Flexibilidad cognitiva superior",
        "Asociaciones remotas frecuentes"
      ],
      neuralCorrelates: "Red de modo por defecto, córtex cingulado anterior",
      assessments: ["Torrance TTCT", "RAT", "Alternative Uses Task"],
      color: "orange-500",
      bgColor: "bg-orange-50"
    }
  ];

  const executiveFunctions = [
    {
      function: "Memoria de Trabajo",
      giftedScore: 142,
      averageScore: 100,
      description: "Capacidad para mantener y manipular información mentalmente"
    },
    {
      function: "Flexibilidad Cognitiva",
      giftedScore: 138,
      averageScore: 100,
      description: "Habilidad para cambiar entre diferentes marcos conceptuales"
    },
    {
      function: "Control Inhibitorio",
      giftedScore: 128,
      averageScore: 100,
      description: "Capacidad para suprimir respuestas automáticas inadecuadas"
    },
    {
      function: "Velocidad Procesamiento",
      giftedScore: 135,
      averageScore: 100,
      description: "Rapidez en tareas cognitivas simples"
    }
  ];

  const developmentalAsynchrony = [
    {
      domain: "Desarrollo Intelectual",
      giftedAge: "12 años",
      chronologicalAge: "8 años",
      gap: "+4 años",
      impact: "Alto rendimiento académico, aburrimiento en clase"
    },
    {
      domain: "Desarrollo Emocional",
      giftedAge: "6 años",
      chronologicalAge: "8 años",
      gap: "-2 años",
      impact: "Dificultades en regulación emocional, intensidad afectiva"
    },
    {
      domain: "Desarrollo Social",
      giftedAge: "7 años",
      chronologicalAge: "8 años",
      gap: "-1 año",
      impact: "Problemas de ajuste social, preferencia por adultos"
    },
    {
      domain: "Desarrollo Motor",
      giftedAge: "8 años",
      chronologicalAge: "8 años",
      gap: "0 años",
      impact: "Desarrollo típico en habilidades motoras finas y gruesas"
    }
  ];

  return (
    <section 
      id="perfiles-cognitivos"
      ref={ref}
      className={`py-20 bg-gradient-to-br from-amber-50 to-yellow-50 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">Perfiles Cognitivos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Heterogeneidad en manifestaciones de la superdotación según dominios cognitivos
          </p>
        </div>

        {/* Perfiles Cognitivos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {cognitiveProfiles.map((profile, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`${profile.bgColor} w-16 h-16 rounded-lg flex items-center justify-center`}>
                    <profile.icon className={`text-${profile.color}`} size={28} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-dark-slate">{profile.title}</h3>
                      <Badge variant="secondary" className="text-sm">
                        {profile.prevalence}
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-gray-800 mb-2">Características:</h4>
                        <ul className="space-y-1">
                          {profile.characteristics.map((char, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <div className={`bg-${profile.color} w-1.5 h-1.5 rounded-full mt-2 mr-2`}></div>
                              {char}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="text-xs text-gray-500">
                        <p><strong>Correlatos neurales:</strong> {profile.neuralCorrelates}</p>
                        <p><strong>Evaluaciones:</strong> {profile.assessments.join(", ")}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Funciones Ejecutivas */}
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Funciones Ejecutivas Superiores
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Comparación de rendimiento en funciones ejecutivas (Población superdotada vs. promedio)
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {executiveFunctions.map((func, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-semibold text-dark-slate">{func.function}</h4>
                    <div className="text-right">
                      <span className="text-lg font-bold text-primary">{func.giftedScore}</span>
                      <span className="text-sm text-gray-500 ml-1">vs {func.averageScore}</span>
                    </div>
                  </div>
                  <Progress 
                    value={(func.giftedScore / 160) * 100} 
                    className="h-3"
                  />
                  <p className="text-sm text-gray-600">{func.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Fuente:</strong> Steiner, H. H., & Carr, M. (2003). Cognitive development in gifted children. 
                Developmental Psychology, 39(1), 78-91.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Asincronía del Desarrollo */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Asincronía del Desarrollo (Caso ejemplo: 8 años cronológicos)
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Discrepancia entre edad cronológica y desarrollo en diferentes dominios
            </p>
            <div className="space-y-6">
              {developmentalAsynchrony.map((domain, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div>
                      <h4 className="font-semibold text-dark-slate">{domain.domain}</h4>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{domain.giftedAge}</div>
                      <p className="text-xs text-gray-500">Edad Funcional</p>
                    </div>
                    <div className="text-center">
                      <Badge 
                        variant={domain.gap.startsWith('+') ? 'default' : 'destructive'}
                        className="text-sm"
                      >
                        {domain.gap}
                      </Badge>
                      <p className="text-xs text-gray-500 mt-1">Diferencia</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      {domain.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Concepto de Silverman:</strong> La asincronía del desarrollo es una característica 
                fundamental de la superdotación que explica muchos de los desafíos socioemocionales.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}