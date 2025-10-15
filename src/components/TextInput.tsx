interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  multiline?: boolean;
  autoFocus?: boolean;
}

export default function TextInput({ value, onChange, placeholder, multiline = false, autoFocus = false }: TextInputProps) {
  const baseClasses = `
    w-full px-4 py-3 rounded-xl border-2 border-gray-200
    focus:border-primary focus:outline-none
    transition-all duration-300
    font-garet text-dark placeholder:text-dark/40
    bg-white
  `;

  if (multiline) {
    return (
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        autoFocus={autoFocus}
        className={`${baseClasses} resize-none`}
      />
    );
  }

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      autoFocus={autoFocus}
      className={baseClasses}
    />
  );
}
