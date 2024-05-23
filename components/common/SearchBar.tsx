import React from 'react';
import Image from 'next/image';

interface ISearchBar {
  placeholder: string;
  backgroundColor: TSearchBarColor;
  width?: string;
  height?: string;
}

type TSearchBarColor = 'white' | 'gray';

const SearchBar = ({ placeholder, backgroundColor, width }: ISearchBar) => {
  const color = {
    white: 'bg-white',
    gray: 'bg-gray-200',
  };

  return (
    <div
      className={`flex gap-3 ${color[backgroundColor]} w-${width}  rounded-2xl p-5 justify-center items-center m-auto`}
    >
      <Image src={'icon/search.svg'} width={18} height={18} alt={'키워드 검색'} />
      <input placeholder={placeholder} className={`${color[backgroundColor]} w-full text-xl `} />
    </div>
  );
};

export default SearchBar;
