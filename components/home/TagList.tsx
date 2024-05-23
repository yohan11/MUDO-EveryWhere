import React from 'react';
import Tag from '@components/common/Tag';
import Image from 'next/image';
import { MEMBER_CATEGORY, PARENT_CATEGORY } from '@constants/category';

export const ParentTagList = () => {
  return (
    <div className="flex gap-36 justify-center m-auto">
      {PARENT_CATEGORY.map((item) => (
        <Tag.Round>
          <Image src={item.icon} alt={item.text} width={20} height={20} /> {item.text}
        </Tag.Round>
      ))}
    </div>
  );
};

export const ChildTagList = () => {
  return (
    <div className="flex gap-6">
      {MEMBER_CATEGORY.map((item) => (
        <Tag.Square>{item}</Tag.Square>
      ))}
    </div>
  );
};
