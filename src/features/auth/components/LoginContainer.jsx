/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EmailIcon, LockerIcon } from '../../../icons';
import Input from '../../../global_components/Input';
import { validateLogin } from '../validation/validate-login';
import { apiLogin, apiAuthMe } from '../../../api/auth';
import { storeToken } from '../../../utils/local-storage';
import useAuth from '../hooks/auth';

export default function LoginContainer() {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: '', password: '' });
  const [error, setError] = useState({});

  const { setAuthUser } = useAuth();

  // console.log(input);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
        const loginResult = await apiLogin(input);
        storeToken(loginResult.data.accessToken);
        console.log(loginResult.data);
        const authResult = await apiAuthMe(loginResult.data.accessToken);
        setAuthUser(authResult.data);
      }
    } catch (err) {
      console.log('error');
    }
  };
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <form onSubmit={handleSubmit}>
      <div className='py-12 '>
        <div className=' flex flex-col  gap-[2rem] w-full p-[3rem]'>
          <div className='text-[1.75rem] font-semibold'>Login</div>
          <Input
            name='email'
            placeholder='Example@gmail.com'
            value={input}
            onChange={handleChange}
            title='Email'
            errorMessage={error?.email}
          >
            <EmailIcon />
          </Input>

          <Input
            name='password'
            placeholder='password'
            value={input}
            onChange={handleChange}
            title='Password'
            type='password'
            errorMessage={error?.password}
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
              <span>{`Don't have an account ? `}</span>
              <Link to='/register'>
                <span className='text-green-700'>Register</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
