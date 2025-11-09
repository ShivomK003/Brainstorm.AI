import React from "react";

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
  replace?: boolean;
  element?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Box({ className = "", element = "div", replace = false, ...rest }: BoxProps) {
  const defaultClassName = "";
  const Component = element as React.ElementType;

  return (
    <Component
      className={replace ? className : className === "" ? defaultClassName : `${className} ${defaultClassName}`}
      {...rest}
    />
  );
}
