function Pricing() {
  const plans = [
    {
      name: 'BÁSICO',
      price: '29',
      features: [
        'Acceso al gimnasio',
        'Vestuarios y duchas',
        'App móvil',
        'Wi-Fi gratis'
      ],
      popular: false
    },
    {
      name: 'PRO',
      price: '49',
      features: [
        'Todo lo del plan Básico',
        'Clases grupales ilimitadas',
        'Entrenador personal (2 sesiones/mes)',
        'Nutricionista',
        'Acceso a sauna'
      ],
      popular: true
    },
    {
      name: 'ELITE',
      price: '79',
      features: [
        'Todo lo del plan Pro',
        'Entrenador personal ilimitado',
        'Plan nutricional personalizado',
        'Acceso 24/7',
        'Invitado gratis',
        'Masajes deportivos'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4" data-aos="fade-up">
          PLANES Y <span className="text-red-600">PRECIOS</span>
        </h2>
        <p className="text-center text-zinc-400 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Elige el plan que mejor se adapte a tus necesidades
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-zinc-800 rounded-2xl p-8 ${
                plan.popular ? 'ring-4 ring-red-600 transform scale-105' : ''
              }`}
              data-aos="flip-left"
              data-aos-delay={index * 100}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MÁS POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-4 text-center">{plan.name}</h3>
              
              <div className="text-center mb-6">
                <span className="text-5xl font-bold text-white">${plan.price}</span>
                <span className="text-zinc-400">/mes</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-zinc-300">
                    <span className="text-red-600 mr-2 text-xl">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact"
                className={`block w-full py-3 rounded-full font-bold text-center transition transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-red-600 hover:bg-red-700 text-white' 
                    : 'bg-zinc-700 hover:bg-zinc-600 text-white'
                }`}
              >
                Seleccionar Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing