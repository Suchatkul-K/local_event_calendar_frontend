// import React from 'react';
import { EyeIcon } from '../icons';

export default function Input({
  name,
  type = 'text',
  title = 'title',
  placeholder = 'type here...',
  children,
  errorMessage,
  value,
  onChange,
  onClick,
  border,
}) {
  return (
    <label htmlFor={name}>
      <span className='pl-[0.5rem] pt-2 font-medium text-[1.0rem]'>
        {title}
      </span>
      <div
        className={`${border || 'border-2 rounded-lg'} w-full px-4 py-2  flex items-center gap-2`}
      >
        {children}
        <input
          onChange={onChange}
          value={value?.name}
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          className=' outline-none w-full bg-inherit'
          onClick={onClick}
        />
        {type === 'password' && <EyeIcon />}
      </div>
      {errorMessage && (
        <small className='text-red-500 pl-[0.5rem]'>{errorMessage}</small>
      )}
    </label>
  );
}
