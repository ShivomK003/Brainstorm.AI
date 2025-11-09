import * as React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
  display: "swap",
});

export interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: "h1" | "h2" | "h3" | "div" | "span" | "p";
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function Heading({ as = "h1", className = "", style, children, ...rest }: HeadingProps) {
  const Component = as as React.ElementType;
  return (
    <Component
      className={`${roboto.className} font-normal text-[24px] leading-[120%] tracking-[-0.02em] ${className}`}
      style={style}
      {...rest}>
      {children}
    </Component>
  );
}

export default Heading;
