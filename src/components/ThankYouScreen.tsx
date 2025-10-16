// Removed lucide-react import

export default function ThankYouScreen() {
  return (
    <div className="w-full max-w-5xl mx-auto animate-fade-in">
      <div className="bg-white rounded-3xl shadow-card p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
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
            <div className="bg-gray-100 rounded-xl shadow-sm p-4 max-w-xs">
              <div className="aspect-[4/5] bg-white rounded-lg shadow-sm overflow-hidden">
                <img 
                  src="/referidos.jpg" 
                  alt="Plan de Referidos - Páramo Creativo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
