function Classes() {
  const classes = [
    {
      name: 'CrossFit',
      icon: '🏋️‍♂️',
      description: 'Entrenamiento funcional de alta intensidad',
      duration: '60 min'
    },
    {
      name: 'Yoga',
      icon: '🧘‍♀️',
      description: 'Mejora tu flexibilidad y paz mental',
      duration: '45 min'
    },
    {
      name: 'Spinning',
      icon: '🚴‍♂️',
      description: 'Cardio intenso con música motivadora',
      duration: '50 min'
    },
    {
      name: 'Boxing',
      icon: '🥊',
      description: 'Aprende técnicas mientras te pones en forma',
      duration: '55 min'
    }
  ]

  return (
    <section id="classes" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4" data-aos="fade-up">
          NUESTRAS <span className="text-red-600">CLASES</span>
        </h2>
        <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Variedad de entrenamientos para todos los niveles
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((classItem, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-b from-zinc-700 to-zinc-800 p-8 rounded-lg hover:from-red-900 hover:to-zinc-900 transition-all duration-300 group"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{classItem.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{classItem.name}</h3>
              <p className="text-zinc-400 mb-4">{classItem.description}</p>
              <div className="flex items-center text-red-600">
                <span className="mr-2">⏱️</span>
                <span className="font-semibold">{classItem.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Classes