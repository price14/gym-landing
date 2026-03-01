import { useState } from 'react'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800',
      title: 'Área de Pesas'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800',
      title: 'Zona Cardio'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800',
      title: 'Clases Grupales'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1584466977773-e625c37cdd50?w=800',
      title: 'Entrenamiento Funcional'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1623874228601-f4193c7b1818?w=800',
      title: 'Área de Stretching'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800',
      title: 'Vestuarios Premium'
    }
  ]

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4" data-aos="fade-up">
          NUESTRAS <span className="text-red-600">INSTALACIONES</span>
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Conoce nuestro gimnasio equipado con la mejor tecnología
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg h-64"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <h3 className="text-white font-bold text-xl p-6">{image.title}</h3>
              </div>
              <div className="absolute inset-0 border-2 border-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-red-600 transition"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <h3 className="text-white text-2xl font-bold text-center mt-4">
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery