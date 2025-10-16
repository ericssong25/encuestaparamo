// Removed lucide-react import

import { useState } from 'react';

export default function ThankYouScreen() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="w-full max-w-6xl mx-auto animate-fade-in">
        <div className="bg-white rounded-3xl shadow-card p-8 md:p-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Columna izquierda - Contenido principal */}
            <div className="text-center md:text-left space-y-6">
              <div className="flex justify-center md:justify-start">
                <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center animate-bounce-slow">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-creato font-bold text-dark">
                ¡Gracias!
              </h1>

              <p className="text-lg md:text-xl font-garet text-dark/70 leading-relaxed">
                Hemos recibido tus respuestas. Tu opinión es muy valiosa para nosotros y nos ayuda a mejorar continuamente nuestros servicios.
              </p>

              <div className="pt-4">
                <div className="inline-block px-8 py-3 gradient-animated rounded-xl">
                  <p className="text-white font-garet font-medium">
                    Tu feedback hace la diferencia
                  </p>
                </div>
              </div>
            </div>
            
            {/* Columna derecha - Flyer */}
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-xl shadow-sm p-4 max-w-sm">
                <div className="aspect-[4/5] bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300" onClick={openModal}>
                  <img 
                    src="/referidos.jpg" 
                    alt="Plan de Referidos - Páramo Creativo"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center mt-2 font-garet">
                  Haz clic para ver más grande
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal para imagen ampliada */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-auto" onClick={closeModal}>
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img 
              src="/referidos.jpg" 
              alt="Plan de Referidos - Páramo Creativo (Vista ampliada)"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
