import { useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // REEMPLAZA ESTOS VALORES CON LOS TUYOS
      const result = await emailjs.send(
        'service_v9hpjsk',      // Reemplaza con tu Service ID
        'template_2cirdbq',     // Reemplaza con tu Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message
        },
        '3vyl4PGjqkkI7fZC1'       // Reemplaza con tu Public Key
      )

      console.log('Email enviado:', result.text)
      setSubmitStatus('success')
      
      // Limpiar formulario
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })

      // Ocultar mensaje de éxito después de 5 segundos
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)

    } catch (error) {
      console.error('Error al enviar email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CONTÁCTANOS
            </h2>
            <p className="text-zinc-400 mb-8 text-lg">
              ¿Listo para transformar tu vida? Estamos aquí para ayudarte.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="text-red-600 text-3xl mr-4">📍</div>
                <div>
                  <h3 className="text-white font-bold mb-1">Dirección</h3>
                  <p className="text-zinc-400">Av. Fitness 123, Ciudad</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-red-600 text-3xl mr-4">📞</div>
                <div>
                  <h3 className="text-white font-bold mb-1">Teléfono</h3>
                  <p className="text-zinc-400">+1 234 567 890</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-red-600 text-3xl mr-4">📧</div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email</h3>
                  <p className="text-zinc-400">info@fitgym.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="text-red-600 text-3xl mr-4">⏰</div>
                <div>
                  <h3 className="text-white font-bold mb-1">Horarios</h3>
                  <p className="text-zinc-400">Lun - Vie: 6AM - 11PM</p>
                  <p className="text-zinc-400">Sáb - Dom: 7AM - 9PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="bg-zinc-800 p-8 rounded-lg">
              <div className="mb-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Tu Nombre"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name ? 'ring-2 ring-red-500' : 'focus:ring-red-600'
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Tu Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email ? 'ring-2 ring-red-500' : 'focus:ring-red-600'
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Tu Teléfono"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 ${
                    errors.phone ? 'ring-2 ring-red-500' : 'focus:ring-red-600'
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Tu Mensaje"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 resize-none ${
                    errors.message ? 'ring-2 ring-red-500' : 'focus:ring-red-600'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 rounded-lg font-bold transition transform hover:scale-105 ${
                  isSubmitting
                    ? 'bg-zinc-600 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {/* Mensajes de estado */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-600 text-white rounded-lg text-center">
                  ¡Mensaje enviado con éxito! Te contactaremos pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-600 text-white rounded-lg text-center">
                  Error al enviar el mensaje. Por favor intenta de nuevo.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact