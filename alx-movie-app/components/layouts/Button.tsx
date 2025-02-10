import React from 'react';

interface ButtonProps {
  title: string;
  action?: () => void;
}

const Button = ({ title, action }: ButtonProps) => {
  return (
    <button
      className="bg-[#E2D609] text-black px-4 py-2 rounded"
      onClick={action}
    >
      {title}
    </button>
  );
};

export default Button;