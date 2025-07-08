import { Button } from "@/components/ui/button";
import { Brain, Sparkles, Zap, Microscope, Atom, Target } from "lucide-react";
import { useState, useEffect } from "react";

export default function EnhancedHero() {
  const [currentFact, setCurrentFact] = useState(0);
  
  const facts = [
    "160+ millones de personas superdotadas en el mundo",
    "2% de la población global con CI >130",
    "85% mantiene alta performance >20 años",
    "67,000+ estudios científicos publicados",
    "300% variación cultural en identificación"
  ];

  const floatingElements = [
    { icon: Brain, delay: 0, size: 32, color: "text-blue-400" },
    { icon: Sparkles, delay: 1000, size: 24, color: "text-purple-400" },
    { icon: Zap, delay: 2000, size: 28, color: "text-yellow-400" },
    { icon: Microscope, delay: 1500, size: 30, color: "text-green-400" },
    { icon: Atom, delay: 500, size: 26, color: "text-red-400" },
    { icon: Target, delay: 2500, size: 28, color: "text-indigo-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/40 to-black/80"></div>
        
        {/* Neural Network Animation */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.2"/>
              </radialGradient>
            </defs>
            
            {/* Animated connections */}
            <g className="animate-pulse">
              <line x1="200" y1="300" x2="400" y2="200" stroke="url(#nodeGradient)" strokeWidth="2"/>
              <line x1="400" y1="200" x2="600" y2="300" stroke="url(#nodeGradient)" strokeWidth="2"/>
              <line x1="600" y1="300" x2="800" y2="200" stroke="url(#nodeGradient)" strokeWidth="2"/>
              <line x1="200" y1="500" x2="500" y2="400" stroke="url(#nodeGradient)" strokeWidth="2"/>
              <line x1="500" y1="400" x2="800" y2="500" stroke="url(#nodeGradient)" strokeWidth="2"/>
            </g>
            
            {/* Neural nodes */}
            <circle cx="200" cy="300" r="8" fill="url(#nodeGradient)" className="animate-ping"/>
            <circle cx="400" cy="200" r="6" fill="url(#nodeGradient)" className="animate-pulse"/>
            <circle cx="600" cy="300" r="10" fill="url(#nodeGradient)" className="animate-ping"/>
            <circle cx="800" cy="200" r="7" fill="url(#nodeGradient)" className="animate-pulse"/>
            <circle cx="500" cy="400" r="9" fill="url(#nodeGradient)" className="animate-ping"/>
          </svg>
        </div>
      </div>

      {/* Floating Icons */}
      {floatingElements.map((Element, index) => (
        <div
          key={index}
          className={`absolute animate-float opacity-30 ${Element.color}`}
          style={{
            left: `${15 + (index * 15)}%`,
            top: `${20 + (index * 12)}%`,
            animationDelay: `${Element.delay}ms`,
            animationDuration: `${4000 + (index * 500)}ms`
          }}
        >
          <Element.icon size={Element.size} />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          {/* Title with animated gradient */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent leading-tight">
              Psicología de la
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Superdotación
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            La plataforma científica más completa del mundo sobre 
            <span className="text-yellow-300 font-semibold"> neurociencia cognitiva</span>, 
            <span className="text-green-300 font-semibold"> investigación longitudinal</span> y 
            <span className="text-purple-300 font-semibold"> evidencia clínica</span> en superdotación intelectual
          </p>

          {/* Rotating Facts */}
          <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/30">
            <div className="h-16 flex items-center justify-center">
              <p className="text-lg md:text-xl text-white font-medium transition-all duration-500 animate-pulse">
                💡 {facts[currentFact]}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection('metodologia-investigacion')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Microscope className="mr-2" size={24} />
              Explorar Investigación
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('evaluacion-avanzada')}
              className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
            >
              <Brain className="mr-2" size={24} />
              Evaluación Interactiva
            </Button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
              <div className="text-2xl font-bold text-white">67K+</div>
              <div className="text-sm text-blue-200">Estudios</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
              <div className="text-2xl font-bold text-white">8.2M+</div>
              <div className="text-sm text-purple-200">Participantes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-green-500/20">
              <div className="text-2xl font-bold text-white">85%</div>
              <div className="text-sm text-green-200">Confiabilidad</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-yellow-500/20">
              <div className="text-2xl font-bold text-white">156</div>
              <div className="text-sm text-yellow-200">Años Invest.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}