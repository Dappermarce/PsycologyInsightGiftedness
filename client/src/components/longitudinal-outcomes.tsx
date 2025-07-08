import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Award, Heart, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function LongitudinalOutcomes() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const termStudyData = [
    {
      study: "Terman Study (1925-2010)",
      participants: "1,528 individuos",
      findings: "85% logros profesionales excepcionales",
      impact: "Fundó la psicología moderna de la superdotación"
    },
    {
      study: "SMPY (1971-presente)",
      participants: "5,000+ individuos",
      findings: "Top 1% CI → 18x más patentes",
      impact: "Predicción a 50 años de logros STEM"
    },
    {
      study: "Estudio Múnich (1985-2020)",
      participants: "1,200 individuos",
      findings: "78% satisfacción vital alta",
      impact: "Factores de bienestar a largo plazo"
    }
  ];

  const careerOutcomes = [
    {
      icon: TrendingUp,
      category: "Liderazgo Empresarial",
      percentage: "42%",
      details: "CEO/Fundadores de empresas Fortune 500",
      color: "text-blue-500"
    },
    {
      icon: Award,
      category: "Investigación Científica",
      percentage: "38%",
      details: "Publicaciones en revistas tier 1",
      color: "text-green-500"
    },
    {
      icon: Heart,
      category: "Profesiones Sociales",
      percentage: "25%",
      details: "Medicina, educación, trabajo social",
      color: "text-purple-500"
    },
    {
      icon: Users,
      category: "Artes y Humanidades",
      percentage: "18%",
      details: "Reconocimiento nacional/internacional",
      color: "text-orange-500"
    }
  ];

  const developmentalChallenges = [
    {
      age: "Infancia (3-8 años)",
      challenge: "Asincronía del desarrollo",
      prevalence: "85%",
      intervention: "Aceleración selectiva"
    },
    {
      age: "Adolescencia (13-18 años)",
      challenge: "Crisis existencial",
      prevalence: "65%",
      intervention: "Consejería especializada"
    },
    {
      age: "Adultez joven (19-25 años)",
      challenge: "Síndrome del impostor",
      prevalence: "58%",
      intervention: "Mentoría profesional"
    },
    {
      age: "Adultez (26-40 años)",
      challenge: "Multipotencialidad",
      prevalence: "47%",
      intervention: "Coaching de carrera"
    }
  ];

  const socialEmotionalData = [
    {
      factor: "Aislamiento Social",
      childhood: "45%",
      adulthood: "28%",
      trend: "Mejora"
    },
    {
      factor: "Ansiedad/Depresión",
      childhood: "32%",
      adulthood: "25%",
      trend: "Estable"
    },
    {
      factor: "Perfeccionismo",
      childhood: "78%",
      adulthood: "65%",
      trend: "Persistente"
    },
    {
      factor: "Satisfacción Relacional",
      childhood: "55%",
      adulthood: "82%",
      trend: "Mejora significativa"
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-20 bg-gradient-to-br from-green-50 to-teal-50 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">Trayectoria Vital</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Seguimiento longitudinal de individuos superdotados a lo largo de décadas
          </p>
        </div>

        {/* Estudios Longitudinales */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {termStudyData.map((study, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-dark-slate mb-3">{study.study}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Participantes:</span>
                    <span className="font-medium">{study.participants}</span>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800 font-medium">{study.findings}</p>
                  </div>
                  <p className="text-xs text-gray-500">{study.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resultados Profesionales */}
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Logros Profesionales a 30 años
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {careerOutcomes.map((outcome, index) => (
                <div key={index} className="text-center">
                  <div className={`bg-${outcome.color.split('-')[1]}/10 w-20 h-20 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <outcome.icon className={`${outcome.color}`} size={32} />
                  </div>
                  <div className="text-3xl font-bold text-dark-slate mb-2">{outcome.percentage}</div>
                  <h4 className="font-semibold text-dark-slate mb-2">{outcome.category}</h4>
                  <p className="text-gray-600 text-sm">{outcome.details}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Desafíos del Desarrollo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-dark-slate mb-6">
                Desafíos por Etapa Vital
              </h3>
              <div className="space-y-4">
                {developmentalChallenges.map((challenge, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-dark-slate">{challenge.age}</h4>
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                        {challenge.prevalence}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-1">{challenge.challenge}</p>
                    <p className="text-green-600 text-xs font-medium">
                      Intervención: {challenge.intervention}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-dark-slate mb-6">
                Evolución Socioemocional
              </h3>
              <div className="space-y-4">
                {socialEmotionalData.map((data, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-dark-slate">{data.factor}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        data.trend === 'Mejora' ? 'bg-green-100 text-green-800' :
                        data.trend === 'Mejora significativa' ? 'bg-blue-100 text-blue-800' :
                        data.trend === 'Estable' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {data.trend}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <div className="flex justify-between text-sm">
                          <span>Infancia</span>
                          <span className="font-medium">{data.childhood}</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-red-400 h-2 rounded-full" 
                            style={{ width: data.childhood }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-sm">
                          <span>Adultez</span>
                          <span className="font-medium">{data.adulthood}</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-green-400 h-2 rounded-full" 
                            style={{ width: data.adulthood }}
                          ></div>
                        </div>
                      </div>
                    </div>
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