import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';

const meta = {
    title: 'Pages/AppLink',
    component: AboutPage,
    args: {
        to: '/',
    },
} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
