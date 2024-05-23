import React from 'react';

type TButtonText = {
  text: string;
};
const Button = ({ text }: TButtonText) => {
  return <button>{text}</button>;
};

const PrimaryButton = ({ text }: TButtonText) => {
  return <button className="bg-mainbrown px-5 py-2 rounded-2xl text-white">{text}</button>;
};

Button.Primary = PrimaryButton;

export default Button;
