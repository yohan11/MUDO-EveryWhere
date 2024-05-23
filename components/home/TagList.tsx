import React from 'react';
import memberIcon from '@public/icon/member.svg';
import sceneIcon from '@public/icon/scene.svg';
import moodIcon from '@public/icon/mood.svg';
import weatherIcon from '@public/icon/weather.svg';
import Tag from '@components/common/Tag';
import Image from 'next/image';

const PARENT_CATEGORY = [
  { icon: memberIcon, text: '멤버' },
  { icon: sceneIcon, text: '상황' },
  {
    icon: moodIcon,
    text: '기분',
  },
  { icon: weatherIcon, text: '날씨' },
];

const MEMBER_CATEGORY = ['유재석', '박명수', '정준하', '정형돈', '노홍철', '하하', '길'];

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
