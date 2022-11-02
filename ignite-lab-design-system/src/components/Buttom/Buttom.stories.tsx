import { Buttom, ButtomPros } from './Buttom';
import { Meta, StoryObj } from '@storybook/react';

export default {
    tittle: 'Components/Buttom',
    component: Buttom,
    args: {
        children: 'create account'
    },
    argTypes: {}
} as Meta<ButtomPros>

export const Default: StoryObj<ButtomPros> = {}