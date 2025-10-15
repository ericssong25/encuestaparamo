import { useState, useEffect } from 'react';
import { SurveyData } from './types/survey';
import ProgressBar from './components/ProgressBar';
import RatingScale from './components/RatingScale';
import TextInput from './components/TextInput';
import QuestionStep from './components/QuestionStep';
import SimpleCaptcha from './components/SimpleCaptcha';
import ThankYouScreen from './components/ThankYouScreen';
import { sendSurveyEmail } from './utils/emailService';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const [surveyData, setSurveyData] = useState<SurveyData>({
    name: '',
    customerService: 0,
    customerServiceComment: '',
    designQuality: 0,
    designQualityComment: '',
    challenges: '',
    recommendation: 0,
    improvements: '',
    captcha: false,
  });

  const totalSteps = 7;

  useEffect(() => {
    // Simular carga inicial y verificar que todo esté funcionando
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Manejar errores de red
    const handleOnline = () => {
      setHasError(false);
    };

    const handleOffline = () => {
      setHasError(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleNext = async () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      // Scroll hacia arriba al cambiar de paso
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === totalSteps) {
      // Enviar formulario a Netlify Forms
      await submitToNetlifyForms(surveyData);
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      // Scroll hacia arriba al retroceder de paso
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const canProceedStep1 = surveyData.name.trim().length > 0;
  const canProceedStep2 = surveyData.customerService > 0;
  const canProceedStep3 = surveyData.designQuality > 0;
  const canProceedStep4 = true;
  const canProceedStep5 = surveyData.recommendation > 0;
  const canProceedStep6 = true;
  const canProceedStep7 = captchaVerified;

  // Función para enviar datos a Netlify Forms
  const submitToNetlifyForms = async (data: SurveyData) => {
    const formData = new FormData();
    formData.append('form-name', 'encuesta-satisfaccion');
    formData.append('name', data.name);
    formData.append('customerService', data.customerService.toString());
    formData.append('customerServiceComment', data.customerServiceComment || '');
    formData.append('designQuality', data.designQuality.toString());
    formData.append('designQualityComment', data.designQualityComment || '');
    formData.append('challenges', data.challenges || '');
    formData.append('recommendation', data.recommendation.toString());
    formData.append('improvements', data.improvements || '');
    formData.append('timestamp', new Date().toISOString());

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      });
      console.log('Formulario enviado exitosamente a Netlify Forms');
    } catch (error) {
      console.error('Error al enviar formulario:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen gradient-primary flex items-center justify-center p-4">
        <div className="text-center text-white">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-lg font-garet">Cargando encuesta...</p>
        </div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="min-h-screen gradient-primary flex items-center justify-center p-4">
        <div className="text-center text-white max-w-md">
          <h2 className="text-2xl font-creato font-bold mb-4">Error de Conexión</h2>
          <p className="text-white/90 font-garet mb-6">
            Parece que hay un problema con la conexión. Por favor, verifica tu conexión a internet e intenta nuevamente.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-white text-dark px-6 py-3 rounded-lg font-garet font-medium hover:bg-white/90 transition-colors"
          >
            Recargar Página
          </button>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen gradient-primary flex items-center justify-center p-4">
        <ThankYouScreen />
        <footer className="absolute bottom-2 text-center text-white/80 text-sm font-garet">
          © Páramo Creativo 2023
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-creato font-bold text-white mb-3">
            Encuesta de Satisfacción
          </h1>
          <p className="text-white/90 font-garet text-lg">
            Tu opinión nos ayuda a mejorar
          </p>
        </div>

        <ProgressBar current={currentStep} total={totalSteps} />

        {currentStep === 1 && (
          <QuestionStep
            onNext={handleNext}
            canProceed={canProceedStep1}
            isFirstStep
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-creato font-medium text-dark text-center leading-relaxed">
                ¿Cuál es tu nombre?
              </h2>
              <div>
                <label className="block text-sm font-garet text-dark/70 mb-2">
                  Tu nombre (Obligatorio)
                </label>
                <TextInput
                  value={surveyData.name}
                  onChange={(value) =>
                    setSurveyData({ ...surveyData, name: value })
                  }
                  placeholder="Escribe tu nombre completo..."
                  autoFocus
                />
              </div>
            </div>
          </QuestionStep>
        )}

        {currentStep === 2 && (
          <QuestionStep
            onNext={handleNext}
            onBack={handleBack}
            canProceed={canProceedStep2}
          >
            <RatingScale
              value={surveyData.customerService}
              onChange={(value) =>
                setSurveyData({ ...surveyData, customerService: value })
              }
              label="En una escala del 1 al 10, ¿Cómo calificaría la atención al cliente de nuestro equipo?"
            />

            {surveyData.customerService > 0 && surveyData.customerService <= 5 && (
              <div className="mt-6 animate-slide-down">
                <label className="block text-sm font-garet text-dark/70 mb-2">
                  ¿Cómo podríamos mejorar? (Opcional)
                </label>
                <TextInput
                  value={surveyData.customerServiceComment || ''}
                  onChange={(value) =>
                    setSurveyData({ ...surveyData, customerServiceComment: value })
                  }
                  placeholder="Cuéntanos más sobre tu experiencia..."
                  multiline
                  autoFocus
                />
              </div>
            )}
          </QuestionStep>
        )}

        {currentStep === 3 && (
          <QuestionStep
            onNext={handleNext}
            onBack={handleBack}
            canProceed={canProceedStep3}
          >
            <RatingScale
              value={surveyData.designQuality}
              onChange={(value) =>
                setSurveyData({ ...surveyData, designQuality: value })
              }
              label="Valoración del diseño y edición (calidad y creatividad)"
            />

            {surveyData.designQuality > 0 && surveyData.designQuality <= 5 && (
              <div className="mt-6 animate-slide-down">
                <label className="block text-sm font-garet text-dark/70 mb-2">
                  ¿Cómo podríamos mejorar? (Opcional)
                </label>
                <TextInput
                  value={surveyData.designQualityComment || ''}
                  onChange={(value) =>
                    setSurveyData({ ...surveyData, designQualityComment: value })
                  }
                  placeholder="Cuéntanos más sobre tu experiencia..."
                  multiline
                  autoFocus
                />
              </div>
            )}
          </QuestionStep>
        )}

        {currentStep === 4 && (
          <QuestionStep
            onNext={handleNext}
            onBack={handleBack}
            canProceed={canProceedStep4}
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-creato font-medium text-dark text-center leading-relaxed">
                ¿Qué es lo que más le ha supuesto un reto o punto de fricción durante este mes de servicio?
              </h2>
              <div>
                <label className="block text-sm font-garet text-dark/70 mb-2">
                  Tu respuesta (Opcional)
                </label>
                <TextInput
                  value={surveyData.challenges || ''}
                  onChange={(value) =>
                    setSurveyData({ ...surveyData, challenges: value })
                  }
                  placeholder="Comparte tus experiencias con nosotros..."
                  multiline
                  autoFocus
                />
              </div>
            </div>
          </QuestionStep>
        )}

        {currentStep === 5 && (
          <QuestionStep
            onNext={handleNext}
            onBack={handleBack}
            canProceed={canProceedStep5}
          >
            <RatingScale
              value={surveyData.recommendation}
              onChange={(value) =>
                setSurveyData({ ...surveyData, recommendation: value })
              }
              label="¿Qué tan probable es que recomiende nuestra agencia a un colega o amigo?"
            />
          </QuestionStep>
        )}

        {currentStep === 6 && (
          <QuestionStep
            onNext={handleNext}
            onBack={handleBack}
            canProceed={canProceedStep6}
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-creato font-medium text-dark text-center leading-relaxed">
                ¿Qué aspectos le gustaría mejorar o quisieras que tengamos en cuenta para el futuro?
              </h2>
              <div>
                <label className="block text-sm font-garet text-dark/70 mb-2">
                  Tu respuesta (Opcional)
                </label>
                <TextInput
                  value={surveyData.improvements || ''}
                  onChange={(value) =>
                    setSurveyData({ ...surveyData, improvements: value })
                  }
                  placeholder="Tus sugerencias son muy valiosas para nosotros..."
                  multiline
                  autoFocus
                />
              </div>
            </div>
          </QuestionStep>
        )}

        {currentStep === 7 && (
          <QuestionStep
            onNext={handleNext}
            onBack={handleBack}
            canProceed={canProceedStep7}
            isLastStep
          >
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-creato font-medium text-dark text-center leading-relaxed">
                Verifica que no eres un robot
              </h2>
              <SimpleCaptcha onVerify={setCaptchaVerified} />
            </div>
          </QuestionStep>
        )}

        <footer className="text-center text-white/80 text-sm font-garet mt-8">
          © Páramo Creativo 2023
        </footer>
      </div>
    </div>
  );
}

export default App;
