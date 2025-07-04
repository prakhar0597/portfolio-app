import React from 'react';
import { cn } from '../../lib/utils';

const Card = ({ children, className, ...props }) => (
  <div
    className={cn(
      'rounded-2xl border border-white/10 bg-black/30 backdrop-blur-md shadow-lg hover:shadow-blue-500/40 transform hover:scale-[1.02] transition-all duration-300 ease-in-out',
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
