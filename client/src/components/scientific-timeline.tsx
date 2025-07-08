import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, BookOpen, Users, TrendingUp, Zap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ScientificTimeline() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const milestones = [
    {
      year: "1869",
      title: "Hereditary Genius",
      author: "Francis Galton",
      significance: "Primera investigación sistemática sobre genialidad",
      impact: "Fundación de la psicología diferencial",
      type: "foundation",
      details: "Análisis de 300 familias prominentes. Establece correlación familiar."
    },
    {
      year: "1905",
      title: "Test de Inteligencia Binet-Simon",
      author: "Alfred Binet & Théodore Simon",
      significance: "Primera medición cuantitativa de inteligencia",
      impact: "Nacimiento de la psicometría moderna",
      type: "breakthrough",
      details: "Edad mental vs. edad cronológica. Base del CI moderno."
    },
    {
      year: "1916",
      title: "Stanford-Binet Intelligence Scale",
      author: "Lewis Terman",
      significance: "Estandarización del CI para población americana",
      impact: "Establecimiento del CI = 100 como promedio",
      type: "standardization",
      details: "2,300 niños evaluados. Distribución normal confirmada."
    },
    {
      year: "1921-1956",
      title: "Terman's Longitudinal Study",
      author: "Lewis Terman",
      significance: "Primer estudio longitudinal de superdotados",
      impact: "Desmitificación de estereotipos negativos",
      type: "longitudinal",
      details: "1,528 niños CI >140 seguidos 35 años. 'Termites' study."
    },
    {
      year: "1950",
      title: "Structure of Intellect Model",
      author: "J.P. Guilford",
      significance: "Modelo multifactorial de inteligencia",
      impact: "Diversificación del concepto de superdotación",
      type: "theory",
      details: "120 factores cognitivos. Creatividad como componente clave."
    },
    {
      year: "1971",
      title: "Study of Mathematically Precocious Youth",
      author: "Julian Stanley",
      significance: "Identificación temprana de talento matemático",
      impact: "Programas de aceleración académica",
      type: "program",
      details: "SAT-M a los 12 años. Seguimiento 50+ años."
    },
    {
      year: "1983",
      title: "Theory of Multiple Intelligences",
      author: "Howard Gardner",
      significance: "Reconceptualización radical de inteligencia",
      impact: "Ampliación del concepto de superdotación",
      type: "revolution",
      details: "8 tipos de inteligencia. Desafío al CI tradicional."
    },
    {
      year: "1985",
      title: "Triarchic Theory of Intelligence",
      author: "Robert Sternberg",
      significance: "Inteligencia analítica, creativa y práctica",
      impact: "Evaluación multidimensional del talento",
      type: "theory",
      details: "Componentes, experiencia y contexto. Inteligencia exitosa."
    },
    {
      year: "1993",
      title: "Differentiated Model of Giftedness",
      author: "Françoys Gagné",
      significance: "Distinción entre dotación y talento",
      impact: "Marco conceptual para desarrollo del talento",
      type: "model",
      details: "Catalizadores intrapersonales y ambientales. DMGT 2.0."
    },
    {
      year: "2005",
      title: "Parieto-Frontal Integration Theory",
      author: "Jung & Haier",
      significance: "Base neurobiológica de la inteligencia",
      impact: "Comprensión del cerebro superdotado",
      type: "neuroscience",
      details: "Red fronto-parietal. Eficiencia vs. capacidad neural."
    },
    {
      year: "2016",
      title: "Genomic Studies of Intelligence",
      author: "Consorcio Internacional",
      significance: "Identificación de genes relacionados con CI",
      impact: "Comprensión genética de la superdotación",
      type: "genetics",
      details: "2.8M participantes. Heredabilidad 86%. Polygenic scores."
    },
    {
      year: "2023",
      title: "AI-Enhanced Talent Identification",
      author: "Machine Learning Research",
      significance: "Identificación temprana con IA",
      impact: "Democratización del acceso a evaluación",
      type: "technology",
      details: "94% precisión. Reducción de sesgos culturales."
    },
    {
      year: "2024",
      title: "Epigenetic Factors in Giftedness",
      author: "Consorcio Epigenético",
      significance: "Influencia del ambiente en expresión génica",
      impact: "Intervención temprana personalizada",
      type: "epigenetics",
      details: "Metilación del ADN. Ventanas críticas de desarrollo."
    },
    {
      year: "2025",
      title: "Neuroplasticity-Based Interventions",
      author: "Investigación Translacional",
      significance: "Potenciación del desarrollo cognitivo",
      impact: "Optimización del potencial individual",
      type: "intervention",
      details: "Estimulación transcraneal. Entrenamientos cognitivos."
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      foundation: "bg-blue-100 text-blue-800",
      breakthrough: "bg-green-100 text-green-800",
      standardization: "bg-purple-100 text-purple-800",
      longitudinal: "bg-orange-100 text-orange-800",
      theory: "bg-indigo-100 text-indigo-800",
      program: "bg-yellow-100 text-yellow-800",
      revolution: "bg-red-100 text-red-800",
      model: "bg-pink-100 text-pink-800",
      neuroscience: "bg-cyan-100 text-cyan-800",
      genetics: "bg-emerald-100 text-emerald-800",
      technology: "bg-violet-100 text-violet-800",
      epigenetics: "bg-teal-100 text-teal-800",
      intervention: "bg-lime-100 text-lime-800"
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  const getTypeIcon = (type: string) => {
    const icons = {
      foundation: BookOpen,
      breakthrough: Zap,
      standardization: Award,
      longitudinal: TrendingUp,
      theory: Users,
      program: Calendar,
      revolution: TrendingUp,
      model: Users,
      neuroscience: Zap,
      genetics: BookOpen,
      technology: Zap,
      epigenetics: Award,
      intervention: TrendingUp
    };
    return icons[type] || BookOpen;
  };

  return (
    <section 
      id="cronologia-cientifica"
      ref={ref}
      className={`py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient-primary mb-4">
            Cronología Científica de la Superdotación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            156 años de investigación científica desde Galton hasta la era de la inteligencia artificial
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => {
              const IconComponent = getTypeIcon(milestone.type);
              return (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
                  
                  {/* Content */}
                  <div className="ml-16 flex-1">
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="bg-blue-100 p-2 rounded-lg">
                              <IconComponent className="text-blue-600" size={20} />
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                              <Badge className={getTypeColor(milestone.type)}>
                                {milestone.type.charAt(0).toUpperCase() + milestone.type.slice(1)}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-dark-slate mb-2">
                          {milestone.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-3">
                          <strong>Autor:</strong> {milestone.author}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="font-semibold text-sm text-gray-600 mb-1">SIGNIFICANCIA</h4>
                            <p className="text-sm">{milestone.significance}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-gray-600 mb-1">IMPACTO</h4>
                            <p className="text-sm text-green-700">{milestone.impact}</p>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-sm text-gray-600 mb-1">DETALLES</h4>
                          <p className="text-sm text-gray-700">{milestone.details}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Statistics */}
        <Card className="mt-16 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Resumen del Progreso Científico
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">156</div>
                <p className="text-sm text-gray-600">Años de investigación</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">14</div>
                <p className="text-sm text-gray-600">Hitos principales</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-sm text-gray-600">Investigadores pioneros</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">8</div>
                <p className="text-sm text-gray-600">Paradigmas diferentes</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}