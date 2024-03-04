// import React from 'react'
const primary = 'bg-[#43B97F]';

export default function Button({ children, secondary, type }) {
  return (
    <button
      type={type ? 'submit' : 'button'}
      className={`${secondary ? 'bg-gray-300' : primary} rounded-lg px-[0.5rem] py-[0.2rem] font-medium text-white
      `}
    >
      {children}
    </button>
  );
}
