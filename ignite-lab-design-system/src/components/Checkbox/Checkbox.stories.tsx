import { Checkbox, CheckboxPros } from './Checkbox';
import { Meta, StoryObj } from '@storybook/react';
import { Text } from '../Text/Text'

export default {
    tittle: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes: {},
    decorators: [
        (Story) => {
            return (
                <div className='flex items-center gap-2'>
                    {Story()}
                    <Text size="sm">Lembrar-me por 30 dias</Text>
                </div>
            )
        }
    ]
} as Meta<CheckboxPros>

export const Default: StoryObj<CheckboxPros> = {}