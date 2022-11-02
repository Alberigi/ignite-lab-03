import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootPros {
    children: ReactNode;
}

export interface TextInputIconPros {
    children: ReactNode;
}

export interface TextInputInputPros extends InputHTMLAttributes<HTMLInputElement> { }

function TextInputRoot({ children }: TextInputRootPros) {
    return (
        <div className={clsx(
            'flex items-center h-12 gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-gray-100',
        )}>
            {children}
        </div>
    )
}

TextInputRoot.displayName = 'TextInput.Root'


function TextInputIcon({ children }: TextInputIconPros) {
    return (
        <Slot className='w-6 h-6 text-gray-400'>
            {children}
        </Slot>
    )
}

TextInputIcon.displayName = 'TextInput.Icon'

function TextInputInput(props: TextInputInputPros) {
    return (
        <input className="bg-transparent flex-1  text-gray-100 text-xs  placeholder:text-gray-400 outline-none"
            {...props}
        />
    )
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
}