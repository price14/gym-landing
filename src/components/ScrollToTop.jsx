// src/components/ScrollToTop.jsx

import { useState, useEffect } from 'react';

function ScrollToTop() {
  // Estado para controlar la visibilidad del botón
  const [isVisible, setIsVisible] = useState(false);

  // Función para mostrar el botón si el scroll es mayor a 300px
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Función para hacer scroll suave hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esto hace la animación de scroll suave
    });
  };

  // useEffect para añadir y limpiar el event listener del scroll
  useEffect(() => {
    // Añadimos el listener cuando el componente se monta
    window.addEventListener('scroll', toggleVisibility);

    // Limpiamos el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* El botón solo se renderiza si isVisible es true */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-transform duration-200 ease-in-out hover:scale-110"
          aria-label="Volver arriba"
        >
          {/* Icono de flecha hacia arriba (SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default ScrollToTop;