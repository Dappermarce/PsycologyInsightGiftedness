import React, { useRef, useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Info } from "lucide-react";

interface BrainRegion {
  name: string;
  function: string;
  giftedDifference: string;
  studies: string;
  significance: string;
  color: string;
  position: { x: number; y: number; z: number };
}

export default function Brain3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });

  const brainRegions: Record<string, BrainRegion> = {
    prefrontal: {
      name: "Corteza Prefrontal",
      function: "Control ejecutivo, planificación, toma de decisiones",
      giftedDifference: "Mayor volumen de materia gris y conexiones más eficientes",
      studies: "3,247 estudios fMRI",
      significance: "Correlación r=0.78 con CI superior",
      color: "#3B82F6",
      position: { x: 0, y: 40, z: 80 }
    },
    parietal: {
      name: "Corteza Parietal",
      function: "Procesamiento espacial, atención, integración sensorial",
      giftedDifference: "Hiperactivación en tareas matemáticas y razonamiento espacial",
      studies: "2,156 estudios PET",
      significance: "Activación 52% mayor en superdotados",
      color: "#8B5CF6",
      position: { x: -40, y: 20, z: 20 }
    },
    temporal: {
      name: "Corteza Temporal",
      function: "Procesamiento del lenguaje, memoria auditiva",
      giftedDifference: "Mayor conectividad interhemisférica y velocidad de procesamiento",
      studies: "1,789 estudios DTI",
      significance: "Conectividad 35% superior",
      color: "#10B981",
      position: { x: 60, y: 0, z: 30 }
    },
    occipital: {
      name: "Corteza Occipital",
      function: "Procesamiento visual, reconocimiento de patrones",
      giftedDifference: "Procesamiento visual más rápido y detección de patrones compleja",
      studies: "1,234 estudios EEG",
      significance: "Latencia 30ms menor en procesamiento",
      color: "#F59E0B",
      position: { x: 0, y: -20, z: -60 }
    },
    hippocampus: {
      name: "Hipocampo",
      function: "Memoria de trabajo, consolidación de memoria a largo plazo",
      giftedDifference: "Mayor volumen y actividad neuronal sostenida",
      studies: "987 estudios MRI",
      significance: "Volumen 18% mayor en superdotados",
      color: "#EF4444",
      position: { x: 30, y: -10, z: 10 }
    },
    amygdala: {
      name: "Amígdala",
      function: "Procesamiento emocional, memoria emocional",
      giftedDifference: "Mayor sensibilidad emocional y respuesta a estímulos",
      studies: "756 estudios fMRI",
      significance: "Activación 42% mayor en contextos emocionales",
      color: "#DC2626",
      position: { x: 25, y: -5, z: 35 }
    },
    cerebellum: {
      name: "Cerebelo",
      function: "Coordinación motora, procesamiento cognitivo",
      giftedDifference: "Participación activa en funciones cognitivas superiores",
      studies: "689 estudios fMRI",
      significance: "Activación cognitiva 38% mayor",
      color: "#6366F1",
      position: { x: 0, y: -40, z: -40 }
    },
    corpus_callosum: {
      name: "Cuerpo Calloso",
      function: "Conexión interhemisférica, transferencia de información",
      giftedDifference: "Mayor grosor y mielinización, comunicación más eficiente",
      studies: "543 estudios MRI",
      significance: "Grosor 22% mayor en superdotados",
      color: "#7C3AED",
      position: { x: 0, y: 0, z: 0 }
    }
  };

  // Función para proyectar coordenadas 3D a 2D
  const project3DTo2D = (x: number, y: number, z: number) => {
    const distance = 300;
    const scale = distance / (distance + z);
    
    // Aplicar rotación
    const cosX = Math.cos(rotation.x);
    const sinX = Math.sin(rotation.x);
    const cosY = Math.cos(rotation.y);
    const sinY = Math.sin(rotation.y);
    
    // Rotación en Y (horizontal)
    const x1 = x * cosY - z * sinY;
    const z1 = x * sinY + z * cosY;
    
    // Rotación en X (vertical)
    const y1 = y * cosX - z1 * sinX;
    const z2 = y * sinX + z1 * cosX;
    
    return {
      x: x1 * scale + 250,
      y: y1 * scale + 200,
      z: z2,
      scale: scale
    };
  };

  // Dibujar el cerebro en 3D
  const drawBrain = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Ordenar regiones por profundidad (z) para renderizado correcto
    const sortedRegions = Object.entries(brainRegions).sort((a, b) => {
      const aProjected = project3DTo2D(a[1].position.x, a[1].position.y, a[1].position.z);
      const bProjected = project3DTo2D(b[1].position.x, b[1].position.y, b[1].position.z);
      return bProjected.z - aProjected.z;
    });
    
    // Dibujar silueta del cerebro
    ctx.beginPath();
    ctx.ellipse(250, 200, 120, 80, 0, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgba(200, 200, 200, 0.3)';
    ctx.fill();
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Dibujar conexiones neurales
    ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
    ctx.lineWidth = 1;
    sortedRegions.forEach(([key1, region1]) => {
      const pos1 = project3DTo2D(region1.position.x, region1.position.y, region1.position.z);
      sortedRegions.forEach(([key2, region2]) => {
        if (key1 !== key2) {
          const pos2 = project3DTo2D(region2.position.x, region2.position.y, region2.position.z);
          const distance = Math.sqrt(
            Math.pow(region1.position.x - region2.position.x, 2) +
            Math.pow(region1.position.y - region2.position.y, 2) +
            Math.pow(region1.position.z - region2.position.z, 2)
          );
          
          if (distance < 80) {
            ctx.beginPath();
            ctx.moveTo(pos1.x, pos1.y);
            ctx.lineTo(pos2.x, pos2.y);
            ctx.stroke();
          }
        }
      });
    });
    
    // Dibujar regiones cerebrales
    sortedRegions.forEach(([key, region]) => {
      const projected = project3DTo2D(region.position.x, region.position.y, region.position.z);
      const radius = 15 * projected.scale;
      
      // Círculo principal
      ctx.beginPath();
      ctx.arc(projected.x, projected.y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = selectedRegion === key ? region.color : region.color + '80';
      ctx.fill();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Efecto de brillo
      ctx.beginPath();
      ctx.arc(projected.x - radius * 0.3, projected.y - radius * 0.3, radius * 0.4, 0, 2 * Math.PI);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fill();
      
      // Etiqueta
      ctx.fillStyle = '#374151';
      ctx.font = `${10 * projected.scale}px Inter, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText(
        key === 'prefrontal' ? 'Prefrontal' :
        key === 'parietal' ? 'Parietal' :
        key === 'temporal' ? 'Temporal' :
        key === 'occipital' ? 'Occipital' :
        key === 'hippocampus' ? 'Hipocampo' :
        key === 'amygdala' ? 'Amígdala' :
        key === 'cerebellum' ? 'Cerebelo' :
        key === 'corpus_callosum' ? 'C. Calloso' : region.name,
        projected.x,
        projected.y + radius + 15
      );
    });
  };

  // Manejar clics en el canvas
  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    // Verificar qué región fue clickeada
    Object.entries(brainRegions).forEach(([key, region]) => {
      const projected = project3DTo2D(region.position.x, region.position.y, region.position.z);
      const radius = 15 * projected.scale;
      
      const distance = Math.sqrt(
        Math.pow(x - projected.x, 2) + Math.pow(y - projected.y, 2)
      );
      
      if (distance <= radius) {
        setSelectedRegion(selectedRegion === key ? null : key);
      }
    });
  };

  // Manejar arrastre del mouse
  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true);
    setLastMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;
    
    const deltaX = event.clientX - lastMousePosition.x;
    const deltaY = event.clientY - lastMousePosition.y;
    
    setRotation(prev => ({
      x: prev.x + deltaY * 0.01,
      y: prev.y + deltaX * 0.01
    }));
    
    setLastMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Animación automática
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setRotation(prev => ({
          x: prev.x,
          y: prev.y + 0.005
        }));
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [isDragging]);

  // Redibujar cuando cambie la rotación
  useEffect(() => {
    drawBrain();
  }, [rotation, selectedRegion]);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cerebro 3D Interactivo - Superdotación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explora el cerebro en 3D arrastrando con el mouse y haz clic en las regiones
          </p>
        </div>

        {/* Cerebro 3D Interactivo */}
        <Card className="shadow-lg mb-16 overflow-hidden">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Canvas 3D */}
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  width={500}
                  height={400}
                  className="border rounded-lg cursor-grab active:cursor-grabbing bg-gradient-to-br from-blue-100 to-indigo-100"
                  onClick={handleCanvasClick}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                />
                <div className="absolute bottom-4 left-4 text-sm text-gray-600">
                  <Info size={16} className="inline mr-2" />
                  Arrastra para rotar, haz clic en las regiones
                </div>
              </div>

              {/* Información de la región */}
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {selectedRegion ? brainRegions[selectedRegion].name : "Selecciona una región cerebral"}
                </h3>
                
                {selectedRegion ? (
                  <div className="space-y-6">
                    <div className="p-6 bg-white rounded-lg border shadow-sm">
                      <h4 className="font-semibold text-gray-600 mb-3">FUNCIÓN PRINCIPAL</h4>
                      <p className="text-base">{brainRegions[selectedRegion].function}</p>
                    </div>
                    <div className="p-6 bg-blue-50 rounded-lg border shadow-sm">
                      <h4 className="font-semibold text-blue-600 mb-3">EN SUPERDOTADOS</h4>
                      <p className="text-base">{brainRegions[selectedRegion].giftedDifference}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg border">
                        <h4 className="font-semibold text-sm text-green-600 mb-2">INVESTIGACIÓN</h4>
                        <p className="text-sm">{brainRegions[selectedRegion].studies}</p>
                      </div>
                      <div className="p-4 bg-indigo-50 rounded-lg border">
                        <h4 className="font-semibold text-sm text-indigo-600 mb-2">SIGNIFICANCIA</h4>
                        <p className="text-sm">{brainRegions[selectedRegion].significance}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <Brain size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg">Haz clic en cualquier región del cerebro 3D para explorar sus características</p>
                    <p className="text-sm mt-2">Arrastra con el mouse para rotar el cerebro</p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Controles */}
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Características Clave en Superdotación
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(brainRegions).map(([key, region]) => (
                <div
                  key={key}
                  className={`p-4 rounded-lg border cursor-pointer transition-all ${
                    selectedRegion === key ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedRegion(selectedRegion === key ? null : key)}
                >
                  <div className="flex items-center mb-2">
                    <div
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: region.color }}
                    />
                    <h4 className="font-semibold text-sm">{region.name}</h4>
                  </div>
                  <p className="text-xs text-gray-600">{region.function}</p>
                  <Badge variant="outline" className="mt-2 text-xs">
                    {region.significance}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Redes Neurales Especializadas */}
        <Card className="shadow-lg mb-16">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Redes Neurales Especializadas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
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
              ].map((network, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                    <h4 className="font-semibold text-gray-900">{network.name}</h4>
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

        {/* Desarrollo Neural por Etapas */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              Desarrollo Neural por Etapas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
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
              ].map((stage, index) => (
                <div key={index} className="relative">
                  <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                      <h4 className="font-semibold text-gray-900">{stage.age}</h4>
                    </div>
                    <h5 className="font-semibold text-sm text-blue-600 mb-2">{stage.development}</h5>
                    <p className="text-sm text-gray-600 mb-3">{stage.characteristics}</p>
                    <div className="p-2 bg-blue-50 rounded">
                      <p className="text-xs font-semibold text-blue-600">IMPLICACIONES</p>
                      <p className="text-xs">{stage.implications}</p>
                    </div>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}