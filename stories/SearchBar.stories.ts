import type { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import SearchBar from '@components/common/SearchBar';

const meta = {
  title: 'SearchBat/SearchBat',
  component: SearchBar,
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

export const WhiteShortSearchBar: Story = {
  args: {
    placeholder: '원하는 키워드를 검색해보세요.',
    backgroundColor: 'white',
    width: '5/6',
  },
};

export const GrayLongSearchBar: Story = {
  args: {
    placeholder: '원하는 키워드를 검색해보세요.',
    backgroundColor: 'gray',
    width: 'full',
  },
};
