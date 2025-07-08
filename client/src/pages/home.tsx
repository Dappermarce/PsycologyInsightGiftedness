import Navigation from "@/components/navigation";
import EnhancedHero from "@/components/enhanced-hero";
import StatisticsSection from "@/components/statistics-section";
import GiftednessSection from "@/components/giftedness-section";
import CognitiveProfiles from "@/components/cognitive-profiles";
import NeurologicalEvidence from "@/components/neurological-evidence";
import InteractiveBrainMap from "@/components/interactive-brain-map";
import ResearchMethodology from "@/components/research-methodology";
import ComprehensiveStatistics from "@/components/comprehensive-statistics";
import ScientificTimeline from "@/components/scientific-timeline";
import GlobalStatistics from "@/components/global-statistics";
import IntelligenceTheories from "@/components/intelligence-theories";
import PsychiatrySection from "@/components/psychiatry-section";
import LongitudinalOutcomes from "@/components/longitudinal-outcomes";
import AdvancedAssessment from "@/components/advanced-assessment";
import EvaluationSection from "@/components/evaluation-section";
import ResourcesSection from "@/components/resources-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <EnhancedHero />
      <StatisticsSection />
      <GiftednessSection />
      <CognitiveProfiles />
      <NeurologicalEvidence />
      <InteractiveBrainMap />
      <ResearchMethodology />
      <ComprehensiveStatistics />
      <ScientificTimeline />
      <GlobalStatistics />
      <IntelligenceTheories />
      <PsychiatrySection />
      <LongitudinalOutcomes />
      <AdvancedAssessment />
      <EvaluationSection />
      <ResourcesSection />
      
      {/* Medical Disclaimer */}
      <section className="py-16 bg-yellow-50 border-y border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-exclamation-triangle text-yellow-600 text-2xl"></i>
            </div>
            <h2 className="text-2xl font-bold text-yellow-800 mb-4">Aviso Legal y Médico</h2>
            <div className="max-w-4xl mx-auto text-yellow-700 space-y-4">
              <p className="text-lg">
                <strong>La información presentada en este sitio web es únicamente con fines educativos e informativos.</strong>
              </p>
              <p>
                No constituye asesoramiento médico, psicológico o diagnóstico profesional. Los cuestionarios y evaluaciones 
                proporcionados son herramientas de detección preliminar y no reemplazan una evaluación profesional completa.
              </p>
              <p>
                Para obtener un diagnóstico preciso y tratamiento adecuado, consulte siempre con un psicólogo o 
                psiquiatra especializado en superdotación y altas capacidades.
              </p>
              <p className="text-sm font-semibold">
                Este sitio web no se hace responsable de ninguna decisión tomada basándose en la información aquí presentada.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
