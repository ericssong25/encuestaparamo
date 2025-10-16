// Removed lucide-react import

export default function ThankYouScreen() {
  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <div className="bg-white rounded-3xl shadow-card p-8 md:p-12 text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center animate-bounce-slow">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-creato font-bold text-dark">
            ¡Gracias!
          </h1>

          <p className="text-lg md:text-xl font-garet text-dark/70 max-w-xl mx-auto leading-relaxed">
            Hemos recibido tus respuestas. Tu opinión es muy valiosa para nosotros y nos ayuda a mejorar continuamente nuestros servicios.
          </p>

          {/* Flyer del Plan de Referidos */}
          <div className="pt-6">
            <div className="bg-gray-100 rounded-2xl shadow-card p-6 max-w-md mx-auto">
              <div className="aspect-[4/5] bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm font-garet font-medium mb-2">Flyer Plan de Referidos</p>
                  <p className="text-xs text-gray-400">Agregar imagen aquí</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="inline-block px-8 py-3 gradient-animated rounded-xl">
              <p className="text-white font-garet font-medium">
                Tu feedback hace la diferencia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
