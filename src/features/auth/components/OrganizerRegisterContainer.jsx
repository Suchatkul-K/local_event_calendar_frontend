import { useRef, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Input from '../../../global_components/Input';
import {
  EmailIcon,
  LockerIcon,
  ProfileIcon,
  PictureIcon,
  IdentityCardIcon,
} from '../../../icons';
import { validateOrganizerRegister } from '../validation/validate-register';
import Button from '../../../global_components/Button';
import { apiRegister, authMe } from '../../../api/auth';
import { storeToken } from '../../../utils/local-storage';
import useAuth from '../hooks/auth';

export default function OrganizerRegisterContainer() {
  const [input, setInput] = useState({
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
    gender: 'OTHER',
    role: 'ORGANIZER',
    corporation: 'INDIVIDUAL',
    officialName: '',
    companyNumber: '',
  });
  const [error, setError] = useState();
  const [profileImage, setProfileImage] = useState('');
  const [identityCopyImage, setIdentityCopyImage] = useState('');
  const { setAuthUser } = useAuth();

  const fileEl = useRef(null);
  const fileEl2 = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const handleFileChange2 = (e) => {
    setIdentityCopyImage(e.target.files[0]);
  };

  const handleProfilePicDelete = () => {
    setProfileImage('');
  };

  const handleIdentityCopyPicDelete = () => {
    setIdentityCopyImage('');
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(input);
      const validateResult = validateOrganizerRegister(input);
      console.log('Validate Result is here');
      console.log(validateResult);

      if (Object.keys(validateResult).length > 0 || !profileImage) {
        setError(validateResult);
        if (!profileImage) {
          setError((prev) => ({
            ...prev,
            profileImage: 'Profile Image is required',
          }));
        } else if (!identityCopyImage) {
          setError((prev) => ({
            ...prev,
            identityCopyImage: 'Identity Image is required',
          }));
        }
      } else {
        console.log('no error validation');

        const formData = new FormData();

        if (input.role === 'ORGANIZER') {
          formData.append('profileImage', profileImage);
          formData.append('identityCopyImage', identityCopyImage);
        }
        formData.append('email', input.email);
        formData.append('userName', input.userName);
        formData.append('password', input.password);
        formData.append('role', input.role);
        formData.append('gender', input.gender);
        formData.append('officialName', input.officialName);
        formData.append('companyNumber', input.companyNumber);
        formData.append('corporation', input.corporation);

        const registerResult = await apiRegister(formData);
        console.log(registerResult);
        storeToken(registerResult.data.accessToken);
        const authResult = await authMe(registerResult.data.accessToken);
        setAuthUser(authResult.data);
        setError(null);
        navigate('/home');
      }
    } catch (err) {
      setError({ email: 'Email already in use' });
    }
  };

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <form onSubmit={handleSubmit}>
      <div className='py-12 '>
        <div className=' mx-auto flex flex-col  gap-[2rem] w-full p-[3rem]'>
          <div className='text-[1.75rem] font-semibold'>Create An Account</div>
          <div className='flex flex-col items-center'>
            {profileImage ? (
              <div className=' relative'>
                <img
                  src={URL.createObjectURL(profileImage)}
                  alt='event'
                  className='w-[200px] h-[200px] object-cover'
                />
                <button
                  type='button'
                  className='absolute top-0 right-0 m-3 bg-white w-[1.5rem] font-bold h-[1.5rem] text-center rounded-[100%]'
                  onClick={handleProfilePicDelete}
                >
                  X
                </button>
              </div>
            ) : (
              <PictureIcon />
            )}
          </div>
          <div className='flex flex-row justify-end'>
            <div className='flex flex-col items-end'>
              <div className=' sm:[30%] flex flex-col '>
                <input
                  type='file'
                  ref={fileEl}
                  className='hidden'
                  onChange={handleFileChange}
                />
                <Button onClick={() => fileEl.current.click()}>
                  Upload Profile
                </Button>
              </div>
              <div>
                {error?.profileImage ? (
                  <div className='text-red-500 pl-[0.5rem]'>
                    Official Profile is required
                  </div>
                ) : null}
              </div>
            </div>
          </div>

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
            name='userName'
            placeholder='Username'
            value={input}
            onChange={handleChange}
            title='Username'
            errorMessage={error?.userName}
          >
            <ProfileIcon />
          </Input>
          <Input
            name='password'
            placeholder='password'
            value={input}
            onChange={handleChange}
            title='Password'
            errorMessage={error?.password}
            type='password'
          >
            <LockerIcon />
          </Input>

          <Input
            name='confirmPassword'
            placeholder='confirmPassword'
            value={input}
            onChange={handleChange}
            title='confirmPassword'
            errorMessage={error?.confirmPassword}
            type='password'
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
                <option value='ORGANIZER' selected>
                  ORGANIZER
                </option>
              </select>
            </div>
          </div>

          <div className='flex flex-col items-center'>
            {identityCopyImage ? (
              <div className='relative'>
                <img
                  src={URL.createObjectURL(identityCopyImage)}
                  alt='event'
                  className='w-[200px] h-[200px] object-cover'
                />
                <button
                  type='button'
                  className='absolute top-0 right-0 m-3 bg-white w-[1.5rem] font-bold h-[1.5rem] text-center rounded-[100%]'
                  onClick={handleIdentityCopyPicDelete}
                >
                  X
                </button>
              </div>
            ) : (
              <IdentityCardIcon />
            )}
          </div>
          <div className='flex flex-row justify-end '>
            <div className='flex flex-col items-end'>
              <div className='sm:[30%]'>
                <input
                  type='file'
                  ref={fileEl2}
                  className='hidden'
                  onChange={handleFileChange2}
                />
                <Button onClick={() => fileEl2.current.click()}>
                  Upload ID
                </Button>
              </div>
              <div>
                {error?.profileImage ? (
                  <div className='text-red-500 pl-[0.5rem]'>
                    ID Copy is required
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <Input
            name='officialName'
            placeholder='officialName'
            value={input}
            onChange={handleChange}
            title='Official Name'
            errorMessage={error?.officialName}
          />

          <Input
            name='companyNumber'
            placeholder='companyNumber'
            value={input}
            onChange={handleChange}
            title='Company Number'
            errorMessage={error?.companyNumber}
          />

          <div className='flex flex-col'>
            <div>User Role</div>
            <select
              name='corporation'
              className='h-10  rounded-lg'
              onChange={handleChange}
            >
              <option value='INDIVIDUAL'>INDIVIDUAL</option>
              <option value='CORPORATION' selected>
                CORPORATION
              </option>
            </select>
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
              <span>Already Have An Account ?</span>
              <Link to='/login'>
                <span className='text-green-700'> Log in</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
