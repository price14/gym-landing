import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: '¿Necesito experiencia previa para unirme?',
      answer: 'No, nuestro gimnasio está diseñado para todos los niveles. Tenemos entrenadores que te guiarán desde el primer día, sin importar si eres principiante o avanzado.'
    },
    {
      question: '¿Qué incluye la membresía?',
      answer: 'Todas las membresías incluyen acceso al gimnasio, vestuarios, duchas y Wi-Fi. Los planes Pro y Elite incluyen clases grupales, entrenador personal y beneficios adicionales.'
    },
    {
      question: '¿Puedo cancelar mi membresía en cualquier momento?',
      answer: 'Sí, no hay contratos de permanencia. Puedes cancelar tu membresía con 30 días de anticipación sin penalizaciones.'
    },
    {
      question: '¿Ofrecen clases de prueba gratuitas?',
      answer: 'Sí, ofrecemos una clase de prueba totalmente gratis para que conozcas nuestras instalaciones y entrenadores antes de tomar una decisión.'
    },
    {
      question: '¿Cuál es el horario de atención?',
      answer: 'Estamos abiertos de lunes a viernes de 6:00 AM a 11:00 PM, sábados de 7:00 AM a 9:00 PM y domingos de 8:00 AM a 8:00 PM. El plan Elite incluye acceso 24/7.'
    },
    {
      question: '¿Tienen estacionamiento?',
      answer: 'Sí, contamos con estacionamiento gratuito para todos nuestros miembros con amplio espacio y seguridad.'
    },
    {
      question: '¿Qué medidas de higiene tienen?',
      answer: 'Limpiamos y desinfectamos el equipo regularmente, contamos con estaciones de desinfección en todo el gimnasio y mantenemos una ventilación óptima en todas las áreas.'
    },
    {
      question: '¿Puedo congelar mi membresía?',
      answer: 'Sí, puedes congelar tu membresía por hasta 2 meses al año por motivos de viaje, lesión o situaciones personales, sin costo adicional.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4" data-aos="fade-up">
          PREGUNTAS <span className="text-red-600">FRECUENTES</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Resolvemos tus dudas más comunes
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-red-600 transition"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none group"
              >
                <span className="text-lg font-semibold text-white group-hover:text-red-600 transition pr-4">
                  {faq.question}
                </span>
                <span className={`text-3xl text-red-600 transition-transform duration-300 flex-shrink-0 ${
                  openIndex === index ? 'rotate-45' : ''
                }`}>
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="400">
          <p className="text-gray-400 mb-4">¿Tienes más preguntas?</p>
          <a 
            href="#contact" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition transform hover:scale-105"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ