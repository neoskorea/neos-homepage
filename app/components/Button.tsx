'use client';

import { ButtonHTMLAttributes, forwardRef } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary-dark focus-visible:ring-primary',
        outline: 'border-2 border-primary text-primary hover:bg-primary/10',
        ghost: 'text-primary hover:bg-primary/10',
        secondary: 'bg-text-primary text-white hover:bg-text-primary/90 focus-visible:ring-text-primary',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3 text-sm',
        lg: 'h-12 px-8 text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
  ButtonVariants {
  href?: string;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, external, children, ...props }, ref) => {
    if (href) {
      const linkProps = external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {};
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size }), className)}
          {...linkProps}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants }; 