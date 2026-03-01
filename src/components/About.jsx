function About() {
  const features = [
    {
      icon: '💪',
      title: 'Entrenadores Expertos',
      description: 'Personal certificado con años de experiencia'
    },
    {
      icon: '🏋️',
      title: 'Equipo Moderno',
      description: 'Maquinaria de última generación'
    },
    {
      icon: '⏰',
      title: 'Horarios Flexibles',
      description: 'Abierto de 6 AM a 11 PM todos los días'
    },
    {
      icon: '🎯',
      title: 'Resultados Garantizados',
      description: 'Planes personalizados para tus objetivos'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4" data-aos="fade-up">
          ¿POR QUÉ <span className="text-red-600">ELEGIRNOS?</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Somos más que un gimnasio, somos tu familia fitness
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-8 rounded-lg text-center hover:transform hover:scale-105 transition"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About