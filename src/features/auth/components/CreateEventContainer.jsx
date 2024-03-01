// import React from 'react'
import { useState } from 'react';
import Input from '../../../global_components/Input';

export default function CreateEventContainer() {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='py-12 '>
        <div className=' mx-auto flex flex-col  gap-[2rem] w-full p-[3rem]'>
          <div className='text-[1.75rem] font-semibold'>Create An Account</div>

          <Input
            name='Title'
            placeholder='Title'
            value={input?.title}
            onChange={handleChange}
            title='Title'
          />

          <div>
            <label htmlFor='Description'>
              Description
              <textarea
                name='Description'
                id='Description'
                rows='4'
                cols='50'
              />
            </label>
          </div>

          <div className='flex flex-row justify-between'>
            <div>
              <div>Start Date</div>
              <input type='date' />
            </div>
            <div>
              <div>End Date</div>
              <input type='date' />
            </div>
          </div>

          <div className='flex flex-row justify-between'>
            <div>
              <div>Start Time</div>
              <input type='time' />
            </div>
            <div>
              <div>End Time</div>
              <input type='time' />
            </div>
          </div>

          <div>
            <input type='checkbox' />
          </div>

          <div className=' mx-auto flex flex-col justify-center text-center gap-[1.5rem] space-between w-full'>
            <button
              type='submit'
              className='btn bg-primary h-12 text-white text-[1rem] '
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
