import * as React from "react";

function RadioTip({
  label,
  ...delegated
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "name" | "id"> & {
  label: string;
}) {
  const generatedId = React.useId();
  return (
    <label
      htmlFor={`${generatedId}-tip`}
      className="relative bg-very-dark-cyan text-white text-2xl py-1.5 px-4 text-center rounded-md hover:bg-cyan/40 hover:text-very-dark-cyan [&:has(input:checked)]:bg-cyan [&:has(input:checked)]:text-very-dark-cyan"
    >
      <input
        type="radio"
        name="tip"
        id={`${generatedId}-tip`}
        className="group absolute w-full h-full top-0 left-0 cursor-pointer opacity-0"
        {...delegated}
      />
      {label}
    </label>
  );
}

export default RadioTip;
