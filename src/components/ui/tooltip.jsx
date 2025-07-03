export const TooltipProvider = ({ children }) => children;

export const Tooltip = ({ children }) => <div>{children}</div>;

export const TooltipTrigger = ({ asChild, children }) => children;

export const TooltipContent = ({ children, className }) => (
  <div className={`absolute z-50 ${className}`}>{children}</div>
);
