import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface ButtomPros {
    children: ReactNode;
    asChildren: boolean;
}

export function Buttom({ children, asChildren }: ButtomPros) {
    const Comp = asChildren ? Slot : 'button';

    return (
        <Comp className={clsx(
            'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-500 focus:ring-2 ring-gray-100',
        )}>
            {children}
        </Comp>
    )
}