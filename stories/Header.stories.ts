import type { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Header from '@components/common/Header';

const meta = {
  title: 'Header/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedInTransparent: Story = {
  args: {
    background: false,
    isLoggedIn: true,
  },
};

export const LoggedOutTransparent: Story = {
  args: {
    background: false,
    isLoggedIn: false,
  },
};

export const LoggedInStatic: Story = {
  args: {
    background: true,
    isLoggedIn: true,
  },
};

export const LoggedOutStatic: Story = {
  args: {
    background: true,
    isLoggedIn: false,
  },
};
