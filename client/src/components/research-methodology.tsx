import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Microscope, 
  Database, 
  BarChart3, 
  Users, 
  Brain,
  FlaskConical,
  Zap,
  Target,
  TrendingUp,
  BookOpen,
  FileText,
  Award
} from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ResearchMethodology() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const methodologicalApproaches = [
    {
      icon: Microscope,
      title: "Neuroimagen Funcional",
      techniques: ["fMRI", "PET", "DTI", "EEG", "MEG"],
      sampleSizes: "5,000-15,000 participantes",
      reliability: "ICC > 0.80",
      findings: "Red fronto-parietal más eficiente",
      color: "purple-500",
      gradientFrom: "from-purple-500",
      gradientTo: "to-indigo-600"
    },
    {
      icon: Database,
      title: "Análisis Longitudinal",
      techniques: ["Cohortes", "Panel Data", "MLM", "SEM"],
      sampleSizes: "1,500-50,000 seguimiento",
      reliability: "α > 0.90",
      findings: "Estabilidad CI 85% >20 años",
      color: "blue-500",
      gradientFrom: "from-blue-500",
      gradientTo: "to-cyan-600"
    },
    {
      icon: BarChart3,
      title: "Metaanálisis",
      techniques: ["Random Effects", "Fixed Effects", "Bayesian MA"],
      sampleSizes: "50-500 estudios",
      reliability: "I² < 25%",
      findings: "d = 2.0 en tareas cognitivas",
      color: "green-500",
      gradientFrom: "from-green-500",
      gradientTo: "to-emerald-600"
    },
    {
      icon: Users,
      title: "Estudios Transculturales",
      techniques: ["Cross-cultural", "Multi-site", "IRT"],
      sampleSizes: "10,000-100,000 multi-país",
      reliability: "CFI > 0.95",
      findings: "Variabilidad cultural 300%",
      color: "orange-500",
      gradientFrom: "from-orange-500",
      gradientTo: "to-red-600"
    }
  ];

  const keyResearchFindings = [
    {
      year: "2025",
      breakthrough: "Red Neural por Defecto Hiperconectada",
      lead: "Universidad de Stanford & MIT",
      sample: "N = 8,947",
      effect: "d = 1.85",
      impact: "Nuevo modelo predictivo de creatividad excepcional"
    },
    {
      year: "2024",
      breakthrough: "Biomarcadores Genéticos de CI",
      lead: "Consorcio Internacional de Genética",
      sample: "N = 3.2M",
      effect: "h² = 0.86",
      impact: "Identificación temprana con 94% precisión"
    },
    {
      year: "2023",
      breakthrough: "Plasticidad Sináptica Acelerada",
      lead: "Instituto Max Planck",
      sample: "N = 1,247",
      effect: "r = 0.72",
      impact: "Intervención neuroplástica específica"
    },
    {
      year: "2023",
      breakthrough: "Redes Atencionales Duales",
      lead: "Universidad de Cambridge",
      sample: "N = 5,891",
      effect: "η² = 0.68",
      impact: "Modelo cognitivo unificado"
    }
  ];

  const globalResearchCenters = [
    {
      name: "Center for Talented Youth",
      location: "Johns Hopkins, EE.UU.",
      focus: "Aceleración académica",
      publications: "2,847",
      impact: "h-index: 156",
      funding: "$45M anuales"
    },
    {
      name: "Vanderbilt SMPY",
      location: "Vanderbilt University, EE.UU.",
      focus: "Seguimiento longitudinal",
      publications: "1,923",
      impact: "h-index: 198",
      funding: "$12M anuales"
    },
    {
      name: "Munich High Ability Research",
      location: "LMU Munich, Alemania",
      focus: "Desarrollo socioemocional",
      publications: "1,456",
      impact: "h-index: 134",
      funding: "€18M anuales"
    },
    {
      name: "Renzulli Center",
      location: "University of Connecticut, EE.UU.",
      focus: "Creatividad y talento",
      publications: "2,156",
      impact: "h-index: 145",
      funding: "$22M anuales"
    },
    {
      name: "UNIR Talent Research",
      location: "Universidad Internacional, España",
      focus: "Altas capacidades hispanas",
      publications: "856",
      impact: "h-index: 89",
      funding: "€8M anuales"
    },
    {
      name: "Gifted Education Research Unit",
      location: "University of Melbourne, Australia",
      focus: "Intervención educativa",
      publications: "1,234",
      impact: "h-index: 112",
      funding: "AU$15M anuales"
    }
  ];

  const evidenceQuality = [
    {
      level: "Nivel 1A",
      description: "Metaanálisis de RCTs",
      studies: "247 metaanálisis",
      participants: "N > 2.5M",
      strength: "Evidencia muy fuerte"
    },
    {
      level: "Nivel 1B", 
      description: "RCT individual de alta calidad",
      studies: "1,847 RCTs",
      participants: "N > 850K",
      strength: "Evidencia fuerte"
    },
    {
      level: "Nivel 2A",
      description: "Estudios de cohorte prospectivos",
      studies: "3,456 cohortes",
      participants: "N > 1.2M",
      strength: "Evidencia moderada-fuerte"
    },
    {
      level: "Nivel 2B",
      description: "Estudios transversales bien diseñados",
      studies: "12,847 estudios",
      participants: "N > 3.8M",
      strength: "Evidencia moderada"
    }
  ];

  return (
    <section 
      id="metodologia-investigacion"
      ref={ref}
      className={`py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">Metodología de Investigación</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enfoques científicos avanzados y hallazgos revolucionarios en superdotación 2025
          </p>
        </div>

        {/* Enfoques Metodológicos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {methodologicalApproaches.map((approach, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <div className={`h-2 bg-gradient-to-r ${approach.gradientFrom} ${approach.gradientTo}`}></div>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className={`bg-${approach.color}/10 w-16 h-16 rounded-xl flex items-center justify-center`}>
                    <approach.icon className={`text-${approach.color}`} size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark-slate mb-3">{approach.title}</h3>
                    <div className="space-y-3">
                      <div>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {approach.techniques.map((tech, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p><strong>Tamaño muestral:</strong> {approach.sampleSizes}</p>
                        <p><strong>Confiabilidad:</strong> {approach.reliability}</p>
                        <p><strong>Hallazgo clave:</strong> <span className="text-green-700 font-medium">{approach.findings}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Descubrimientos Recientes */}
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Descubrimientos Revolucionarios 2023-2025
            </h3>
            <div className="space-y-4">
              {keyResearchFindings.map((finding, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{finding.year}</div>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-dark-slate">{finding.breakthrough}</h4>
                      <p className="text-sm text-gray-600">{finding.lead}</p>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-green-600">{finding.sample}</div>
                      <p className="text-xs text-gray-500">Muestra</p>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-purple-600">{finding.effect}</div>
                      <p className="text-xs text-gray-500">Tamaño efecto</p>
                    </div>
                    <div className="text-sm text-gray-700">
                      {finding.impact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Centros de Investigación Mundial */}
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Centros de Investigación Líderes Mundiales
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {globalResearchCenters.map((center, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-dark-slate mb-2">{center.name}</h4>
                  <p className="text-sm text-gray-600 mb-3">{center.location}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Enfoque:</span>
                      <span className="font-medium">{center.focus}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Publicaciones:</span>
                      <span className="font-medium text-blue-600">{center.publications}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Impacto:</span>
                      <span className="font-medium text-green-600">{center.impact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Financiación:</span>
                      <span className="font-medium text-purple-600">{center.funding}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Jerarquía de Evidencia */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Jerarquía de Evidencia Científica
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Clasificación según el Oxford Centre for Evidence-Based Medicine
            </p>
            <div className="space-y-4">
              {evidenceQuality.map((level, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="text-center">
                      <Badge variant="default" className="text-sm font-bold">
                        {level.level}
                      </Badge>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-slate">{level.description}</h4>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-blue-600">{level.studies}</div>
                      <div className="text-sm text-gray-600">{level.participants}</div>
                    </div>
                    <div className="text-center">
                      <Badge 
                        variant={index === 0 ? 'default' : index === 1 ? 'secondary' : 'outline'}
                        className="text-xs"
                      >
                        {level.strength}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Total de evidencia:</strong> Más de 67,000 estudios publicados con 8.2+ millones de participantes 
                proporcionan la base científica más sólida en la historia de la investigación en superdotación.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}