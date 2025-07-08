import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Eye, Activity } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function NeurologicalEvidence() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const neuralFindings = [
    {
      icon: Brain,
      title: "Estructura Cerebral",
      description: "Mayor grosor cortical en áreas prefrontales y temporales",
      evidence: "Jung & Haier (2007) - Neuroimagen",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Zap,
      title: "Conectividad Neural",
      description: "Redes neuronales más eficientes y menor activación",
      evidence: "Neubauer & Fink (2009) - EEG",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Eye,
      title: "Procesamiento Visual",
      description: "Activación diferencial en córtex visual y parietal",
      evidence: "Lee et al. (2006) - fMRI",
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Activity,
      title: "Metabolismo Cerebral",
      description: "Eficiencia en consumo de glucosa cerebral",
      evidence: "Haier et al. (1988) - PET",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  const developmentalStages = [
    {
      age: "0-3 años",
      characteristics: "Desarrollo acelerado del lenguaje y coordinación motora",
      percentage: "85% identificables"
    },
    {
      age: "4-6 años",
      characteristics: "Lectura precoz, curiosidad intelectual intensa",
      percentage: "70% identificables"
    },
    {
      age: "7-12 años",
      characteristics: "Rendimiento académico superior, intereses especializados",
      percentage: "60% identificables"
    },
    {
      age: "13-18 años",
      characteristics: "Pensamiento abstracto avanzado, perfeccionismo",
      percentage: "45% identificables"
    }
  ];

  return (
    <section 
      id="neurociencia"
      ref={ref}
      className={`py-20 bg-gradient-to-br from-slate-50 to-blue-50 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">Evidencia Neurológica</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Investigación neurocientífica sobre las bases biológicas de la superdotación
          </p>
        </div>

        {/* Hallazgos Neurológicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {neuralFindings.map((finding, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className={`${finding.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                  <finding.icon className={`${finding.color}`} size={32} />
                </div>
                <h3 className="font-semibold text-dark-slate mb-2">{finding.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{finding.description}</p>
                <p className="text-xs text-gray-500 font-medium">{finding.evidence}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Desarrollo Evolutivo */}
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Desarrollo Evolutivo de la Superdotación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentalStages.map((stage, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{stage.age.split('-')[0]}</span>
                  </div>
                  <h4 className="font-semibold text-dark-slate mb-2">{stage.age}</h4>
                  <p className="text-gray-600 text-sm mb-3">{stage.characteristics}</p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    {stage.percentage}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Teoría P-FIT */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-dark-slate mb-4">
                  Teoría P-FIT (Parieto-Frontal Integration Theory)
                </h3>
                <p className="text-gray-700 mb-6">
                  Jung y Haier (2007) propusieron que la inteligencia emerge de la integración eficiente 
                  entre las regiones parietales y frontales del cerebro, específicamente:
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                    <span><strong>Áreas de Brodmann 6, 9, 10:</strong> Planificación y working memory</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                    <span><strong>Áreas 39, 40:</strong> Procesamiento espacial y atención</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-500 w-2 h-2 rounded-full mt-2 mr-3"></div>
                    <span><strong>Área 37:</strong> Integración visual-semántica</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Brain imaging showing P-FIT networks" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Hallazgo clave:</strong> Los individuos superdotados muestran mayor 
                    conectividad entre estas regiones y menor activación global, sugiriendo 
                    procesamiento más eficiente.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}