import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ButtonProps<T extends ElementType> = {
  renderAs?: T;
  children: ReactNode;
  cssClassName?: string;
} & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType = "button">({
  renderAs,
  children,
  cssClassName,
  ...rest
}: ButtonProps<T>): JSX.Element => {
  return (
    <button
      {...rest}
      className={`${cssClassName} bg-purple text-headingXS sm:text-headingM text-white py-[1.1875rem] sm:py-[1.75rem] w-full rounded-xl sm:rounded-3xl shadow-[0px_16px_40px_0px_rgba(143,_160,_193,_0.14)] hover:bg-opacity-50`}
    >
      {children}
    </button>
  );
};
export default Button;
