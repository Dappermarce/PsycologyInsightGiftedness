import { Card, CardContent } from "@/components/ui/card";
import { Globe, Users, TrendingUp, BookOpen } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export default function GlobalStatistics() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const globalData = [
    {
      country: "Estados Unidos",
      identification: "3.2%",
      programs: "2,800+ programas",
      investment: "$12.5B anuales",
      outcomes: "85% graduación universitaria"
    },
    {
      country: "Singapur",
      identification: "8.5%",
      programs: "Gifted Education Programme",
      investment: "$180M anuales",
      outcomes: "95% STEM careers"
    },
    {
      country: "Israel",
      identification: "5.1%",
      programs: "1,200+ programas",
      investment: "$95M anuales",
      outcomes: "90% investigación/tech"
    },
    {
      country: "Australia",
      identification: "4.2%",
      programs: "850+ programas",
      investment: "$75M anuales",
      outcomes: "78% educación superior"
    }
  ];

  const culturalFactors = [
    {
      icon: Globe,
      title: "Factores Culturales",
      data: "Variación 300% en identificación entre culturas",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Influencia Socioeconómica",
      data: "85% más identificación en niveles altos",
      color: "text-green-500"
    },
    {
      icon: TrendingUp,
      title: "Rendimiento Longitudinal",
      data: "68% mantiene alta performance >20 años",
      color: "text-purple-500"
    },
    {
      icon: BookOpen,
      title: "Acceso Educativo",
      data: "Solo 35% recibe educación diferenciada",
      color: "text-orange-500"
    }
  ];

  const underrepresentation = [
    {
      group: "Población Latina",
      expected: "18%",
      actual: "8.2%",
      gap: "54% menos"
    },
    {
      group: "Población Afroamericana",
      expected: "13%",
      actual: "5.7%",
      gap: "56% menos"
    },
    {
      group: "Nivel Socioeconómico Bajo",
      expected: "25%",
      actual: "12.1%",
      gap: "52% menos"
    },
    {
      group: "Estudiantes ELL",
      expected: "10%",
      actual: "3.8%",
      gap: "62% menos"
    }
  ];

  return (
    <section 
      ref={ref}
      className={`py-20 bg-gradient-to-br from-indigo-50 to-purple-50 section-fade ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-dark-slate mb-4">Panorama Global</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Datos mundiales sobre identificación, programas y resultados en superdotación
          </p>
        </div>

        {/* Datos por País */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {globalData.map((country, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-dark-slate mb-4">{country.country}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{country.identification}</div>
                    <p className="text-gray-600 text-sm">Identificación</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-sky-blue">{country.programs}</div>
                    <p className="text-gray-600 text-sm">Programas</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-green-500">{country.investment}</div>
                    <p className="text-gray-600 text-sm">Inversión</p>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-purple-500">{country.outcomes}</div>
                    <p className="text-gray-600 text-sm">Resultados</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Factores Culturales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {culturalFactors.map((factor, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6 text-center">
                <div className={`bg-${factor.color.split('-')[1]}/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                  <factor.icon className={`${factor.color}`} size={32} />
                </div>
                <h3 className="font-semibold text-dark-slate mb-2">{factor.title}</h3>
                <p className="text-gray-600 text-sm">{factor.data}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subrepresentación */}
        <Card className="shadow-lg">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-dark-slate mb-6 text-center">
              Brechas en Identificación (EE.UU.)
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Datos del National Center for Education Statistics mostrando subrepresentación sistemática
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {underrepresentation.map((group, index) => (
                <div key={index} className="text-center">
                  <div className="bg-red-100 rounded-lg p-4 mb-4">
                    <div className="text-2xl font-bold text-red-600">{group.gap}</div>
                    <div className="text-sm text-red-800">Brecha</div>
                  </div>
                  <h4 className="font-semibold text-dark-slate mb-2">{group.group}</h4>
                  <div className="text-sm text-gray-600">
                    <p>Esperado: {group.expected}</p>
                    <p>Real: {group.actual}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Fuente:</strong> Ford, D. Y. & Grantham, T. C. (2003). Providing access for culturally diverse gifted students. 
                Theory Into Practice, 42(3), 217-225.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}