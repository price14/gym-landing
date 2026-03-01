import { useState, useEffect, useRef } from 'react'

function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  const stats = [
    {
      icon: '👥',
      number: 500,
      suffix: '+',
      label: 'Miembros Activos'
    },
    {
      icon: '💪',
      number: 50,
      suffix: '+',
      label: 'Clases Semanales'
    },
    {
      icon: '🏆',
      number: 10,
      suffix: '+',
      label: 'Años de Experiencia'
    },
    {
      icon: '⭐',
      number: 98,
      suffix: '%',
      label: 'Satisfacción'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black via-red-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="text-6xl mb-4">{stat.icon}</div>
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">
                {isVisible ? (
                  <Counter 
                    end={stat.number} 
                    suffix={stat.suffix}
                    duration={2000}
                  />
                ) : (
                  '0'
                )}
              </div>
              <p className="text-zinc-300 text-lg font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ end, suffix, duration }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime = null
    const startCount = 0

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime
      const progress = (currentTime - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(startCount + (end - startCount) * progress))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  return (
    <span>
      {count}{suffix}
    </span>
  )
}

export default Stats