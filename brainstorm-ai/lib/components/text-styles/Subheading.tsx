import * as React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

export interface SubheadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h2" | "h3" | "div" | "span" | "p" | "a";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Subheading({ as = "h2", className = "", style, children, ...rest }: SubheadingProps) {
  const Component = as as React.ElementType;
  return (
    <Component
      className={`${roboto.className} text-[20px] leading-[120%] tracking-[-0.02em] ${className}`}
      style={style}
      {...rest}>
      {children}
    </Component>
  );
}

export default Subheading;
