import { useState } from 'react';

interface RatingScaleProps {
  value: number;
  onChange: (value: number) => void;
  label: string;
}

export default function RatingScale({ value, onChange, label }: RatingScaleProps) {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-creato font-medium text-dark text-center leading-relaxed">
        {label}
      </h2>

      <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => {
          const isActive = value === rating;
          const isHovered = hoveredValue === rating;
          const isPastHovered = hoveredValue !== null && rating <= hoveredValue;
          const isPastActive = rating <= value;

          return (
            <button
              key={rating}
              onClick={() => onChange(rating)}
              onMouseEnter={() => setHoveredValue(rating)}
              onMouseLeave={() => setHoveredValue(null)}
              className={`
                w-12 h-12 md:w-14 md:h-14 rounded-xl font-creato font-medium text-lg
                transition-all duration-300 transform
                ${isActive || isHovered
                  ? 'scale-110 shadow-lg'
                  : 'scale-100 hover:scale-105'
                }
                ${isActive
                  ? 'gradient-primary text-white'
                  : isPastActive
                  ? 'bg-secondary/30 text-primary border-2 border-secondary'
                  : isPastHovered
                  ? 'bg-primary/10 text-primary border-2 border-primary/30'
                  : 'bg-white text-dark/60 border-2 border-gray-200 hover:border-primary/50'
                }
              `}
            >
              {rating}
            </button>
          );
        })}
      </div>

      <div className="flex justify-between text-sm text-dark/50 font-garet px-2">
        <span>1 = Mala</span>
        <span>10 = Excelente</span>
      </div>
    </div>
  );
}
