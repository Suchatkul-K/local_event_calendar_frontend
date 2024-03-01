/* eslint-disable no-console */
import { useState } from 'react';
import { EmailIcon, LockerIcon } from '../../../icons';
import Input from '../../../global_components/Input';
import { validateLogin } from '../validation/validate-login';
import Apilogin from '../../../api/auth';

export default function LoginContainer() {
  const [input, setInput] = useState();
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      console.log(input);
      const validateResult = validateLogin(input);
      console.log('Validate Result is here');
      console.log(validateResult);

      if (Object.keys(validateResult).length > 0) {
        setError(validateResult);
      } else {
        console.log('no error validation');
        Apilogin(input);
      }
    } catch (err) {
      console.log('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='py-12 '>
        <div className=' flex flex-col  gap-[2rem] w-full p-[3rem]'>
          <div className='text-[1.75rem] font-semibold'>Login</div>
          <Input
            name='email'
            placeholder='Example@gmail.com'
            value={input?.email}
            onChange={handleChange}
            title='Email'
          >
            <EmailIcon />
          </Input>

          <Input
            name='password'
            placeholder='password'
            value={input?.password}
            onChange={handleChange}
            title='Password'
            type='password'
          >
            <LockerIcon />
          </Input>

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
