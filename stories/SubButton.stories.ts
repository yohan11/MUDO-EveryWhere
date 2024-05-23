import type { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Button from '@components/common/Button';

const meta = {
  title: 'Button/SubButton',
  component: Button.Sub,
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

export const Basic: Story = {
  args: {
    text: '등록',
  },
};
