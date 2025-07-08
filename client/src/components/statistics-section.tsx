import { useEffect } from "react";
import { useCounterAnimation } from "@/hooks/use-counter-animation";

export default function StatisticsSection() {
  const { count: giftedPercent, startAnimation: startGiftedPercent } = useCounterAnimation(2, 2000);
  const { count: minIQ, startAnimation: startMinIQ } = useCounterAnimation(130, 2000);
  const { count: underidentified, startAnimation: startUnderidentified } = useCounterAnimation(65, 2000);
  const { count: studiesCount, startAnimation: startStudiesCount } = useCounterAnimation(50000, 2000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startGiftedPercent();
            startMinIQ();
            startUnderidentified();
            startStudiesCount();
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('statistics');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [startGiftedPercent, startMinIQ, startUnderidentified, startStudiesCount]);

  return (
    <section id="statistics" className="py-16 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="stats-counter">{giftedPercent}</div>
            <p className="text-dark-slate text-lg">% Población Superdotada</p>
            <p className="text-gray-500 text-sm">Aprox. 160 millones mundialmente</p>
          </div>
          <div className="text-center">
            <div className="stats-counter">{minIQ}</div>
            <p className="text-dark-slate text-lg">CI Mínimo (2 DS)</p>
            <p className="text-gray-500 text-sm">Criterio psicométrico estándar</p>
          </div>
          <div className="text-center">
            <div className="stats-counter">{underidentified}</div>
            <p className="text-dark-slate text-lg">% Sin Identificar</p>
            <p className="text-gray-500 text-sm">Principalmente grupos minoritarios</p>
          </div>
          <div className="text-center">
            <div className="stats-counter">{studiesCount.toLocaleString()}</div>
            <p className="text-dark-slate text-lg">Estudios Publicados</p>
            <p className="text-gray-500 text-sm">Últimas 5 décadas</p>
          </div>
        </div>
      </div>
    </section>
  );
}
