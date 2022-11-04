import { HeadingPros, Heading } from './Heading';
import { Meta, StoryObj } from '@storybook/react';

export default {
    tittle: 'Components/Heading',
    component: Heading,
    args: {
        children: 'lorem ipsum '
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio',
            }
        }
    }
} as Meta<HeadingPros>

export const Default: StoryObj<HeadingPros> = {}

export const Small: StoryObj<HeadingPros> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<HeadingPros> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingPros> = {
    args: {
        asChildren: true,
        children: (
            <h1>
                Text header
            </h1>
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