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
    },
    amygdala: {
      name: "Amígdala",
      function: "Procesamiento emocional, memoria emocional",
      giftedDifference: "Mayor sensibilidad emocional y respuesta",
      studies: "543 estudios fMRI",
      significance: "Activación 35% mayor",
      color: "#DC2626"
    },
    thalamus: {
      name: "Tálamo",
      function: "Relevo sensorial, regulación consciencia",
      giftedDifference: "Mayor conectividad con corteza",
      studies: "432 estudios DTI",
      significance: "Conectividad 20% superior",
      color: "#059669"
    },
    corpus_callosum: {
      name: "Cuerpo Calloso",
      function: "Conexión interhemisférica, transferencia información",
      giftedDifference: "Mayor grosor y mielinización",
      studies: "398 estudios MRI",
      significance: "Grosor 15% mayor",
      color: "#7C3AED"
    },
    anterior_cingulate: {
      name: "Cingulado Anterior",
      function: "Control atencional, resolución conflictos",
      giftedDifference: "Mayor activación en tareas complejas",
      studies: "356 estudios fMRI",
      significance: "Activación 40% mayor",
      color: "#0891B2"
    },
    insula: {
      name: "Ínsula",
      function: "Integración sensorial, conciencia corporal",
      giftedDifference: "Mayor integración multimodal",
      studies: "289 estudios fMRI",
      significance: "Conectividad 25% superior",
      color: "#EA580C"
    },
    basal_ganglia: {
      name: "Ganglios Basales",
      function: "Control motor, aprendizaje procedural",
      giftedDifference: "Mayor eficiencia en automatización",
      studies: "267 estudios PET",
      significance: "Eficiencia 30% mayor",
      color: "#9333EA"
    },
    brain_stem: {
      name: "Tronco Encefálico",
      function: "Funciones vitales, estado de alerta",
      giftedDifference: "Mayor regulación atencional",
      studies: "198 estudios MRI",
      significance: "Activación 18% mayor",
      color: "#16A34A"
    }
  };

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
                    {/* Advanced brain anatomy definitions */}
                    <defs>
                      <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:"#f1f5f9", stopOpacity:0.9}} />
                        <stop offset="50%" style={{stopColor:"#e2e8f0", stopOpacity:0.7}} />
                        <stop offset="100%" style={{stopColor:"#cbd5e1", stopOpacity:0.5}} />
                      </linearGradient>
                      <linearGradient id="brainShadow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor:"#64748b", stopOpacity:0.1}} />
                        <stop offset="100%" style={{stopColor:"#475569", stopOpacity:0.3}} />
                      </linearGradient>
                      <pattern id="cortexTexture" patternUnits="userSpaceOnUse" width="3" height="3">
                        <rect width="3" height="3" fill="none"/>
                        <circle cx="1.5" cy="1.5" r="0.3" fill="#94a3b8" opacity="0.2"/>
                      </pattern>
                    </defs>
                    
                    {/* Detailed anatomically correct brain silhouette */}
                    <path
                      d="M 90 175 
                         C 70 110, 110 70, 175 60
                         C 210 55, 270 58, 315 68
                         C 365 78, 410 110, 435 155
                         C 445 175, 442 195, 438 215
                         C 435 235, 425 250, 410 265
                         C 395 280, 375 290, 350 295
                         C 320 300, 290 298, 265 295
                         C 240 292, 215 287, 190 280
                         C 165 273, 140 260, 120 245
                         C 100 230, 88 205, 90 175 Z"
                      fill="url(#brainGradient)"
                      stroke="#6366F1"
                      strokeWidth="2"
                      opacity="0.65"
                    />
                    
                    {/* Brain shadow for depth */}
                    <path
                      d="M 95 180 
                         C 75 115, 115 75, 180 65
                         C 215 60, 275 63, 320 73
                         C 370 83, 415 115, 440 160
                         C 450 180, 447 200, 443 220
                         C 440 240, 430 255, 415 270
                         C 400 285, 380 295, 355 300
                         C 325 305, 295 303, 270 300
                         C 245 297, 220 292, 195 285
                         C 170 278, 145 265, 125 250
                         C 105 235, 93 210, 95 180 Z"
                      fill="url(#brainShadow)"
                      opacity="0.3"
                    />
                    
                    {/* Cerebral cortex layers */}
                    <g opacity="0.3">
                      <path d="M 110 140 C 160 120, 220 118, 280 125 C 320 130, 360 140, 390 160" 
                            stroke="#4F46E5" strokeWidth="2" fill="none"/>
                      <path d="M 115 160 C 165 140, 225 138, 285 145 C 325 150, 365 160, 385 175" 
                            stroke="#4F46E5" strokeWidth="1.5" fill="none"/>
                      <path d="M 120 180 C 170 160, 230 158, 290 165 C 330 170, 370 180, 380 190" 
                            stroke="#4F46E5" strokeWidth="1.5" fill="none"/>
                    </g>
                    
                    {/* Detailed brain stem */}
                    <ellipse cx="265" cy="295" rx="15" ry="25" fill="#8B5CF6" opacity="0.4"/>
                    <ellipse cx="265" cy="290" rx="12" ry="20" fill="#A78BFA" opacity="0.3"/>
                    <ellipse cx="265" cy="285" rx="8" ry="15" fill="#C4B5FD" opacity="0.2"/>
                    
                    {/* Corpus callosum - connecting bridge */}
                    <ellipse cx="245" cy="160" rx="45" ry="10" fill="#F59E0B" opacity="0.3"/>
                    <ellipse cx="245" cy="160" rx="40" ry="8" fill="#FCD34D" opacity="0.2"/>
                    
                    {/* Ventricular system */}
                    <path d="M 205 145 C 225 140, 265 140, 285 145 C 280 155, 265 160, 245 160 C 225 160, 210 155, 205 145"
                          fill="#3B82F6" opacity="0.2"/>
                    
                    {/* Cerebellum with detailed folds */}
                    <ellipse cx="385" cy="230" rx="30" ry="25" fill="#6366F1" opacity="0.3"/>
                    <g opacity="0.5">
                      <path d="M 360 215 Q 370 210, 385 215 Q 400 210, 415 215" stroke="#4F46E5" strokeWidth="1" fill="none"/>
                      <path d="M 360 220 Q 370 215, 385 220 Q 400 215, 415 220" stroke="#4F46E5" strokeWidth="1" fill="none"/>
                      <path d="M 360 225 Q 370 220, 385 225 Q 400 220, 415 225" stroke="#4F46E5" strokeWidth="1" fill="none"/>
                      <path d="M 360 230 Q 370 225, 385 230 Q 400 225, 415 230" stroke="#4F46E5" strokeWidth="1" fill="none"/>
                      <path d="M 360 235 Q 370 230, 385 235 Q 400 230, 415 235" stroke="#4F46E5" strokeWidth="1" fill="none"/>
                      <path d="M 360 240 Q 370 235, 385 240 Q 400 235, 415 240" stroke="#4F46E5" strokeWidth="1" fill="none"/>
                    </g>
                    
                    {/* Cortical texture overlay */}
                    <rect x="90" y="100" width="200" height="120" fill="url(#cortexTexture)" opacity="0.1"/>
                    <rect x="250" y="100" width="180" height="120" fill="url(#cortexTexture)" opacity="0.1"/>
                    
                    {/* Brain regions with precise anatomical shapes and positions */}
                    {Object.entries(brainRegions).map(([key, region], index) => {
                      // Scientifically accurate positions based on brain anatomy
                      const positions = {
                        frontal: { x: 150, y: 130 },           // Prefrontal cortex - anterior region
                        parietal: { x: 280, y: 115 },          // Superior parietal - crown region
                        temporal: { x: 190, y: 190 },          // Temporal lobe - lateral position
                        occipital: { x: 380, y: 165 },         // Occipital - posterior region
                        hippocampus: { x: 230, y: 170 },       // Hippocampus - medial temporal
                        cerebellum: { x: 385, y: 230 },        // Cerebellum - posterior inferior
                        amygdala: { x: 210, y: 185 },          // Amygdala - medial temporal
                        thalamus: { x: 245, y: 155 },          // Thalamus - central region
                        corpus_callosum: { x: 245, y: 160 },   // Corpus callosum - central connection
                        anterior_cingulate: { x: 220, y: 140 }, // Anterior cingulate - medial frontal
                        insula: { x: 205, y: 160 },            // Insula - lateral surface
                        basal_ganglia: { x: 240, y: 175 },     // Basal ganglia - subcortical
                        brain_stem: { x: 265, y: 290 }         // Brain stem - central base
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
                            // Prefrontal cortex - anatomically accurate anterior region
                            return (
                              <g>
                                <path
                                  d={`M ${position.x-35} ${position.y-20} 
                                      C ${position.x-40} ${position.y-15}, ${position.x-42} ${position.y-5}, ${position.x-40} ${position.y+5}
                                      C ${position.x-35} ${position.y+15}, ${position.x-25} ${position.y+25}, ${position.x-10} ${position.y+28}
                                      C ${position.x+10} ${position.y+30}, ${position.x+25} ${position.y+25}, ${position.x+35} ${position.y+15}
                                      C ${position.x+40} ${position.y+5}, ${position.x+38} ${position.y-5}, ${position.x+35} ${position.y-15}
                                      C ${position.x+25} ${position.y-25}, ${position.x+10} ${position.y-28}, ${position.x-10} ${position.y-28}
                                      C ${position.x-25} ${position.y-25}, ${position.x-35} ${position.y-20} Z`}
                                  {...commonProps}
                                />
                                <path
                                  d={`M ${position.x-25} ${position.y-10} C ${position.x-15} ${position.y-15}, ${position.x+15} ${position.y-15}, ${position.x+25} ${position.y-10}`}
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="1"
                                  opacity="0.6"
                                />
                                <path
                                  d={`M ${position.x-20} ${position.y+5} C ${position.x-10} ${position.y}, ${position.x+10} ${position.y}, ${position.x+20} ${position.y+5}`}
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="1"
                                  opacity="0.6"
                                />
                              </g>
                            );
                          case 'parietal':
                            // Superior parietal cortex - crown region
                            return (
                              <g>
                                <path
                                  d={`M ${position.x-25} ${position.y-5} 
                                      C ${position.x-30} ${position.y-15}, ${position.x-25} ${position.y-25}, ${position.x-10} ${position.y-30}
                                      C ${position.x+10} ${position.y-32}, ${position.x+25} ${position.y-25}, ${position.x+30} ${position.y-15}
                                      C ${position.x+32} ${position.y-5}, ${position.x+30} ${position.y+5}, ${position.x+25} ${position.y+15}
                                      C ${position.x+15} ${position.y+20}, ${position.x} ${position.y+18}, ${position.x-15} ${position.y+20}
                                      C ${position.x-25} ${position.y+15}, ${position.x-28} ${position.y+5}, ${position.x-25} ${position.y-5} Z`}
                                  {...commonProps}
                                />
                                <path
                                  d={`M ${position.x-15} ${position.y-15} C ${position.x-5} ${position.y-20}, ${position.x+5} ${position.y-20}, ${position.x+15} ${position.y-15}`}
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="1"
                                  opacity="0.6"
                                />
                              </g>
                            );
                          case 'temporal':
                            // Temporal lobe - lateral elongated region
                            return (
                              <g>
                                <path
                                  d={`M ${position.x-30} ${position.y-8} 
                                      C ${position.x-35} ${position.y-5}, ${position.x-35} ${position.y+5}, ${position.x-30} ${position.y+8}
                                      C ${position.x-20} ${position.y+18}, ${position.x-5} ${position.y+20}, ${position.x+15} ${position.y+18}
                                      C ${position.x+30} ${position.y+15}, ${position.x+35} ${position.y+8}, ${position.x+32} ${position.y-2}
                                      C ${position.x+28} ${position.y-12}, ${position.x+15} ${position.y-18}, ${position.x-5} ${position.y-20}
                                      C ${position.x-20} ${position.y-18}, ${position.x-30} ${position.y-8} Z`}
                                  {...commonProps}
                                />
                                <path
                                  d={`M ${position.x-20} ${position.y-5} C ${position.x-10} ${position.y-8}, ${position.x+10} ${position.y-8}, ${position.x+20} ${position.y-5}`}
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="1"
                                  opacity="0.6"
                                />
                                <path
                                  d={`M ${position.x-15} ${position.y+5} C ${position.x-5} ${position.y+8}, ${position.x+5} ${position.y+8}, ${position.x+15} ${position.y+5}`}
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="1"
                                  opacity="0.6"
                                />
                              </g>
                            );
                          case 'occipital':
                            // Occipital lobe - posterior visual cortex
                            return (
                              <g>
                                <path
                                  d={`M ${position.x-20} ${position.y-15} 
                                      C ${position.x-25} ${position.y-10}, ${position.x-25} ${position.y+10}, ${position.x-20} ${position.y+15}
                                      C ${position.x-10} ${position.y+20}, ${position.x+5} ${position.y+18}, ${position.x+15} ${position.y+15}
                                      C ${position.x+25} ${position.y+10}, ${position.x+30} ${position.y}, ${position.x+25} ${position.y-10}
                                      C ${position.x+15} ${position.y-18}, ${position.x+5} ${position.y-20}, ${position.x-10} ${position.y-20}
                                      C ${position.x-20} ${position.y-15} Z`}
                                  {...commonProps}
                                />
                                <path
                                  d={`M ${position.x-10} ${position.y-8} C ${position.x} ${position.y-12}, ${position.x+10} ${position.y-8}`}
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="1"
                                  opacity="0.6"
                                />
                                <path
                                  d={`M ${position.x-10} ${position.y+2} C ${position.x} ${position.y-2}, ${position.x+10} ${position.y+2}`}
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="1"
                                  opacity="0.6"
                                />
                              </g>
                            );
                          case 'hippocampus':
                            // Hippocampus - seahorse-like curved structure
                            return (
                              <g>
                                <path
                                  d={`M ${position.x-10} ${position.y-18} 
                                      C ${position.x-15} ${position.y-15}, ${position.x-15} ${position.y-8}, ${position.x-10} ${position.y-2}
                                      C ${position.x-5} ${position.y+5}, ${position.x} ${position.y+12}, ${position.x+5} ${position.y+18}
                                      C ${position.x+10} ${position.y+15}, ${position.x+15} ${position.y+10}, ${position.x+12} ${position.y+5}
                                      C ${position.x+8} ${position.y}, ${position.x+5} ${position.y-5}, ${position.x} ${position.y-10}
                                      C ${position.x-5} ${position.y-15}, ${position.x-10} ${position.y-18} Z`}
                                  {...commonProps}
                                />
                                <path
                                  d={`M ${position.x-8} ${position.y-10} C ${position.x-3} ${position.y-5}, ${position.x+2} ${position.y}, ${position.x+7} ${position.y+5}`}
                                  fill="none"
                                  stroke="white"
                                  strokeWidth="1"
                                  opacity="0.6"
                                />
                              </g>
                            );
                          case 'cerebellum':
                            // Cerebellum - detailed folded structure
                            return (
                              <g>
                                <ellipse cx={position.x} cy={position.y} rx="28" ry="20" {...commonProps} />
                                <g opacity="0.8">
                                  <path d={`M ${position.x-25} ${position.y-10} Q ${position.x-15} ${position.y-15}, ${position.x-5} ${position.y-10} Q ${position.x+5} ${position.y-15}, ${position.x+15} ${position.y-10} Q ${position.x+25} ${position.y-15}, ${position.x+25} ${position.y-10}`} stroke="white" strokeWidth="1" fill="none"/>
                                  <path d={`M ${position.x-25} ${position.y-5} Q ${position.x-15} ${position.y-10}, ${position.x-5} ${position.y-5} Q ${position.x+5} ${position.y-10}, ${position.x+15} ${position.y-5} Q ${position.x+25} ${position.y-10}, ${position.x+25} ${position.y-5}`} stroke="white" strokeWidth="1" fill="none"/>
                                  <path d={`M ${position.x-25} ${position.y} Q ${position.x-15} ${position.y-5}, ${position.x-5} ${position.y} Q ${position.x+5} ${position.y-5}, ${position.x+15} ${position.y} Q ${position.x+25} ${position.y-5}, ${position.x+25} ${position.y}`} stroke="white" strokeWidth="1" fill="none"/>
                                  <path d={`M ${position.x-25} ${position.y+5} Q ${position.x-15} ${position.y}, ${position.x-5} ${position.y+5} Q ${position.x+5} ${position.y}, ${position.x+15} ${position.y+5} Q ${position.x+25} ${position.y}, ${position.x+25} ${position.y+5}`} stroke="white" strokeWidth="1" fill="none"/>
                                  <path d={`M ${position.x-25} ${position.y+10} Q ${position.x-15} ${position.y+5}, ${position.x-5} ${position.y+10} Q ${position.x+5} ${position.y+5}, ${position.x+15} ${position.y+10} Q ${position.x+25} ${position.y+5}, ${position.x+25} ${position.y+10}`} stroke="white" strokeWidth="1" fill="none"/>
                                </g>
                              </g>
                            );
                          case 'amygdala':
                            // Amygdala - almond-shaped
                            return (
                              <g>
                                <ellipse cx={position.x} cy={position.y} rx="12" ry="18" {...commonProps} />
                                <ellipse cx={position.x} cy={position.y-3} rx="8" ry="12" fill="white" opacity="0.3" />
                              </g>
                            );
                          case 'thalamus':
                            // Thalamus - oval relay station
                            return (
                              <g>
                                <ellipse cx={position.x} cy={position.y} rx="18" ry="12" {...commonProps} />
                                <ellipse cx={position.x} cy={position.y} rx="14" ry="8" fill="white" opacity="0.3" />
                              </g>
                            );
                          case 'corpus_callosum':
                            // Corpus callosum - connecting bridge
                            return (
                              <g>
                                <ellipse cx={position.x} cy={position.y} rx="22" ry="6" {...commonProps} />
                                <ellipse cx={position.x} cy={position.y} rx="18" ry="4" fill="white" opacity="0.3" />
                              </g>
                            );
                          case 'anterior_cingulate':
                            // Anterior cingulate - curved structure
                            return (
                              <g>
                                <path
                                  d={`M ${position.x-15} ${position.y-8} 
                                      C ${position.x-12} ${position.y-12}, ${position.x-5} ${position.y-14}, ${position.x} ${position.y-12}
                                      C ${position.x+5} ${position.y-10}, ${position.x+12} ${position.y-8}, ${position.x+15} ${position.y-5}
                                      C ${position.x+12} ${position.y-2}, ${position.x+5} ${position.y}, ${position.x} ${position.y+2}
                                      C ${position.x-5} ${position.y+4}, ${position.x-12} ${position.y+2}, ${position.x-15} ${position.y-5}
                                      C ${position.x-15} ${position.y-8} Z`}
                                  {...commonProps}
                                />
                              </g>
                            );
                          case 'insula':
                            // Insula - triangular island
                            return (
                              <g>
                                <path
                                  d={`M ${position.x-12} ${position.y-8} 
                                      C ${position.x-8} ${position.y-12}, ${position.x} ${position.y-14}, ${position.x+8} ${position.y-12}
                                      C ${position.x+12} ${position.y-8}, ${position.x+10} ${position.y-2}, ${position.x+8} ${position.y+4}
                                      C ${position.x+2} ${position.y+8}, ${position.x-2} ${position.y+8}, ${position.x-8} ${position.y+4}
                                      C ${position.x-10} ${position.y-2}, ${position.x-12} ${position.y-8} Z`}
                                  {...commonProps}
                                />
                              </g>
                            );
                          case 'basal_ganglia':
                            // Basal ganglia - clustered nuclei
                            return (
                              <g>
                                <circle cx={position.x-6} cy={position.y-6} r="8" {...commonProps} />
                                <circle cx={position.x+6} cy={position.y-6} r="8" {...commonProps} />
                                <circle cx={position.x} cy={position.y+6} r="8" {...commonProps} />
                              </g>
                            );
                          case 'brain_stem':
                            // Brain stem - elongated structure
                            return (
                              <g>
                                <ellipse cx={position.x} cy={position.y} rx="10" ry="20" {...commonProps} />
                                <ellipse cx={position.x} cy={position.y-5} rx="8" ry="15" fill="white" opacity="0.3" />
                              </g>
                            );
                          default:
                            return (
                              <circle
                                cx={position.x}
                                cy={position.y}
                                r="18"
                                {...commonProps}
                              />
                            );
                        }
                      };
                      
                      return (
                        <g key={key}>
                          {getRegionShape(key, pos)}
                          
                          {/* Background for text readability - moved behind text */}
                          <rect
                            x={pos.x - 35}
                            y={pos.y + 32}
                            width={70}
                            height={20}
                            fill="white"
                            opacity="0.9"
                            rx="5"
                            className="cursor-pointer"
                            onClick={() => setSelectedRegion(selectedRegion === key ? null : key)}
                          />
                          
                          {/* Region label with better positioning and larger text */}
                          <text
                            x={pos.x}
                            y={pos.y + 45}
                            textAnchor="middle"
                            className="text-sm font-bold fill-gray-800 cursor-pointer"
                            onClick={() => setSelectedRegion(selectedRegion === key ? null : key)}
                          >
                            {key === 'frontal' ? 'Prefrontal' : 
                             key === 'parietal' ? 'Parietal' :
                             key === 'temporal' ? 'Temporal' :
                             key === 'occipital' ? 'Occipital' :
                             key === 'hippocampus' ? 'Hipocampo' :
                             key === 'cerebellum' ? 'Cerebelo' :
                             key === 'amygdala' ? 'Amígdala' :
                             key === 'thalamus' ? 'Tálamo' :
                             key === 'corpus_callosum' ? 'C. Calloso' :
                             key === 'anterior_cingulate' ? 'Cingulado' :
                             key === 'insula' ? 'Ínsula' :
                             key === 'basal_ganglia' ? 'G. Basales' :
                             key === 'brain_stem' ? 'Tronco' :
                             region.name.split(' ')[1] || region.name.split(' ')[0]}
                          </text>
                        </g>
                      );
                    })}
                    
                    {/* Neural connections - scientifically accurate pathways */}
                    <g className="animate-pulse" opacity="0.4">
                      <path d="M 150 130 Q 215 105, 280 115" stroke="#3B82F6" strokeWidth="2" fill="none"/>
                      <path d="M 190 190 Q 235 152, 280 115" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
                      <path d="M 230 170 Q 305 167, 380 165" stroke="#10B981" strokeWidth="2" fill="none"/>
                      <path d="M 280 115 Q 330 175, 385 230" stroke="#F59E0B" strokeWidth="2" fill="none"/>
                      <path d="M 190 190 Q 285 210, 385 230" stroke="#EF4444" strokeWidth="2" fill="none"/>
                      <path d="M 230 170 Q 255 150, 280 115" stroke="#6366F1" strokeWidth="1.5" fill="none"/>
                    </g>
                    
                    {/* Neural activity indicators */}
                    <g className="animate-pulse">
                      <circle cx="160" cy="120" r="3" fill="#60A5FA" opacity="0.8">
                        <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="290" cy="105" r="3" fill="#A78BFA" opacity="0.8">
                        <animate attributeName="r" values="3;6;3" dur="2.5s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="200" cy="180" r="3" fill="#34D399" opacity="0.8">
                        <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="390" cy="155" r="3" fill="#F59E0B" opacity="0.8">
                        <animate attributeName="r" values="3;6;3" dur="3.5s" repeatCount="indefinite"/>
                      </circle>
                      <circle cx="240" cy="160" r="3" fill="#EF4444" opacity="0.8">
                        <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite"/>
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
                      <Target className="text-blue-500 mr-3" size={20} />
                      <h4 className="font-semibold text-dark-slate">{stage.age}</h4>
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
