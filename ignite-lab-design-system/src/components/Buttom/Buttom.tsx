import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtomPros extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChildren?: boolean;
    className?: string;
}

export function Buttom({ children, asChildren, className, ...props }: ButtomPros) {
    const Comp = asChildren ? Slot : 'button';

    return (
        <Comp className={clsx(
            'py-3 px-4 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-500 focus:ring-2 ring-gray-100',
            className
        )}
            {...props}
        >
            {children}
        </Comp>
    )
}