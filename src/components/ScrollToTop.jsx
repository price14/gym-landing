import { useState, useEffect } from 'react'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    setIsScrolling(true)
    
    // Scroll animado más lento y visible
    const scrollStep = -window.scrollY / (1500 / 15) // Duración: 1500ms
    
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep)
      } else {
        clearInterval(scrollInterval)
        setIsScrolling(false)
      }
    }, 15)
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          disabled={isScrolling}
          className={`fixed bottom-8 right-8 z-50 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ${
            isScrolling
              ? 'bg-red-700 scale-95 cursor-wait'
              : 'bg-red-600 hover:bg-red-700 hover:scale-110 animate-bounce hover:animate-none'
          }`}
          style={{
            boxShadow: isScrolling 
              ? '0 0 30px rgba(220, 38, 38, 0.8)' 
              : '0 10px 25px rgba(0, 0, 0, 0.5)'
          }}
          aria-label="Volver arriba"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              isScrolling ? 'animate-spin' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  )
}

export default ScrollToTop