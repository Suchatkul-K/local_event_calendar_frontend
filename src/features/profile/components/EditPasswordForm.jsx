import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../../../global_components/Input';
import useProfileContext from '../hook/useProfileContext';
import validateChangePassword from '../validation/validate-change-password';
import { updateUser } from '../../../api/user';

function EditPasswordForm() {
  const ProfileContextObject = useProfileContext();
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  console.log(error);

  const handleChangePassword = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError({});
  };

  const handleSubmitChangePassword = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const validateError = validateChangePassword(input);
      if (Object.keys(validateError).length > 0) {
        setError(validateError);
        return;
      }
      await updateUser({
        oldPassword: input.oldPassword,
        password: input.password,
      });
      toast.success('Change Password Success');
      setInput(null);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className='h-dvh w-dvw flex justify-center items-center animate-pulse'>
        <span className='loading loading-spinner loading-lg' />
        &nbsp; Loading... &nbsp; <span />
      </div>
    );
  }

  return (
    <form
      className='border-2 rounded-lg w-full flex flex-col p-3 gap-3'
      onSubmit={handleSubmitChangePassword}
    >
      <div className='p-3 border-b-2 w-full'>Change Password</div>

      <div className='w-full border-b-2 pb-4'>
        {showPassword ? (
          <Input
            title='Old Password'
            placeholder='password'
            onChange={handleChangePassword}
            name='oldPassword'
            value={input}
            errorMessage={error?.oldPassword}
            type='text'
            onClickButton={() => setShowPassword(false)}
          />
        ) : (
          <Input
            title='Old Password'
            placeholder='password'
            onChange={handleChangePassword}
            name='oldPassword'
            value={input}
            errorMessage={error?.oldPassword}
            type='password'
            onClickButton={() => setShowPassword(true)}
          />
        )}
      </div>
      <div className='w-full'>
        <div className='w-full flex flex-col gap-2'>
          {showPassword ? (
            <Input
              title='New Password'
              placeholder='password'
              name='password'
              onChange={handleChangePassword}
              value={input}
              errorMessage={error?.password}
              type='text'
              onClickButton={() => setShowPassword(false)}
            />
          ) : (
            <Input
              title='New Password'
              placeholder='password'
              name='password'
              onChange={handleChangePassword}
              value={input}
              errorMessage={error?.password}
              type='password'
              onClickButton={() => setShowPassword(true)}
            />
          )}
          {showPassword ? (
            <Input
              title='Confirm New Password'
              placeholder='confirm password'
              onChange={handleChangePassword}
              name='confirmPassword'
              value={input}
              errorMessage={error?.confirmPassword}
              type='text'
              onClickButton={() => setShowPassword(false)}
            />
          ) : (
            <Input
              title='Confirm New Password'
              placeholder='confirm password'
              onChange={handleChangePassword}
              name='confirmPassword'
              value={input}
              errorMessage={error?.confirmPassword}
              type='password'
              onClickButton={() => setShowPassword(true)}
            />
          )}
        </div>
      </div>

      <div className='flex gap-3 justify-end'>
        <button type='button' className='btn '>
          cancel
        </button>
        <button type='submit' className='btn '>
          save
        </button>
      </div>
    </form>
  );
}

export default EditPasswordForm;
