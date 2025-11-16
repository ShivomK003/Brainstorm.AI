import React from "react";

export interface SecondaryButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  className?: string;
}

function SecondaryButton({ buttonText, className }: SecondaryButtonProps) {
  return (
    <button
      className={`border border-[#FAA600] text-white font-semibold
                      px-6 py-3 rounded-full hover:bg-[#FAA600]
                      hover:text-[#1F0438] transition-all ${className}`}>
      {buttonText}
    </button>
  );
}

export default SecondaryButton;
