import React, { useState } from 'react';

export default function ToggleOnButton({ onChange, forMap }) {
  return (
    <div className='flex gap-3 flex-wrap'>
      {forMap?.map((el) => (
        <label htmlFor={el.name} className='swap font-semibold' key={el.id}>
          <input
            type='checkbox'
            id={el.name}
            name={el.name}
            onChange={onChange}
            // checked={}
          />
          <div className='swap-on bg-primary border rounded-btn px-2 py-1 text-white '>
            {el.name}
          </div>
          <div className='swap-off bg-transparent border border-primary rounded-btn px-2 py-1 '>
            {el.name}
          </div>
        </label>
      ))}
    </div>
  );
}
