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
