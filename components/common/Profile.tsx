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
    large: defaultStyle + 'w-14 h-14 text-lg',
    medium: defaultStyle + 'w-12 h-12 text-base',
    small: defaultStyle + 'w-10 h-10 text-sm',
  };
  return <div className={`${styleBySize[size]}`}>{nickname[0]}</div>;
};

export default Profile;
