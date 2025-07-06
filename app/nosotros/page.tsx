import Image from "next/image"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"
import { Leaf, Award, Users, Target, Heart, Sprout } from "lucide-react"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              ¡Hola! Somos el Fundo Agroecológico, un pequeño rincón en el valle
              de Lurín que nació de un gran sueño: transformar la tierra y
              volver a lo natural.
            </p>
          </div>
        </div>
      </section>

      {/* Historia y Propósito */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-16">
            {/* Historia */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-6 text-center">
                Nuestra Historia
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed text-center">
                ¡Hola! Somos el Fundo Agroecológico, un pequeño rincón en el
                valle de Lurín que nació de un gran sueño: transformar la tierra
                y volver a lo natural.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-center">
                Todo comenzó hace ya varios años, con la visión de dejar atrás
                la agricultura tradicional para abrazar una producción que cuida
                de ti y del planeta. Así, en el fértil suelo de Pachacámac, en
                Lima, echamos raíces con un propósito claro: cultivar alimentos
                de una manera más consciente y sostenible.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-center">
                Nos dedicamos con pasión a la producción agroecológica de
                delicias como arándanos, berries y otras frutas frescas. Fundo
                Agroecológico es un sueño hecho realidad que nació en el año
                2020 en el corazón del hermoso Valle de Pachacámac, en Lima.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4 text-center">
                Todo comenzó con el anhelo de cambiar la agricultura tradicional
                por una producción agroecológica, consciente y llena de vida,
                soñando con cultivar las más ricas bayas (¡como nuestras
                frambuesas y fresas!) de forma cada vez más sostenible.
              </p>
            </div>

            {/* Valores */}
            <div>
              <h3 className="text-3xl font-bold text-green-700 mb-8 text-center">
                Nuestros Valores
              </h3>
              <p className="text-base text-gray-700 mb-10 text-center max-w-2xl mx-auto">
                La Brújula de Nuestro Día a Día: estos son los pilares que guían
                cada decisión que tomamos, desde la siembra hasta que el
                producto llega a tus manos.
              </p>
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <Card className="bg-green-50 border-0 shadow-md flex flex-col items-center p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <Leaf className="w-10 h-10 text-green-600 mb-3" />
                  <h4 className="font-bold text-green-700 text-lg mb-2">
                    Integridad
                  </h4>
                  <p className="text-gray-700 text-center text-base">
                    Actuamos con honestidad y transparencia. Somos lo que
                    cultivamos: auténticos y confiables.
                  </p>
                </Card>
                <Card className="bg-blue-50 border-0 shadow-md flex flex-col items-center p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <Heart className="w-10 h-10 text-blue-600 mb-3" />
                  <h4 className="font-bold text-blue-700 text-lg mb-2">
                    Respeto
                  </h4>
                  <p className="text-gray-700 text-center text-base">
                    Honramos profundamente a nuestra gente, a nuestros clientes,
                    a la comunidad y a la tierra que nos nutre. Este respeto es
                    la semilla de todo lo que hacemos.
                  </p>
                </Card>
                <Card className="bg-purple-50 border-0 shadow-md flex flex-col items-center p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <Users className="w-10 h-10 text-purple-600 mb-3" />
                  <h4 className="font-bold text-purple-700 text-lg mb-2">
                    Trabajo en Equipo
                  </h4>
                  <p className="text-gray-700 text-center text-base">
                    Creemos en el poder de la colaboración. Juntos, como una
                    gran familia, cuidamos la seguridad y salud de cada miembro
                    y promovemos el desarrollo social, porque sabemos que los
                    grandes sueños se cultivan unidos.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Nuestra Misión
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Cultivar alimentos puros, saludables y únicos, libres de
                    agroquímicos y contaminantes, para cuidar de tu salud y la
                    de nuestro planeta.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-0">
                  <div className="flex items-center mb-6">
                    <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                      <Leaf className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Nuestra Visión
                    </h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ser el líder en la producción y comercialización de
                    frambruesas en la región de Lima, a través de prácticas
                    agroecológicas innovadores y sostenibles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Nuestro Compromiso
                </h2>
                <p className="text-lg text-gray-600 mb-6"></p>
                <p className="text-lg text-gray-600 mb-6">
                  En Fundo Agroecológico nos comprometemos a producir fresas y
                  frambuesas de la más alta calidad utilizando prácticas 100 %
                  orgánicas y amigables con el medio ambiente, combinando el
                  cultivo hidropónico con métodos de biocontrol para garantizar
                  productos libres de agroquímicos. Creemos en la conservación
                  del agua y la salud del suelo, por lo que empleamos sistemas
                  de riego tecnificado que reducen significativamente el consumo
                  y reutilizamos insumos biodegradables siempre que es posible.
                  Además, fomentamos la capacitación continua de nuestro equipo
                  y compartimos conocimientos con la comunidad local para
                  impulsar la agricultura sostenible en la región. Cada fruto
                  que llega a tus manos es fruto de un proceso trazable,
                  responsable y orientado al bienestar de nuestros colaboradores
                  y de quienes nos rodean. .
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-green-100 text-green-800 px-4 py-2">
                    <Award className="w-4 h-4 mr-2" />
                    Certificación Orgánica 2024
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-800 px-4 py-2">
                    <Sprout className="w-4 h-4 mr-2" />
                    Cultivo Hidropónico
                  </Badge>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                  <Image
                    src="/nosotros_imagen.jpg"
                    alt="Fundo Agroecológico"
                    width={500}
                    height={400}
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logros 2024 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Logros 2024
              </h2>
              <p className="text-xl text-gray-600">
                Un año de crecimiento y reconocimientos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 border-0 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-0">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-600 mb-2 ">
                    Certificación
                  </h3>
                  <p className="text-gray-600">Orgánica Oficial</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-0">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-600 mb-2">
                    +10%
                  </h3>
                  <p className="text-gray-600">Incremento en Ventas</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-0">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-600 mb-2">
                    -5%
                  </h3>
                  <p className="text-gray-600">Reducción de Costos</p>
                </CardContent>
              </Card>

              <Card className="text-center p-6 border-0 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <CardContent className="p-0">
                  <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-600 mb-2">
                    Persona
                  </h3>
                  <p className="text-gray-600">Jurídica Formalizada</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de Cultivo */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nuestro Proceso
              </h2>
              <p className="text-xl text-gray-600">
                Tecnología hidropónica para máxima calidad
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Siembra Controlada
                </h3>
                <p className="text-gray-600">
                  Seleccionamos las mejores semillas y las cultivamos en un
                  ambiente completamente controlado sin uso de tierra.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Nutrición Precisa
                </h3>
                <p className="text-gray-600">
                  Proporcionamos nutrientes específicos a través de soluciones
                  acuosas balanceadas para un crecimiento óptimo.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Cosecha Fresca</h3>
                <p className="text-gray-600">
                  Cosechamos en el punto perfecto de maduración para garantizar
                  el mejor sabor y valor nutricional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
