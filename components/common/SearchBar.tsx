import React from 'react';
import Image from 'next/image';

interface ISearchBar {
  placeholder: string;
  backgroundColor: TSearchBarColor;
  width?: string;
  height?: string;
}

type TSearchBarColor = 'white' | 'gray';

const SearchBar = ({ placeholder, backgroundColor, width, height }: ISearchBar) => {
  const color = {
    white: 'bg-white',
    gray: 'bg-gray-200',
  };

  return (
    <div className={`flex gap-3 ${color[backgroundColor]} w-${width} h-${height} rounded-2xl p-3`}>
      <Image src={'icon/search.svg'} width={24} height={22} alt={'키워드 검색'} />
      <input placeholder={placeholder} className={`${color[backgroundColor]} w-full`} />
    </div>
  );
};

export default SearchBar;
