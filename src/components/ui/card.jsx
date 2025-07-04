import React from 'react';
import { cn } from '../../lib/utils';

const Card = ({ children, className, ...props }) => (
  <div
    className={cn(
      'rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900 via-gray-950 to-black p-6 shadow-xl backdrop-blur-md hover:shadow-blue-500/30 transition-all duration-300 ease-in-out',
      className
    )}
    {...props}
  >
    {children}
  </div>
);

const CardContent = ({ children, className, ...props }) => (
  <div className={cn('p-2', className)} {...props}>
    {children}
  </div>
);

export { Card, CardContent };
