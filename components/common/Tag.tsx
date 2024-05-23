import React from 'react';

type ITag = {
  text: string;
  selected?: boolean;
};

const Tag = ({ text }: ITag) => {
  return <div>{text}</div>;
};

const RoundTag = ({ text, selected }: ITag) => {
  return <div className={selected ? 'rounded-3xl bg-neutral-200 px-5 py-2' : ''}>{text}</div>;
};

Tag.Round = RoundTag;

export default Tag;
