import * as React from 'react';
import { FieldError } from 'react-hook-form';

const RadioTip = React.forwardRef<
  HTMLInputElement,
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'name' | 'id'> & {
    label: string;
    error?: FieldError;
  }
>(({ label, error, ...delegated }, ref) => {
  const generatedId = React.useId();
  const finalId = `${generatedId}-tip`;

  return (
    <label
      htmlFor={finalId}
      className={`bg-very-dark-cyan [&:has(input:hover)]:bg-cyan/40 [&:has(input:hover)]:text-very-dark-cyan [&:has(input:focus-visible)]:bg-cyan/40 [&:has(input:focus-visible)]:text-very-dark-cyan relative rounded-md px-4 py-1.5 text-center text-2xl text-white [&:has(input:focus-visible)]:outline-2 ${
        error
          ? '[&:has(input:focus-visible)]:outline-red'
          : '[&:has(input:focus-visible)]:outline-very-dark-cyan'
      } [&:has(input:checked)]:bg-cyan [&:has(input:checked)]:text-very-dark-cyan [&:has(input:focus-visible)]:outline-offset-1`}
    >
      <input
        ref={ref}
        {...delegated}
        type="radio"
        id={finalId}
        className="absolute top-0 left-0 h-full w-full cursor-pointer opacity-0"
      />
      {label}
    </label>
  );
});

export default RadioTip;
