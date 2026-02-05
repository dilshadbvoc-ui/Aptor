import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'feature' | 'elevated';
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseStyles = 'bg-white rounded-2xl border border-gray-100 transition-all duration-200';
    
    const variants = {
      default: 'p-6 hover:shadow-lg',
      feature: 'p-6 hover:shadow-lg hover:-translate-y-1',
      elevated: 'p-8 shadow-lg hover:shadow-xl',
    };

    return (
      <div
        className={cn(baseStyles, variants[variant], className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };