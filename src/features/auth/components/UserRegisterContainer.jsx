import { useRef, useState } from 'react';
import Input from '../../../global_components/Input';
import {
  EmailIcon,
  LockerIcon,
  ProfileIcon,
  PictureIcon,
  IdentityCardIcon,
} from '../../../icons';
import { validateUserRegister } from '../validation/validate-register';
import Button from '../../../global_components/Button';
import { apiRegister } from '../../../api/auth';
import { storeToken } from '../../../utils/local-storage';

export default function UserRegisterContainer() {
  const [input, setInput] = useState({
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: 'MALE',
    role: 'USER',
  });
  const [error, setError] = useState();
  const [profileImage, setProfileImage] = useState('');

  const fileEl = useRef(null);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(input);
      const validateResult = validateUserRegister(input);
      console.log('Validate Result is here');
      console.log(validateResult);

      if (Object.keys(validateResult).length > 0) {
        setError(validateResult);
      } else {
        console.log('no error validation');

        const formData = new FormData();
        formData.append('profileImage', profileImage);
        formData.append('email', input.email);
        formData.append('userName', input.userName);
        formData.append('password', input.password);
        formData.append('role', input.role);
        formData.append('gender', input.gender);
        const registerResult = await apiRegister(formData);
        console.log(registerResult);
        storeToken(registerResult.data.token);
      }
    } catch (err) {
      console.log('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='py-12 '>
        <div className=' mx-auto flex flex-col  gap-[2rem] w-full p-[3rem]'>
          <div className='text-[1.75rem] font-semibold'>Create An Account</div>
          <div className='flex flex-col items-center'>
            {profileImage ? (
              <img
                src={URL.createObjectURL(profileImage)}
                alt='event'
                className='w-[200px] h-[200px] object-cover'
              />
            ) : (
              <PictureIcon />
            )}
          </div>
          <div className='flex flex-row justify-end'>
            <div className='md:w-[18%] sm:[30%]'>
              {profileImage ? (
                <Button secondary='primary'>Cancel </Button>
              ) : null}
            </div>

            <div className='md:w-[18%] sm:[30%]'>
              <input
                type='file'
                ref={fileEl}
                className='hidden'
                onChange={handleFileChange}
              />
              <Button
                secondary='primary'
                onClick={() => fileEl.current.click()}
              >
                Upload Profile
              </Button>
            </div>
          </div>

          <Input
            name='email'
            placeholder='Example@gmail.com'
            value={input?.email}
            onChange={handleChange}
            title='Email'
            errorMessage={error?.email}
          >
            <EmailIcon />
          </Input>
          <Input
            name='userName'
            placeholder='Username'
            value={input?.userName}
            onChange={handleChange}
            title='Username'
            errorMessage={error?.userName}
          >
            <ProfileIcon />
          </Input>
          <Input
            name='password'
            placeholder='password'
            value={input?.password}
            onChange={handleChange}
            title='Password'
            errorMessage={error?.password}
          >
            <LockerIcon />
          </Input>

          <Input
            name='confirmPassword'
            placeholder='confirmPassword'
            value={input?.confirmPassword}
            onChange={handleChange}
            title='confirmPassword'
            errorMessage={error?.confirmPassword}
          >
            {' '}
            <LockerIcon />
          </Input>

          <div className='flex flex-row justify-between'>
            <div className='flex flex-col'>
              <div>Sex</div>
              <select
                name='gender'
                className='h-10  rounded-lg'
                onChange={handleChange}
              >
                <option value='MALE' selected>
                  MALE
                </option>
                <option value='FEMALE'>FEMALE</option>
                <option value='OTHER'>OTHER</option>
              </select>
            </div>

            <div className='flex flex-col'>
              <div>User Role</div>
              <select
                name='role'
                className='h-10  rounded-lg'
                onChange={handleChange}
              >
                <option value='USER' selected>
                  USER
                </option>
                <option value='ADMIN'>ADMIN</option>
              </select>
            </div>
          </div>

          <div className=' mx-auto flex flex-col justify-center text-center gap-[1.5rem] space-between w-full'>
            <button
              type='submit'
              className='btn bg-primary h-12 text-white text-[1rem] '
            >
              Create Account
            </button>

            <hr className='my-2 border border-gray-300' />

            <button
              type='button'
              className='btn bg-Line h-12 text-white text-[1rem]'
            >
              Continue with Line
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