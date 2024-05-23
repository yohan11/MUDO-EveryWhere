import type { StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import Profile from '@components/common/Profile';

const ProfileMeta = {
  title: 'Profile/UserProfile',
  component: Profile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
};

export default ProfileMeta;

type ProfileStory = StoryObj<typeof ProfileMeta>;

export const large: ProfileStory = {
  args: {
    nickname: 'JULLIE',
    backgroundColor: 'mainblue',
    size: 'large',
  },
};

export const medium: ProfileStory = {
  args: {
    nickname: 'JULLIE',
    backgroundColor: 'mainblue',
    size: 'medium',
  },
};

export const small: ProfileStory = {
  args: {
    nickname: 'JULLIE',
    backgroundColor: 'mainblue',
    size: 'small',
  },
};
