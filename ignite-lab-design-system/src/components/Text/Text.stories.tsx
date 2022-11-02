import { Text, TextPros } from './Text';
import { Meta, StoryObj } from '@storybook/react';

export default {
    tittle: 'Components/Text',
    component: Text,
    args: {
        children: 'lorem ipsum dolor sit amet, consectetur adipiscing'
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio',
            }
        }
    }
} as Meta<TextPros>

export const Default: StoryObj<TextPros> = {}

export const Small: StoryObj<TextPros> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<TextPros> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextPros> = {
    args: {
        asChildren: true,
        children: (
            <p>
                CustomComponent
            </p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChildren: {
            table: {
                disable: true,
            }
        }
    }
}