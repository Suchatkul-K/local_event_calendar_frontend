// import React from 'react'
const primary = 'bg-[#43B97F]';

export default function Button({ children, secendary }) {
  return (
    <button
      type='button'
      className={`${secendary ? 'bg-gray-300' : primary} w-full  rounded-lg px-[0.5rem] py-[0.2rem] font-medium text-white
      `}
    >
      {children}
    </button>
  );
}
