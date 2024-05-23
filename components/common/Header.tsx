import React from 'react';
import Image from 'next/image';
import Button from '@components/common/Button';
import Profile from '@components/common/Profile';

interface IHeader {
  background: boolean;
  isLoggedIn: boolean;
}

const Header = ({ background, isLoggedIn }: IHeader) => {
  return (
    <div
      className={
        background
          ? 'flex justify-between items-center w-full pb-3 bg-white border-b border-b-gray-100'
          : 'flex justify-between items-center w-full pb-3 '
      }
    >
      <Image src={'icon/mudoew_logo.png'} width={60} height={60} alt={'메인 로고'} />
      {isLoggedIn ? (
        <Profile nickname={'Jullie'} backgroundColor={'mainblue'} size={'medium'} />
      ) : (
        <Button.Primary text={'로그인'} />
      )}
    </div>
  );
};

export default Header;
