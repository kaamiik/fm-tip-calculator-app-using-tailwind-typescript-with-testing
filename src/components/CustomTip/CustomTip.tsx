import * as React from 'react';
import { FieldError } from 'react-hook-form';

const CustomTip = React.forwardRef<
  HTMLInputElement,
  Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'type' | 'id' | 'className'
  > & {
    id?: string;
    className?: string;
    error?: FieldError;
  }
>(({ id = '', className = '', error, ...delegated }, ref) => {
  const generatedId = React.useId();
  const finalId = id || generatedId;

  return (
    <div>
      <label htmlFor={finalId} className="sr-only">
        CUSTOM TIP
      </label>
      <input
        ref={ref}
        {...delegated}
        type="text"
        id={finalId}
        className={`bg-very-light-grayish-cyan text-very-dark-cyan w-full rounded-md border-0 px-5 py-1.5 text-right text-2xl outline-0 focus-visible:outline-2 ${
          error ? 'focus-visible:outline-red' : 'focus-visible:outline-cyan'
        } ${className}`}
        placeholder="Custom"
      />
    </div>
  );
});

export default CustomTip;
