import React from 'react';
import mainImg from '@public/image/main-banner.jpeg';
import Header from '@components/common/Header';
import SearchBar from '@components/common/SearchBar';

const Banner = () => {
  return (
    <div
      className="p-10 w-full h-auto"
      style={{
        background: `url(${mainImg.src}) no-repeat center`,
        backgroundSize: 'cover',
      }}
    >
      <Header background={false} isLoggedIn={true} />
      <div className="flex flex-col gap-5 px-52 mb-60">
        <div className="text-neutral-700 text-6xl font-extrabold">어디에서나, 무도 짤</div>
        <div className="text-4xl bold">언제 어디서나 상황에 맞는 무도 짤로 즐겁게 대화하세요.</div>
      </div>
      <div className="mb-52">
        <SearchBar placeholder={'원하는 키워드를 검색해보세요.'} backgroundColor={'white'} width={'1/2'} />
      </div>
    </div>
  );
};

export default Banner;
