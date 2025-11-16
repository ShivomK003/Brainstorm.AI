import * as React from "react";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: "300",
  display: "swap",
});

export interface BodyProps extends React.HTMLAttributes<HTMLElement> {
  as?: "p" | "span" | "div";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Body({ as = "p", className = "", style, children, ...rest }: BodyProps) {
  const Component = as as React.ElementType;
  return (
    <Component
      className={`${outfit.className} font-normal text-[18px] leading-[120%] tracking-[-0.02em] ${className}`}
      style={style}
      {...rest}>
      {children}
    </Component>
  );
}

export default Body;
