"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "../../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Phone, MapPin, Clock, MessageCircle, Send } from "lucide-react"

export default function ContactosPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoConsulta: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Formulario enviado:", formData)
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.")
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      tipoConsulta: "",
      mensaje: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-12 h-12 mr-4" />
              <h1 className="text-5xl font-bold">CONTACTOS</h1>
            </div>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              ¿Tienes alguna pregunta o quieres hacer un pedido? Estamos aquí para ayudarte
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Información de Contacto */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de Contacto</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Nos encanta escuchar de nuestros clientes. Contáctanos por cualquiera de estos medios y te responderemos lo antes posible.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Teléfono */}
                  <a
                    href="tel:51981050724"
                    className="flex items-center bg-green-600 text-white rounded-full px-6 py-4 text-lg font-semibold shadow-lg hover:bg-green-700 transition"
                    style={{ textDecoration: "none" }}
                  >
                    <Phone className="w-6 h-6 mr-3" />
                    Teléfono: 981 050 724
                  </a>
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/51981050724"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-green-700 text-white rounded-full px-6 py-4 text-lg font-semibold shadow-lg hover:bg-green-800 transition"
                    style={{ textDecoration: "none" }}
                  >
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M20.52 3.48A12.07 12.07 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.01L0 24l6.18-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.67.97.98-3.58-.24-.37A9.93 9.93 0 0 1 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.4-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.44.03 1.44 1.03 2.84 1.18 3.04.15.2 2.03 3.1 5.02 4.23.7.24 1.25.38 1.68.48.7.15 1.34.13 1.85.08.56-.06 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                    Realiza tu pedido
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/fundoagroecologicob/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-pink-600 text-white rounded-full px-6 py-4 text-lg font-semibold shadow-lg hover:bg-pink-700 transition"
                    style={{ textDecoration: "none" }}
                  >
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.58.21 1 .46 1.44.9.44.44.69.86.9 1.44.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.21.58-.46 1-.9 1.44-.44.44-.86.69-1.44.9-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.58-.21-1-.46-1.44-.9-.44-.44-.69-.86-.9-1.44-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.21-.58.46-1 .9-1.44.44-.44.86-.69 1.44-.9.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07 5.77.128 4.87.312 4.1.54c-.77.228-1.42.53-2.07 1.18C1.53 2.87 1.228 3.52 1 4.29c-.228.77-.412 1.67-.47 2.95C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.242 2.18.47 2.95.228.77.53 1.42 1.18 2.07.65.65 1.3.952 2.07 1.18.77.228 1.67.412 2.95.47C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.18-.242 2.95-.47.77-.228 1.42-.53 2.07-1.18.65-.65.952-1.3 1.18-2.07.228-.77.412-1.67.47-2.95.058-1.28.07-1.684.07-4.948 0-3.264-.012-3.668-.07-4.948-.058-1.28-.242-2.18-.47-2.95-.228-.77-.53-1.42-1.18-2.07-.65-.65-1.3-.952-2.07-1.18-.77-.228-1.67-.412-2.95-.47C15.668.012 15.264 0 12 0z"/><path d="M12 5.838A6.162 6.162 0 1 0 12 18.162 6.162 6.162 0 1 0 12 5.838zm0 10.162A4 4 0 1 1 12 7.838a4 4 0 0 1 0 8.162zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
                    Mi Instagram
                  </a>
                  
                  {/* Dirección */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Dirección</h3>
                          <p className="text-gray-600">Pachacámac Lima C.Y.D Mz. H Lt. 31</p>
                          <p className="text-sm text-gray-500">Visitas con cita previa</p>
                        </div>
                      </div>
                      {/* Mapa Google Maps */}
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                          src="https://www.google.com/maps?q=-12.2095337,-76.8538748&z=17&output=embed"
                          width="100%"
                          height="200"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Ubicación Fundo Agroecológico"
                        ></iframe>
                      </div>
                    </CardContent>
                  </Card>
                  {/* Horarios */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center">
                        <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                          <Clock className="w-6 h-6 text-yellow-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">Horarios de Atención</h3>
                          <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                          <p className="text-gray-600">Sábados: 8:00 AM - 2:00 PM</p>
                          <p className="text-sm text-gray-500">Domingos: Cerrado</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Formulario de Contacto */}
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Envíanos un Mensaje</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nombre">Nombre Completo *</Label>
                        <Input
                          id="nombre"
                          value={formData.nombre}
                          onChange={(e) => handleInputChange("nombre", e.target.value)}
                          placeholder="Tu nombre completo"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="telefono">Teléfono</Label>
                        <Input
                          id="telefono"
                          value={formData.telefono}
                          onChange={(e) => handleInputChange("telefono", e.target.value)}
                          placeholder="Tu número de teléfono"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="tipoConsulta">Tipo de Consulta</Label>
                      <Select onValueChange={(value) => handleInputChange("tipoConsulta", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona el tipo de consulta" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pedido">Realizar Pedido</SelectItem>
                          <SelectItem value="informacion">Información de Productos</SelectItem>
                          <SelectItem value="mayorista">Ventas al Mayoreo</SelectItem>
                          <SelectItem value="visita">Agendar Visita</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="mensaje">Mensaje *</Label>
                      <Textarea
                        id="mensaje"
                        value={formData.mensaje}
                        onChange={(e) => handleInputChange("mensaje", e.target.value)}
                        placeholder="Cuéntanos cómo podemos ayudarte..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Información de Compra */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">¿Cómo Comprar?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-green-50 rounded-lg">
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Contáctanos</h3>
                <p className="text-gray-600">Llámanos o envía un mensaje con tu pedido y datos de entrega</p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Confirmamos</h3>
                <p className="text-gray-600">Confirmamos disponibilidad, precio y coordinamos la entrega</p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">Recibe</h3>
                <p className="text-gray-600">Recibe tus productos frescos en la puerta de tu casa</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}