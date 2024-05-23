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

const SquareTag = ({ text, selected }: ITag) => {
  return (
    <div
      className={
        selected
          ? 'rounded-2xl bg-mainblue text-white px-5 py-2'
          : 'rounded-2xl border-solid border border-gray-300 px-5 py-2'
      }
    >
      {text}
    </div>
  );
};

Tag.Round = RoundTag;
Tag.Square = SquareTag;

export default Tag;
