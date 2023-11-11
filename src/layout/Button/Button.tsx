import React, { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ButtonProps<T extends ElementType> = {
  renderAs?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

const Button = <T extends ElementType = "button">({
  renderAs,
  children,
  role,
  ...rest
}: ButtonProps<T>): JSX.Element => {
  return (
    <button
      {...rest}
      className="bg-purple text-headingXS sm:text-headingM text-white py-4 sm:py-8 w-full rounded-xl sm:rounded-3xl shadow-[0px_16px_40px_0px_rgba(143,_160,_193,_0.14)] hover:bg-opacity-50"
    >
      {children}
    </button>
  );
};
export default Button;
