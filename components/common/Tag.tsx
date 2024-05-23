import React, { ReactNode } from 'react';

type ITag = {
  children: ReactNode;
  selected?: boolean;
};

const Tag = ({ children }: ITag) => {
  return <div>{children}</div>;
};

const RoundTag = ({ children, selected }: ITag) => {
  return (
    <div
      className={
        selected
          ? 'rounded-3xl bg-neutral-200 px-5 py-2 flex gap-2 items-center text-2xl'
          : 'flex gap-2 items-center text-2xl'
      }
    >
      {children}
    </div>
  );
};

const SquareTag = ({ children, selected }: ITag) => {
  return (
    <div
      className={
        selected
          ? 'rounded-2xl bg-mainblue text-white px-5 py-2 flex gap-2 items-center text-2xl'
          : 'rounded-2xl border-solid border border-gray-300 px-5 py-2 flex gap-2 items-center text-2xl'
      }
    >
      {children}
    </div>
  );
};

Tag.Round = RoundTag;
Tag.Square = SquareTag;

export default Tag;
