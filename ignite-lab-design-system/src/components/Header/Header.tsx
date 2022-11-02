import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface HeaderPros {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChildren: boolean;
}

export function Header({ size = 'md', children, asChildren }: HeaderPros) {
    const Comp = asChildren ? Slot : 'h2';

    return (
        <Comp className={clsx(
            'text-gray-100 font-bold',
            {
                'text-lg': size === 'sm',
                'text-xl': size === 'md',
                'text-2xl': size === 'lg'
            }
        )}>
            {children}
        </Comp>
    )
}