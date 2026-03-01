import { useState, useEffect } from 'react';

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    }

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    }
  }, []);

  const scrollToTop = () => {
    // Verificar si es un dispositivo móvil
    if (window.innerWidth > 768) { // Puedes ajustar este valor según tus necesidades
      setIsScrolling(true);
      const duration = 500;
      const start = window.scrollY;
      const startTime = performance.now();

      const animateScroll = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        window.scrollTo(0, start * (1 - progress));
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        } else {
          setIsScrolling(false);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

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
  );
}

export default ScrollToTop;