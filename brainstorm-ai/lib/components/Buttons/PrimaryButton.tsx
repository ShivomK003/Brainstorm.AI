export interface PrimaryButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  className?: string;
  onClick?: () => void;
}

function PrimaryButton({ buttonText, className, onClick }: PrimaryButtonProps) {
  return (
    <button
      className={`bg-gradient-to-r from-[#FAA600] to-[#E9395E]
                text-white font-semibold px-6 py-3 rounded-full shadow-lg
                hover:scale-105 transition-transform ${className}`}
      onClick={onClick}>
      {buttonText}
    </button>
  );
}

export default PrimaryButton;
