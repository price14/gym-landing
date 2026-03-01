import { useState } from 'react'

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Carlos Rodríguez',
      role: 'Miembro desde 2022',
      image: '👨‍💼',
      text: 'GymFit cambió mi vida completamente. Bajé 15kg en 6 meses y me siento más fuerte que nunca. Los entrenadores son increíbles y siempre están motivándote.',
      rating: 5
    },
    {
      id: 2,
      name: 'María González',
      role: 'Miembro desde 2021',
      image: '👩‍💼',
      text: 'El mejor gimnasio de la ciudad. Las instalaciones son de primera, las clases son variadas y el ambiente es muy motivador. 100% recomendado.',
      rating: 5
    },
    {
      id: 3,
      name: 'Juan Pérez',
      role: 'Miembro desde 2023',
      image: '👨‍🦱',
      text: 'Llevo 8 meses entrenando aquí y los resultados son visibles. El equipo es moderno, limpio y el personal muy profesional. Vale cada peso.',
      rating: 5
    },
    {
      id: 4,
      name: 'Ana Martínez',
      role: 'Miembro desde 2022',
      image: '👩‍🦰',
      text: 'Las clases de yoga y spinning son mi favoritas. He mejorado mi flexibilidad y resistencia. El ambiente es familiar y todos se apoyan.',
      rating: 5
    },
    {
      id: 5,
      name: 'Luis Torres',
      role: 'Miembro desde 2020',
      image: '👨‍🦲',
      text: 'Después de probar varios gimnasios, GymFit es el único donde me quedé. La atención personalizada y los planes de entrenamiento son excelentes.',
      rating: 5
    },
    {
      id: 6,
      name: 'Sofia Ramírez',
      role: 'Miembro desde 2023',
      image: '👩',
      text: 'Me encanta la variedad de clases y horarios. Siempre encuentro un espacio que se ajusta a mi agenda. Los entrenadores son muy atentos.',
      rating: 5
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToTestimonial = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          LO QUE DICEN <span className="text-red-600">NUESTROS CLIENTES</span>
        </h2>
        <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto">
          Historias reales de personas que transformaron sus vidas con nosotros
        </p>

        {/* Carrusel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Tarjeta de testimonio */}
          <div className="bg-zinc-800 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="text-7xl mb-4">
                {testimonials[currentIndex].image}
              </div>

              {/* Estrellas */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>

              {/* Texto */}
              <p className="text-zinc-300 text-lg md:text-xl mb-6 italic leading-relaxed">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Nombre y rol */}
              <h3 className="text-white text-xl font-bold mb-1">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-red-600 font-semibold">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-red-600 hover:bg-red-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl transition transform hover:scale-110 shadow-lg"
          >
            ‹
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-red-600 hover:bg-red-700 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl transition transform hover:scale-110 shadow-lg"
          >
            ›
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? 'bg-red-600 w-8' : 'bg-zinc-600 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>

        {/* Grid de testimonios (opcional - versión desktop) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mt-16">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-zinc-800 rounded-lg p-6 hover:transform hover:scale-105 transition">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-3">{testimonial.image}</div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-zinc-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex space-x-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-zinc-300 text-sm italic">"{testimonial.text.substring(0, 100)}..."</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials