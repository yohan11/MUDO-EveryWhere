import type { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Tag from '@components/common/Tag';

const RoundTagMeta = {
  title: 'Tag/RoundTag',
  component: Tag.Round,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export default RoundTagMeta;

type RoundTagStory = StoryObj<typeof RoundTagMeta>;

export const Selected: RoundTagStory = {
  args: {
    text: '😊 멤버',
    selected: true,
  },
};
export const Basic: RoundTagStory = {
  args: {
    text: '😊 멤버',
    selected: false,
  },
};
