function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 text-center" data-aos="fade-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          TRANSFORMA TU <span className="text-red-600">CUERPO</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Alcanza tus metas fitness con los mejores entrenadores y equipamiento
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-bold transition transform hover:scale-105"
          >
            Comienza Ahora
          </a>
          <a 
            href="#pricing"
            className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-full text-lg font-bold transition"
          >
            Ver Planes
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero