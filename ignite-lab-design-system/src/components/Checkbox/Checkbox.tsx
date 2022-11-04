import * as CheckboxPrimitivy from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export interface CheckboxPros extends CheckboxPrimitivy.CheckboxIndicatorProps { }

export function Checkbox(props: CheckboxPros) {

    return (
        <CheckboxPrimitivy.Root
            className='w-6 h-6 p-[2px] bg-gray-800 rounded'
            {...props}
        >
            <CheckboxPrimitivy.Indicator>
                <Check weight='bold' className='h-5 w-5 text-cyan-500' />
            </CheckboxPrimitivy.Indicator>
        </CheckboxPrimitivy.Root>
    )
}