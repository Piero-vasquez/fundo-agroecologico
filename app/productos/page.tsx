"use client";
import Image from "next/image"
import React, { useState } from "react"
import { Card, CardContent } from "../../components/ui/card"
import { Badge } from "../../components/ui/badge"

type Producto = {
  id: number;
  nombre: string;
  precio: number | null;
  descripcion: string;
  imagen: string;
  categoria: string;
  disponible: boolean;
  rating: number;
  beneficios: string[];
  mensajeWhatsapp: string;
  destacado?: boolean;
  casiAgotado?: boolean;
};

export default function ProductosPage() {
  const productos = [

    {
      id: 1,
      nombre: "Fresas Hidropónicas Premium - Taper Grande (1kg)",
      precio: 12,
      descripcion:
        "Fresas jugosas y dulces, cultivadas en ambiente controlado sin pesticidas.",
      imagen: "/fresa.jpg",
      categoria: "Fresas",
      disponible: true,
      rating: 4.9,
      beneficios: [
        "Rico en Vitamina C",
        "Antioxidantes naturales",
        "Bajo en calorías",
      ],
      mensajeWhatsapp:
        "Hola, quiero pedir Fresas Hidropónicas Premium - Taper Grande (1kg) por S/12.",
    },
    {
      id: 2,
      nombre: "Fresas Hidropónicas Premium - Taper Pequeño (½kg)",
      precio: 6,
      descripcion:
        "Fresas dulces y jugosas, ricas en vitamina C y antioxidantes, ideales para desayunos, postres y smoothies.",
      imagen: "/fresas_taper_pequeño.jpeg",
      categoria: "Fresas",
      disponible: true,
      rating: 4.8,
      beneficios: ["Fuente de vitamina C", "Fibra Dietética"],
      mensajeWhatsapp:
        "Hola, quiero pedir Fresas Hidropónicas Premium - Taper Pequeño (½kg) por S/6.",
    },
    {
      id: 3,
      nombre: "Frambuesas (1kg)",
      precio: 25,
      descripcion:
        "Cosecha manual y selectiva: Seleccionamos solo frutos en su punto óptimo de maduración. Presentación: 1kg.",
      imagen: "/frambuesa_fundo_agroecologico.jpg",
      categoria: "Frambuesas",
      disponible: true,
      rating: 5.0,
      beneficios: ["Fuente de vitamina C ", "Fibra Dietética"],
      mensajeWhatsapp:
        "Hola, quiero pedir Frambuesas Hidropónicas Premium (1kg) por S/25.",
    },

    {
      id: 4,
      nombre: "Frambuesas Congeladas Premium",
      precio: null,
      descripcion:
        "Frambuesas cosechadas en su punto óptimo y congeladas individualmente en túnel a –30 °C para preservar su textura, sabor y nutrientes.",
      imagen: "/frambuesa_congelada.jpg",
      categoria: "Fresas",
      disponible: true,
      destacado: true,
      casiAgotado: true,
      rating: 4.8,
      beneficios: [
        "IQF (Congelación Rápida Individual): cada frambuesa se congela en segundos, evitando cristales de hielo grandes y manteniendo estructura celular.",
        "Disponibles todo el año: no dependen de temporada.",
        "Listas para usar: ideales para smoothies, postres y salsas; saca sólo la cantidad que necesites sin descongelar todo el paquete.",
        "Larga vida útil: almacenamiento seguro hasta 12 meses sin degradación de calidad.",
        "Orgánico: cultivo sin pesticidas ni fertilizantes sintéticos.",
      ],
      mensajeWhatsapp:
        "Hola, deseo consultar por las Frambuesas Congeladas Premium. ¿Podrían brindarme más información?",
    },

    {
      id: 5,
      nombre: "Aguaymanto (½kg)",
      precio: 6.5,
      descripcion:
        "Aguaymanto pelado, heladito, listo para desinfectar y consumir. Presentación en bandejita de medio kilo.",
      imagen: "/aguaymanto.jpg", // Asegúrate de tener la imagen en /public
      categoria: "Aguaymanto",
      disponible: true,
      rating: 4.7,
      beneficios: [
        "Rico en antioxidantes",
        "Fuente de vitamina C",
        "Listo para consumir",
      ],
      mensajeWhatsapp:
        "Hola, quiero pedir Aguaymanto Peladita (½kg) por S/6.50.",
      destacado: false,
      casiAgotado: false,
    },
    {
      id: 6,
      nombre: "Arándanos Premium (½kg)",
      precio: 14,
      descripcion:
        "Arándanos de calidad premium, grandes y bonitos. Pote de medio kilo.",
      imagen: "/arandanos.jpg", // Asegúrate de tener la imagen en /public
      categoria: "Arándanos",
      disponible: true,
      rating: 4.9,
      beneficios: [
        "Alto contenido de antioxidantes",
        "Fruta fresca y grande",
        "Ideal para postres y snacks",
      ],
      mensajeWhatsapp:
        "Hola, quiero pedir Arándanos Premium (½kg) por S/14.",
      destacado: false,
      casiAgotado: false,
    },
    {
      id: 7,
      nombre: "Zarzamoras (1kg)",
      precio: 35,
      descripcion:
        "Zarzamoras frescas, ideales para postres, jugos y consumo directo.",
      imagen: "/zarzamoras.jpg", // Asegúrate de tener la imagen en /public
      categoria: "Zarzamoras",
      disponible: true,
      rating: 4.8,
      beneficios: [
        "Ricas en fibra y antioxidantes",
        "Sabor intenso y natural",
        "Perfectas para recetas dulces y saladas",
      ],
      mensajeWhatsapp:
        "Hola, quiero pedir Zarzamoras (1kg) por S/35.",
      destacado: false,
      casiAgotado: false,
    },
    
    // Producto destacado y casi agotado
    {
      id: 8,
      nombre: "Frambuesa Amarilla (100g)",
      precio: 5,
      descripcion:
        "Frambuesa amarilla, especie de prueba. Tapercito de 100g. Producto de novedad, cantidades limitadas.",
      imagen: "/frambuesa_amarilla.jpg", // Asegúrate de tener la imagen en /public
      categoria: "Frambuesas",
      disponible: true,
      rating: 4.6,
      beneficios: [
        "Variedad exclusiva",
        "Sabor suave y dulce",
        "Ideal para degustar",
      ],
      mensajeWhatsapp:
        "Hola, quiero pedir Frambuesa Amarilla (100g) por S/5.",
      destacado: true,
      casiAgotado: true,
    },

  ];

  const [modalOpen, setModalOpen] = useState(false)
  const [modalProducto, setModalProducto] = useState<Producto | null>(null)

  const handleImgClick = (producto: Producto) => {
    setModalProducto(producto)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalProducto(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Header Section */}
      <section
        className="text-white py-16"
        style={{
          backgroundImage: "url('/captura.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "50% 20%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-5xl font-bold">PRODUCTOS</h1>
            </div>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Descubre nuestra selección de frutas hidropónicas orgánicas,
              cultivadas con amor y tecnología sostenible
            </p>
          </div>
        </div>
      </section>

      {/* Productos Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {productos.map((producto) => (
              <Card
                key={producto.id}
                className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-0 bg-white"
              >
                <div
                  className="relative h-80 bg-gradient-to-br from-red-50 to-pink-50 cursor-pointer"
                  onClick={() => handleImgClick(producto)}
                  title="Ver producto completo"
                >
                  <Image
                    src={producto.imagen || "/placeholder.svg"}
                    alt={producto.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-green-500 text-white">Orgánico</Badge>
                    {producto.casiAgotado && (
                      <Badge className="bg-yellow-400 text-yellow-900 font-bold">
                        Casi Agotado
                      </Badge>
                    )}
                    {!producto.disponible && !producto.casiAgotado && (
                      <Badge variant="destructive">Agotado</Badge>
                    )}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {producto.nombre}
                    {producto.destacado && (
                      <span className="ml-2 px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded font-semibold align-middle">
                        Novedad
                      </span>
                    )}
                    {producto.nombre.includes("Frambuesa Amarilla") && (
                      <span className="ml-2 px-2 py-1 bg-pink-200 text-pink-800 text-xs rounded font-semibold align-middle animate-pulse">
                        Edición Limitada
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {producto.descripcion}
                    {producto.nombre.includes("Frambuesa Amarilla") && (
                      <span className="block mt-2 text-pink-700 text-sm font-semibold">
                        * Producto experimental, cantidades muy limitadas. Venta
                        solo en presentación de 100g. ¡Próximamente por kilo!
                      </span>
                    )}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Beneficios:
                    </h4>
                    {producto.nombre === "Frambuesas Congeladas Premium" ? (
                      <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                        {producto.beneficios.map((beneficio, idx) => (
                          <li key={idx}>{beneficio}</li>
                        ))}
                      </ul>
                    ) : (
                      <div className="flex flex-wrap gap-2">
                        {producto.beneficios.map((beneficio, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs"
                          >
                            {beneficio}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    {producto.nombre === "Frambuesas Congeladas Premium" ? (
                      <>
                        <span className="text-3xl font-bold text-green-600"></span>
                        <a
                          href={`https://wa.me/51981050724?text=${encodeURIComponent(
                            producto.mensajeWhatsapp || ""
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all px-6 py-2 bg-green-600 hover:bg-green-700 text-white"
                        >
                          Consultar
                        </a>
                      </>
                    ) : (
                      <>
                        <div className="text-3xl font-bold text-green-600">
                          S/ {producto.precio}
                          <span className="text-sm text-gray-500 font-normal">
                            /kg
                          </span>
                        </div>
                        {producto.disponible ? (
                          <a
                            href={`https://wa.me/51981050724?text=${encodeURIComponent(
                              producto.mensajeWhatsapp || ""
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all px-6 py-2 bg-green-600 hover:bg-green-700 text-white"
                          >
                            Pedir Ahora
                          </a>
                        ) : (
                          <span className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all px-6 py-2 bg-gray-400 cursor-not-allowed text-white">
                            No Disponible
                          </span>
                        )}
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para mostrar Card completa */}
      {modalOpen && modalProducto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeModal}
        >
          <div
            className="relative max-w-xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
              onClick={closeModal}
              aria-label="Cerrar"
            >
              ✕
            </button>
            {/* Card completa en el modal */}
            {modalOpen && modalProducto && (
              <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-transparent"
                onClick={closeModal}
                style={{ backdropFilter: "blur(2px)" }} // Opcional: desenfoque sutil
              >
                <div
                  className="relative max-w-xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
                    onClick={closeModal}
                    aria-label="Cerrar"
                  >
                    ✕
                  </button>
                  <div className="relative w-full h-[70vh] bg-white rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="group relative w-full h-full flex items-center justify-center">
                      <Image
                        src={modalProducto.imagen || "/placeholder.svg"}
                        alt={modalProducto.nombre}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-125 cursor-zoom-in"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Información Adicional */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Información de Pedidos
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Pedido Mínimo</h3>
                <p className="text-gray-600">
                  S/ 25 para delivery gratuito en Lima
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  Tiempo de Entrega
                </h3>
                <p className="text-gray-600">24-48 horas desde la cosecha</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">
                  Frescura Garantizada
                </h3>
                <p className="text-gray-600">
                  100% de satisfacción o devolución
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}