import * as CheckboxPrimitivy from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'
import { ReactNode } from 'react';

export interface CheckboxPros {
    children: ReactNode;
    asChildren: boolean;
}

export function Checkbox({ }: CheckboxPros) {

    return (
        <CheckboxPrimitivy.Root
            className='w-6 h-6 p-[2px] bg-gray-800 rounded'
        >
            <CheckboxPrimitivy.Indicator>
                <Check weight='bold' className='h-5 w-5 text-cyan-500' />
            </CheckboxPrimitivy.Indicator>
        </CheckboxPrimitivy.Root>
    )
}