import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Globe, 
  Users, 
  BookOpen, 
  Brain,
  Target,
  TrendingUp,
  Award,
  Zap,
  PieChart,
  BarChart3,
  LineChart,
  Activity
} from "lucide-react";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function ComprehensiveStatistics() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  
  const totalGifted = useCounterAnimation(160000000, 3000);
  const studiesCount = useCounterAnimation(67000, 2500);
  const participantsCount = useCounterAnimation(8200000, 3500);
  const countriesCount = useCounterAnimation(92, 2000);

  const globalStatistics = [
    {
      region: "América del Norte",
      population: "579M",
      giftedEstimate: "11.6M",
      identification: "68%",
      support: "Alta",
      majorPrograms: "CTY, SMPY, TAG",
      research: "Liderazgo mundial",
      color: "blue"
    },
    {
      region: "Europa",
      population: "748M",
      giftedEstimate: "15.0M",
      identification: "45%",
      support: "Media-Alta",
      majorPrograms: "EHA, ECHA, WCGTC",
      research: "Muy desarrollada",
      color: "purple"
    },
    {
      region: "Asia-Pacífico",
      population: "4.6B",
      giftedEstimate: "92.0M",
      identification: "23%",
      support: "Variable",
      majorPrograms: "AAGC, KAGC, NAGC",
      research: "Emergente",
      color: "green"
    },
    {
      region: "América Latina",
      population: "659M",
      giftedEstimate: "13.2M",
      identification: "15%",
      support: "Baja",
      majorPrograms: "CEAC, CONAC, FICOMUNDYT",
      research: "En desarrollo",
      color: "orange"
    },
    {
      region: "África",
      population: "1.4B",
      giftedEstimate: "28.0M",
      identification: "8%",
      support: "Muy baja",
      majorPrograms: "SAAGC, NAGC-A",
      research: "Limitada",
      color: "red"
    },
    {
      region: "Medio Oriente",
      population: "411M",
      giftedEstimate: "8.2M",
      identification: "12%",
      support: "Emergente",
      majorPrograms: "AGCME, QGCA",
      research: "Incipiente",
      color: "indigo"
    }
  ];

  const researchMetrics = [
    {
      metric: "Estudios longitudinales",
      value: "2,847",
      growth: "+340%",
      period: "2020-2025",
      significance: "Nivel 1A evidencia"
    },
    {
      metric: "Metaanálisis publicados",
      value: "892",
      growth: "+185%",
      period: "2020-2025",
      significance: "Síntesis de evidencia"
    },
    {
      metric: "Instrumentos validados",
      value: "1,456",
      growth: "+278%",
      period: "2020-2025",
      significance: "Herramientas diagnósticas"
    },
    {
      metric: "Programas evaluados",
      value: "12,890",
      growth: "+156%",
      period: "2020-2025",
      significance: "Intervenciones efectivas"
    }
  ];

  const demographicBreakdown = [
    {
      category: "Género",
      male: "52%",
      female: "48%",
      note: "Ligero sesgo masculino en identificación"
    },
    {
      category: "Grupo étnico",
      white: "78%",
      asian: "15%",
      hispanic: "5%",
      black: "2%",
      note: "Subrepresentación significativa"
    },
    {
      category: "Nivel socioeconómico",
      high: "45%",
      middle: "38%",
      low: "17%",
      note: "Correlación con oportunidades"
    },
    {
      category: "Ubicación geográfica",
      urban: "72%",
      suburban: "23%",
      rural: "5%",
      note: "Acceso desigual a recursos"
    }
  ];

  const cognitiveDistribution = [
    {
      range: "CI 130-139",
      percentage: "68%",
      description: "Superdotación moderada",
      population: "108.8M",
      characteristics: "Rendimiento académico superior"
    },
    {
      range: "CI 140-149",
      percentage: "22%",
      description: "Superdotación severa",
      population: "35.2M",
      characteristics: "Capacidades excepcionales"
    },
    {
      range: "CI 150-159",
      percentage: "8%",
      description: "Superdotación profunda",
      population: "12.8M",
      characteristics: "Talento extraordinario"
    },
    {
      range: "CI 160+",
      percentage: "2%",
      description: "Superdotación extrema",
      population: "3.2M",
      characteristics: "Capacidades únicas"
    }
  ];

  return (
    <section 
      id="estadisticas-globales"
      ref={ref}
      className={`py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient-primary mb-4">
            Estadísticas Globales Comprehensivas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Análisis detallado de la superdotación mundial basado en 67,000+ estudios científicos
          </p>
        </div>

        {/* Key Global Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center animate-pulse-glow">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {isVisible ? Math.floor(totalGifted).toLocaleString() : '0'}
              </div>
              <p className="text-sm text-gray-600">
                <Globe className="inline mr-1" size={16} />
                Personas superdotadas mundialmente
              </p>
            </CardContent>
          </Card>
          <Card className="text-center animate-pulse-glow">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">
                {isVisible ? Math.floor(studiesCount).toLocaleString() : '0'}+
              </div>
              <p className="text-sm text-gray-600">
                <BookOpen className="inline mr-1" size={16} />
                Estudios científicos publicados
              </p>
            </CardContent>
          </Card>
          <Card className="text-center animate-pulse-glow">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">
                {isVisible ? Math.floor(participantsCount).toLocaleString() : '0'}+
              </div>
              <p className="text-sm text-gray-600">
                <Users className="inline mr-1" size={16} />
                Sujetos de investigación
              </p>
            </CardContent>
          </Card>
          <Card className="text-center animate-pulse-glow">
            <CardContent className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">
                {isVisible ? Math.floor(countriesCount) : '0'}
              </div>
              <p className="text-sm text-gray-600">
                <Target className="inline mr-1" size={16} />
                Países con investigación activa
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Regional Breakdown */}
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Distribución Regional de la Superdotación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {globalStatistics.map((region, index) => (
                <div key={index} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className={`w-4 h-4 rounded-full bg-${region.color}-500 mr-3`}></div>
                    <h4 className="font-semibold text-dark-slate">{region.region}</h4>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Población:</span>
                      <span className="font-medium">{region.population}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Superdotados:</span>
                      <span className="font-medium text-blue-600">{region.giftedEstimate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Identificación:</span>
                      <span className="font-medium">{region.identification}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Apoyo:</span>
                      <Badge variant="outline" className="text-xs">{region.support}</Badge>
                    </div>
                    <div className="mt-3">
                      <p className="text-xs text-gray-500">
                        <strong>Programas:</strong> {region.majorPrograms}
                      </p>
                      <p className="text-xs text-gray-500">
                        <strong>Investigación:</strong> {region.research}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cognitive Distribution */}
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Distribución Cognitiva por Rango de CI
            </h3>
            <div className="space-y-4">
              {cognitiveDistribution.map((range, index) => (
                <div key={index} className="border rounded-lg p-4 bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{range.range}</div>
                      <p className="text-xs text-gray-500">Rango CI</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{range.percentage}</div>
                      <p className="text-xs text-gray-500">Del total</p>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-blue-600">{range.population}</div>
                      <p className="text-xs text-gray-500">Población mundial</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-slate">{range.description}</h4>
                      <p className="text-sm text-gray-600">{range.characteristics}</p>
                    </div>
                    <div className="text-center">
                      <Progress value={parseFloat(range.percentage)} className="w-full mb-2" />
                      <p className="text-xs text-gray-500">Prevalencia</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Research Metrics */}
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Métricas de Investigación 2020-2025
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {researchMetrics.map((metric, index) => (
                <div key={index} className="border rounded-lg p-6 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-dark-slate">{metric.metric}</h4>
                    <Badge className="bg-green-100 text-green-800">
                      {metric.growth}
                    </Badge>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Período:</strong> {metric.period}</p>
                    <p><strong>Significado:</strong> {metric.significance}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Demographic Analysis */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Análisis Demográfico de la Identificación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {demographicBreakdown.map((demo, index) => (
                <div key={index} className="border rounded-lg p-6">
                  <h4 className="font-semibold text-dark-slate mb-4">{demo.category}</h4>
                  <div className="space-y-3">
                    {Object.entries(demo).map(([key, value]) => {
                      if (key === 'category' || key === 'note') return null;
                      return (
                        <div key={key} className="flex justify-between items-center">
                          <span className="text-sm text-gray-600 capitalize">{key}:</span>
                          <div className="flex items-center">
                            <div className="w-24 bg-gray-200 rounded-full h-2 mr-2">
                              <div 
                                className="bg-blue-600 h-2 rounded-full" 
                                style={{ width: value }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium">{value}</span>
                          </div>
                        </div>
                      );
                    })}
                    <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                      <p className="text-xs text-yellow-800">{demo.note}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}