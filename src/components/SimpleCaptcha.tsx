import { useState, useEffect } from 'react';

interface SimpleCaptchaProps {
  onVerify: (isValid: boolean) => void;
}

export default function SimpleCaptcha({ onVerify }: SimpleCaptchaProps) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const generateNumbers = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setUserAnswer('');
    setIsVerified(false);
    onVerify(false);
  };

  useEffect(() => {
    generateNumbers();
  }, []);

  useEffect(() => {
    if (userAnswer) {
      const correct = parseInt(userAnswer) === num1 + num2;
      setIsVerified(correct);
      onVerify(correct);
    } else {
      setIsVerified(false);
      onVerify(false);
    }
  }, [userAnswer, num1, num2, onVerify]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border-2 border-primary/20">
          <span className="text-2xl font-creato font-bold text-dark">
            {num1} + {num2} = ?
          </span>
        </div>
        <button
          onClick={generateNumbers}
          className="p-3 rounded-lg bg-white border-2 border-gray-200 hover:border-primary transition-colors duration-300"
          title="Generar nuevo captcha"
        >
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col items-center gap-2">
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Tu respuesta"
          className={`
            w-32 px-4 py-3 text-center rounded-xl border-2 font-garet text-lg
            focus:outline-none transition-all duration-300
            ${isVerified
              ? 'border-green-500 bg-green-50 text-green-700'
              : userAnswer && !isVerified
              ? 'border-red-500 bg-red-50 text-red-700'
              : 'border-gray-200 bg-white text-dark focus:border-primary'
            }
          `}
        />
        {userAnswer && (
          <span className={`text-sm font-garet ${isVerified ? 'text-green-600' : 'text-red-600'}`}>
            {isVerified ? '✓ Correcto' : '✗ Incorrecto'}
          </span>
        )}
      </div>
    </div>
  );
}
