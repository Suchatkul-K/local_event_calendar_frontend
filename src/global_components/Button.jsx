// import React from 'react'
const primary = 'bg-[#43B97F]';

export default function Button({ children, secondary, size }) {
  return (
    <button
      type='button'
      className={`${secondary ? 'bg-gray-300' : primary} ${size || 'w-full'}  rounded-lg px-[0.5rem] py-[0.2rem] font-medium text-white
      `}
    >
      {children}
    </button>
  );
}
