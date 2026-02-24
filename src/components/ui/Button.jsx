import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = React.forwardRef(({
    className,
    variant = 'primary',
    size = 'md',
    children,
    ...props
}, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
        primary: 'bg-primary-600 text-white hover:bg-primary-700',
        secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200',
        outline: 'border border-secondary-300 bg-transparent hover:bg-secondary-50 text-secondary-700',
        ghost: 'bg-transparent hover:bg-secondary-100 text-secondary-700',
        link: 'text-primary-600 underline-offset-4 hover:underline',
    };

    const sizes = {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8 text-lg',
    };

    return (
        <button
            ref={ref}
            className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
