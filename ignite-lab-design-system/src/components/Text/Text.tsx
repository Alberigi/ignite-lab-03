import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextPros {
    size?: 'sm' | 'md' | 'lg';
    children?: ReactNode;
    asChildren?: boolean;
}

export function Text({ size = 'md', children, asChildren }: TextPros) {
    const Comp = asChildren ? Slot : 'span';

    return (
        <Comp className={clsx(
            'text-gray-100',
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg'
            }
        )}>
            {children}
        </Comp>
    )
}