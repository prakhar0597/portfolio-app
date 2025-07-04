import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React from 'react';
import { cn } from '../../lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef(
  ({ className, side = 'bottom', sideOffset = 12, ...props }, ref) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        side={side}
        sideOffset={sideOffset}
        className={cn(
          'w-[90vw] max-w-screen-xl min-h-[300px] bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 overflow-hidden rounded-xl border border-gray-700 shadow-2xl',
          className
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
);
TooltipContent.displayName = 'TooltipContent';

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent };
