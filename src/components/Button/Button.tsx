import * as React from 'react';

function Button({
  className = '',
  children,
  ...delegated
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={`text-very-dark-cyan bg-cyan mt-auto w-full cursor-pointer rounded-md px-8 py-2 text-xl uppercase outline-0 focus-visible:bg-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white enabled:hover:bg-cyan-200 ${className}`}
      {...delegated}
    >
      {children}
    </button>
  );
}

export default Button;
