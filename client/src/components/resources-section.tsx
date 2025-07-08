import { Card, CardContent } from "@/components/ui/card";
import { Globe, University, Award, Heart } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { booksData, articlesData, universitiesData, organizationsData } from "@/data/psychology-data";

export default function ResourcesSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      id="recursos" 
      ref={ref}
      className={`py-20 bg-light-gray section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">Recursos Educativos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bibliografía, artículos científicos y recursos para profesionales y familias
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Libros Recomendados */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-dark-slate mb-6">Libros Especializados</h3>
              <div className="space-y-4">
                {booksData.map((book, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-dark-slate text-sm">{book.title}</h4>
                    <p className="text-gray-600 text-xs">{book.author}</p>
                    <p className="text-gray-500 text-xs mt-1">{book.publisher}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Artículos Científicos */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-dark-slate mb-6">Artículos Científicos</h3>
              <div className="space-y-4">
                {articlesData.map((article, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-dark-slate text-sm">{article.title}</h4>
                    <p className="text-gray-600 text-xs">{article.author}</p>
                    <p className="text-gray-500 text-xs mt-1">{article.journal}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Universidades y Centros */}
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-dark-slate mb-6">Centros de Investigación</h3>
              <div className="space-y-4">
                {universitiesData.map((center, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-dark-slate text-sm">{center.name}</h4>
                    <p className="text-gray-600 text-xs">{center.program}</p>
                    <p className="text-gray-500 text-xs mt-1">{center.location}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Organizational Resources */}
        <Card className="mt-16 shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-8 text-center">Organizaciones Profesionales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {organizationsData.map((org, index) => {
                const icons = [Globe, University, Award, Heart];
                const IconComponent = icons[index % icons.length];
                const colors = ['text-primary', 'text-sky-blue', 'text-green-500', 'text-purple-500'];
                const bgColors = ['bg-primary/10', 'bg-sky-blue/10', 'bg-green-500/10', 'bg-purple-500/10'];
                
                return (
                  <div key={index} className="text-center">
                    <div className={`${bgColors[index % bgColors.length]} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className={`${colors[index % colors.length]}`} size={32} />
                    </div>
                    <h4 className="font-semibold text-dark-slate mb-2">{org.acronym}</h4>
                    <p className="text-gray-600 text-sm">{org.name}</p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
