import React from 'react';

interface IProfile {
  nickname: string;
  backgroundColor: string;
  size: TProfileSize;
}

type TProfileSize = 'large' | 'medium' | 'small';

const Profile = ({ nickname, backgroundColor, size }: IProfile) => {
  const defaultStyle = `bg-${backgroundColor} rounded-full p-3 items-center flex justify-center text-white font-bold `;
  const styleBySize = {
    large: defaultStyle + 'w-18 h-18 text-2xl',
    medium: defaultStyle + 'w-16 h-16 text-xl',
    small: defaultStyle + 'w-12 h-12 text-lg',
  };
  return <div className={`${styleBySize[size]}`}>{nickname[0]}</div>;
};

export default Profile;
