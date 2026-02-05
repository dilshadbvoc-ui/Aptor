import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border-0 cursor-pointer';
    
    const variants = {
      primary: 'btn-primary',
      secondary: 'btn-secondary', 
      outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
      ghost: 'bg-transparent text-primary hover:bg-secondary hover:text-foreground',
    };
    
    const sizes = {
      sm: 'text-sm px-3 py-2 min-h-[44px]',
      md: 'text-base px-4 py-3 min-h-[48px]',
      lg: 'text-lg px-6 py-4 min-h-[56px]',
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };