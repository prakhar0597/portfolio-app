import React from 'react';
import { cn } from '../../lib/utils';

const Button = ({ children, className, ...props }) => (
  <button
    className={cn(
      'rounded-xl bg-blue-600 hover:bg-blue-500 focus:ring-4 focus:ring-blue-400/30 text-white font-semibold px-5 py-2 shadow-md transition-all duration-200 ease-in-out',
      className
    )}
    {...props}
  >
    {children}
  </button>
);

export { Button };
