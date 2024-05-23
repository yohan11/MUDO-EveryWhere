import type { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Tag from '@components/common/Tag';

const SquareTagMeta = {
  title: 'Tag/SquareTag',
  component: Tag.Square,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export default SquareTagMeta;

type SquareTagStory = StoryObj<typeof SquareTagMeta>;

export const Selected: SquareTagStory = {
  args: {
    text: '유재석',
    selected: true,
  },
};
export const Basic: SquareTagStory = {
  args: {
    text: '유재석',
    selected: false,
  },
};
