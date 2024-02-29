import React, { useState } from 'react';
import Input from '../global_components/Input';

export default function RegisterPage() {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`formsubmit${input?.email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='py-12 '>
        <div className='bg-red-200 mx-auto flex flex-col text-center gap-[2rem] w-full p-[3rem]'>
          <div className='text-[1.75rem] font-semibold'>Create An Account</div>
          <Input
            name='email'
            placeholder='Test@gmail.com'
            value={input?.email}
            onChange={handleChange}
          />

          <Input
            name='userName'
            placeholder='Username'
            value={input?.userName}
            onChange={handleChange}
          />

          <Input
            name='password'
            placeholder='password'
            value={input?.password}
            onChange={handleChange}
          />

          <Input
            name='confirmPassword'
            placeholder='confirmPassword'
            value={input?.confirmPassword}
            onChange={handleChange}
          />

          <div className=' mx-auto flex flex-col justify-center text-center gap-[1.5rem] space-between w-full'>
            <button
              type='submit'
              className='btn bg-primary h-12 text-white text-[1rem] '
            >
              Login
            </button>

            <hr className='my-2 border border-gray-300' />

            <button
              type='button'
              className='btn bg-Line h-12 text-white text-[1rem]'
            >
              Login with Line
            </button>

            <div className='text-[1rem]'>
              Already Have An Account ?{' '}
              <span className='text-green-700'>Register</span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
