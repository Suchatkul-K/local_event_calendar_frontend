import React from 'react';

export default function Input({ name, placeholder, value, onChange }) {
  return (
    <input
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      className='h-[2.5rem] px-[1rem] rounded-[0.5rem]'
    />
  );
}
