import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'premium' | 'luxury' | 'glass' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'premium', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'relative inline-flex items-center justify-center gap-3 font-semibold transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden';
    
    const variants = {
      premium: 'bg-gradient-to-r from-teal-600 via-teal-500 to-teal-600 text-white rounded-2xl shadow-2xl hover:shadow-teal-500/25 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transform before:-skew-x-12 before:-translate-x-full before:transition-transform before:duration-700 hover:before:translate-x-full',
      luxury: 'bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white rounded-2xl shadow-2xl hover:shadow-amber-500/25',
      glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl hover:bg-white/20 shadow-lg',
      dark: 'bg-slate-900 text-white rounded-2xl hover:bg-slate-800 shadow-2xl',
      outline: 'border-2 border-teal-300 text-teal-700 rounded-2xl hover:bg-teal-50 hover:border-teal-400',
    };
    
    const sizes = {
      sm: 'px-6 py-3 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg',
      xl: 'px-12 py-6 text-xl',
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