import { HeaderPros, Header } from './Header';
import { Meta, StoryObj } from '@storybook/react';

export default {
    tittle: 'Components/Header',
    component: Header,
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
} as Meta<HeaderPros>

export const Default: StoryObj<HeaderPros> = {}

export const Small: StoryObj<HeaderPros> = {
    args: {
        size: 'sm'
    }
}

export const Large: StoryObj<HeaderPros> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeaderPros> = {
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