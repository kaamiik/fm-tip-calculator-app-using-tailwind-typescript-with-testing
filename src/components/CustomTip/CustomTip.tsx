import * as React from "react";

function CustomTip({
  id = "",
  className = "",
}: Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type" | "id" | "className"
> & { id?: string; className?: string }) {
  const generatedId = React.useId();
  const finalId = id || generatedId;
  return (
    <div>
      <label htmlFor="" className="sr-only">
        CUSTOM TIP
      </label>
      <input
        type="number"
        name="custom-tip"
        id={finalId}
        className={`w-full border-0 bg-very-light-grayish-cyan text-2xl text-very-dark-cyan py-1.5 px-5 rounded-md text-right outline-0 focus-visible:outline-2 focus-visible:outline-cyan ${className}`}
        placeholder="Custom"
      />
    </div>
  );
}

export default CustomTip;
