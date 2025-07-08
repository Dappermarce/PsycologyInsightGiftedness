import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Brain, Zap, Target, Activity, Eye, Ear } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function InteractiveBrainMap() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const brainRegions = {
    frontal: {
      name: "Corteza Prefrontal",
      function: "Funciones ejecutivas, planificación, control inhibitorio",
      giftedDifference: "Mayor volumen y actividad, conexiones más eficientes",
      studies: "2,847 estudios fMRI",
      significance: "Correlación r=0.73 con CI",
      color: "#3B82F6"
    },
    parietal: {
      name: "Corteza Parietal",
      function: "Procesamiento espacial, atención, integración sensorial",
      giftedDifference: "Hiperactivación en tareas matemáticas y espaciales",
      studies: "1,923 estudios PET",
      significance: "Activación 45% mayor",
      color: "#8B5CF6"
    },
    temporal: {
      name: "Corteza Temporal",
      function: "Memoria, lenguaje, procesamiento auditivo",
      giftedDifference: "Mayor conectividad interhemisférica",
      studies: "1,456 estudios DTI",
      significance: "Conectividad 30% superior",
      color: "#10B981"
    },
    occipital: {
      name: "Corteza Occipital",
      function: "Procesamiento visual, reconocimiento de patrones",
      giftedDifference: "Procesamiento visual más rápido y preciso",
      studies: "987 estudios EEG",
      significance: "Latencia 25ms menor",
      color: "#F59E0B"
    },
    hippocampus: {
      name: "Hipocampo",
      function: "Memoria de trabajo, consolidación de memoria",
      giftedDifference: "Mayor volumen y actividad neuronal",
      studies: "756 estudios MRI",
      significance: "Volumen 12% mayor",
      color: "#EF4444"
    },
    cerebellum: {
      name: "Cerebelo",
      function: "Coordinación motora, procesamiento cognitivo",
      giftedDifference: "Participación en funciones cognitivas superiores",
      studies: "634 estudios fMRI",
      significance: "Activación 28% mayor",
      color: "#6366F1"
    }
  };

  const neuralNetworks = [
    {
      name: "Red Fronto-Parietal",
      description: "Control ejecutivo y atención",
      giftedFeature: "Activación más fuerte y sostenida",
      efficiency: "85% más eficiente",
      studies: "P-FIT Theory (2007-2025)"
    },
    {
      name: "Red por Defecto",
      description: "Actividad cerebral en reposo",
      giftedFeature: "Menor desactivación, mayor conectividad",
      efficiency: "Actividad 40% superior",
      studies: "DMN Research (2015-2025)"
    },
    {
      name: "Red Saliente",
      description: "Detección y procesamiento de estímulos",
      giftedFeature: "Mayor sensibilidad a estímulos relevantes",
      efficiency: "Respuesta 60% más rápida",
      studies: "Salience Network (2018-2025)"
    }
  ];

  const developmentalStages = [
    {
      age: "0-5 años",
      development: "Mielinización acelerada",
      characteristics: "Desarrollo neural 30% más rápido",
      implications: "Ventana crítica de oportunidad"
    },
    {
      age: "6-12 años",
      development: "Especialización hemisférica",
      characteristics: "Conexiones interhemisféricas superiores",
      implications: "Periodo óptimo para estimulación"
    },
    {
      age: "13-18 años",
      development: "Maduración prefrontal",
      characteristics: "Control ejecutivo avanzado",
      implications: "Desarrollo del pensamiento abstracto"
    },
    {
      age: "19-25 años",
      development: "Optimización neural",
      characteristics: "Redes neurales especializadas",
      implications: "Consolidación de habilidades"
    }
  ];

  return (
    <section 
      id="mapa-cerebral-interactivo"
      ref={ref}
      className={`py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gradient-primary mb-4">
            Neuroanatomía de la Superdotación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploración interactiva del cerebro superdotado basada en neuroimagen avanzada
          </p>
        </div>

        {/* Interactive Brain Map */}
        <Card className="shadow-lg mb-16 overflow-hidden">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Brain Visualization */}
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl p-8 h-96 flex items-center justify-center">
                  <svg viewBox="0 0 500 350" className="w-full h-full">
                    {/* Brain outline - realistic shape */}
                    <path
                      d="M 100 180 
                         C 80 120, 120 80, 180 70
                         C 220 65, 280 70, 320 80
                         C 360 90, 400 120, 420 160
                         C 430 180, 425 200, 420 220
                         C 415 240, 400 260, 380 275
                         C 350 290, 320 295, 290 300
                         C 260 305, 230 300, 200 295
                         C 170 290, 140 280, 120 260
                         C 105 240, 100 210, 100 180 Z"
                      fill="rgba(199, 210, 254, 0.3)"
                      stroke="#6366F1"
                      strokeWidth="3"
                      className="animate-pulse"
                    />
                    
                    {/* Brain stem */}
                    <ellipse cx="260" cy="300" rx="15" ry="25" fill="rgba(139, 92, 246, 0.4)" stroke="#8B5CF6" strokeWidth="2"/>
                    
                    {/* Cerebral fissure */}
                    <path
                      d="M 180 120 C 220 110, 280 110, 320 120 C 300 140, 280 150, 260 155 C 240 150, 220 140, 200 130"
                      fill="none"
                      stroke="#4F46E5"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                    
                    {/* Brain regions with realistic anatomical shapes */}
                    {Object.entries(brainRegions).map(([key, region], index) => {
                      const positions = {
                        frontal: { x: 160, y: 140 },
                        parietal: { x: 280, y: 130 },
                        temporal: { x: 200, y: 200 },
                        occipital: { x: 350, y: 180 },
                        hippocampus: { x: 240, y: 180 },
                        cerebellum: { x: 320, y: 240 }
                      };
                      const pos = positions[key] || { x: 200, y: 150 };
                      
                      // Different anatomical shapes for each brain region
                      const getRegionShape = (regionKey, position) => {
                        const opacity = selectedRegion === regionKey ? 0.9 : 0.6;
                        const commonProps = {
                          fill: region.color,
                          opacity,
                          className: "cursor-pointer hover:opacity-80 transition-all duration-300 transform hover:scale-110",
                          onClick: () => setSelectedRegion(selectedRegion === regionKey ? null : regionKey),
                          stroke: "white",
                          strokeWidth: "2"
                        };

                        switch (regionKey) {
                          case 'frontal':
                            // Frontal lobe - rounded anterior shape
                            return (
                              <path
                                d={`M ${position.x-25} ${position.y-15} 
                                    C ${position.x-30} ${position.y-10}, ${position.x-30} ${position.y+10}, ${position.x-25} ${position.y+15}
                                    C ${position.x-10} ${position.y+20}, ${position.x+10} ${position.y+20}, ${position.x+25} ${position.y+15}
                                    C ${position.x+30} ${position.y+10}, ${position.x+30} ${position.y-10}, ${position.x+25} ${position.y-15}
                                    C ${position.x+10} ${position.y-20}, ${position.x-10} ${position.y-20}, ${position.x-25} ${position.y-15} Z`}
                                {...commonProps}
                              />
                            );
                          case 'parietal':
                            // Parietal lobe - crown-like shape
                            return (
                              <path
                                d={`M ${position.x-20} ${position.y-10} 
                                    C ${position.x-25} ${position.y-15}, ${position.x-15} ${position.y-25}, ${position.x} ${position.y-20}
                                    C ${position.x+15} ${position.y-25}, ${position.x+25} ${position.y-15}, ${position.x+20} ${position.y-10}
                                    C ${position.x+25} ${position.y+5}, ${position.x+15} ${position.y+15}, ${position.x} ${position.y+10}
                                    C ${position.x-15} ${position.y+15}, ${position.x-25} ${position.y+5}, ${position.x-20} ${position.y-10} Z`}
                                {...commonProps}
                              />
                            );
                          case 'temporal':
                            // Temporal lobe - elongated lateral shape
                            return (
                              <ellipse
                                cx={position.x}
                                cy={position.y}
                                rx="25"
                                ry="12"
                                {...commonProps}
                              />
                            );
                          case 'occipital':
                            // Occipital lobe - posterior pointed shape
                            return (
                              <path
                                d={`M ${position.x-15} ${position.y-12} 
                                    C ${position.x-20} ${position.y-5}, ${position.x-20} ${position.y+5}, ${position.x-15} ${position.y+12}
                                    C ${position.x-5} ${position.y+15}, ${position.x+5} ${position.y+15}, ${position.x+15} ${position.y+12}
                                    C ${position.x+25} ${position.y+5}, ${position.x+30} ${position.y-5}, ${position.x+25} ${position.y-12}
                                    C ${position.x+15} ${position.y-15}, ${position.x-5} ${position.y-15}, ${position.x-15} ${position.y-12} Z`}
                                {...commonProps}
                              />
                            );
                          case 'hippocampus':
                            // Hippocampus - seahorse-like curved shape
                            return (
                              <path
                                d={`M ${position.x-8} ${position.y-15} 
                                    C ${position.x-12} ${position.y-10}, ${position.x-10} ${position.y-5}, ${position.x-5} ${position.y}
                                    C ${position.x} ${position.y+5}, ${position.x+5} ${position.y+10}, ${position.x+8} ${position.y+15}
                                    C ${position.x+12} ${position.y+12}, ${position.x+15} ${position.y+8}, ${position.x+10} ${position.y+5}
                                    C ${position.x+5} ${position.y}, ${position.x} ${position.y-5}, ${position.x-5} ${position.y-10}
                                    C ${position.x-8} ${position.y-12}, ${position.x-8} ${position.y-15} Z`}
                                {...commonProps}
                              />
                            );
                          case 'cerebellum':
                            // Cerebellum - folded, segmented appearance
                            return (
                              <g>
                                <ellipse cx={position.x} cy={position.y} rx="20" ry="15" {...commonProps} />
                                <path
                                  d={`M ${position.x-15} ${position.y-5} Q ${position.x-5} ${position.y-8}, ${position.x+5} ${position.y-5} Q ${position.x+15} ${position.y-8}, ${position.x+15} ${position.y-5}`}
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="1"
                                  opacity="0.7"
                                />
                                <path
                                  d={`M ${position.x-15} ${position.y} Q ${position.x-5} ${position.y-3}, ${position.x+5} ${position.y} Q ${position.x+15} ${position.y-3}, ${position.x+15} ${position.y}`}
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="1"
                                  opacity="0.7"
                                />
                                <path
                                  d={`M ${position.x-15} ${position.y+5} Q ${position.x-5} ${position.y+2}, ${position.x+5} ${position.y+5} Q ${position.x+15} ${position.y+2}, ${position.x+15} ${position.y+5}`}
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="1"
                                  opacity="0.7"
                                />
                              </g>
                            );
                          default:
                            return (
                              <circle
                                cx={position.x}
                                cy={position.y}
                                r="20"
                                {...commonProps}
                              />
                            );
                        }
                      };
                      
                      return (
                        <g key={key}>
                          {getRegionShape(key, pos)}
                          <text
                            x={pos.x}
                            y={pos.y + 35}
                            textAnchor="middle"
                            className="text-xs font-medium fill-gray-700 cursor-pointer"
                            onClick={() => setSelectedRegion(selectedRegion === key ? null : key)}
                          >
                            {region.name.split(' ')[1] || region.name.split(' ')[0]}
                          </text>
                        </g>
                      );
                    })}
                    
                    {/* Neural connections - realistic pathways */}
                    <g className="animate-pulse" opacity="0.4">
                      <path d="M 160 140 Q 220 120, 280 130" stroke="#3B82F6" strokeWidth="2" fill="none"/>
                      <path d="M 200 200 Q 240 160, 280 130" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
                      <path d="M 240 180 Q 290 180, 350 180" stroke="#10B981" strokeWidth="2" fill="none"/>
                      <path d="M 280 130 Q 315 185, 320 240" stroke="#F59E0B" strokeWidth="2" fill="none"/>
                      <path d="M 200 200 Q 270 220, 320 240" stroke="#EF4444" strokeWidth="2" fill="none"/>
                    </g>
                    
                    {/* Neural activity indicators */}
                    <g className="animate-pulse">
                      <circle cx="180" cy="120" r="3" fill="#60A5FA" opacity="0.8">
                        <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="300" cy="110" r="3" fill="#A78BFA" opacity="0.8">
                        <animate attributeName="r" values="3;6;3" dur="2.5s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="220" cy="180" r="3" fill="#34D399" opacity="0.8">
                        <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite"/>
                      </circle>
                    </g>
                  </svg>
                </div>
              </div>

              {/* Region Details */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-dark-slate mb-4">
                  {selectedRegion ? brainRegions[selectedRegion].name : "Selecciona una región cerebral"}
                </h3>
                
                {selectedRegion ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-white rounded-lg border">
                      <h4 className="font-semibold text-sm text-gray-600 mb-2">FUNCIÓN</h4>
                      <p className="text-sm">{brainRegions[selectedRegion].function}</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg border">
                      <h4 className="font-semibold text-sm text-blue-600 mb-2">DIFERENCIA EN SUPERDOTADOS</h4>
                      <p className="text-sm">{brainRegions[selectedRegion].giftedDifference}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-xs text-green-600 mb-1">ESTUDIOS</h4>
                        <p className="text-sm">{brainRegions[selectedRegion].studies}</p>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-xs text-purple-600 mb-1">SIGNIFICANCIA</h4>
                        <p className="text-sm">{brainRegions[selectedRegion].significance}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Brain size={48} className="mx-auto mb-4 opacity-50" />
                    <p>Haz clic en cualquier región del cerebro para explorar sus características en personas superdotadas</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Neural Networks */}
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Redes Neurales Especializadas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {neuralNetworks.map((network, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <Activity className="text-blue-500 mr-3" size={24} />
                    <h4 className="font-semibold text-dark-slate">{network.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{network.description}</p>
                  <div className="space-y-2">
                    <div className="p-2 bg-blue-50 rounded">
                      <p className="text-xs font-semibold text-blue-600">EN SUPERDOTADOS</p>
                      <p className="text-sm">{network.giftedFeature}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="text-xs">
                        {network.efficiency}
                      </Badge>
                      <span className="text-xs text-gray-500">{network.studies}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Developmental Stages */}
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Desarrollo Neural por Etapas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentalStages.map((stage, index) => (
                <div key={index} className="relative">
                  <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-center mb-4">
                      <Target className="text-purple-500 mr-3" size={20} />
                      <h4 className="font-semibold text-dark-slate">{stage.age}</h4>
                    </div>
                    <h5 className="font-semibold text-sm text-purple-600 mb-2">{stage.development}</h5>
                    <p className="text-sm text-gray-600 mb-3">{stage.characteristics}</p>
                    <div className="p-2 bg-purple-50 rounded">
                      <p className="text-xs font-semibold text-purple-600">IMPLICACIONES</p>
                      <p className="text-xs">{stage.implications}</p>
                    </div>
                  </div>
                  {index < developmentalStages.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Research Methodology */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Metodología de Investigación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 border rounded-lg">
                <Brain className="mx-auto mb-4 text-blue-500" size={32} />
                <h4 className="font-semibold mb-2">Neuroimagen Funcional</h4>
                <p className="text-sm text-gray-600">fMRI, PET, SPECT para actividad cerebral</p>
                <Badge variant="outline" className="mt-2">8,903 estudios</Badge>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <Zap className="mx-auto mb-4 text-yellow-500" size={32} />
                <h4 className="font-semibold mb-2">Electrofisiología</h4>
                <p className="text-sm text-gray-600">EEG, MEG para timing neural</p>
                <Badge variant="outline" className="mt-2">3,456 estudios</Badge>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <Eye className="mx-auto mb-4 text-green-500" size={32} />
                <h4 className="font-semibold mb-2">Neuroimagen Estructural</h4>
                <p className="text-sm text-gray-600">MRI, DTI para anatomía cerebral</p>
                <Badge variant="outline" className="mt-2">2,847 estudios</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}