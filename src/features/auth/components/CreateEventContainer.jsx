// import React from 'react'
import { useState } from 'react';
import Input from '../../../global_components/Input';
import { PictureIcon } from '../../../icons';
import Button from '../../../global_components/Button';

export default function CreateEventContainer() {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setInput({ ...input, [e.target.name]: 'true' });
    } else {
      setInput({ ...input, [e.target.name]: 'false' });
    }
    console.log(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='py-12 '>
        <div className=' mx-auto flex flex-col  gap-[2rem] w-full p-[3rem]'>
          <div className='text-[1.75rem] font-semibold'>Create An Account</div>
          <div className='flex flex-col items-center'>
            <PictureIcon />
          </div>
          <div className='flex flex-row justify-end'>
            <div className='w-[20%]'>
              <Button secondary='primary'>Upload </Button>{' '}
            </div>
          </div>
          <Input
            name='title'
            placeholder='Title'
            value={input?.title}
            onChange={handleChange}
            title='Title'
          />

          <div>
            Description
            <textarea
              placeholder='Description'
              className='textarea textarea-bordered textarea-md w-full'
              name='description'
              value={input?.description}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-row justify-between '>
            <div>
              <div className='border-2 border-rose-600'>Start Date</div>
              <input
                type='date'
                name='startDate'
                value={input?.starDate}
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col items-end'>
              <div>End Date</div>
              <input
                type='date'
                name='endDate'
                value={input?.endDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='flex flex-row justify-between'>
            <div>
              <div>Start Time</div>
              <input
                type='time'
                name='startTime'
                value={input?.startTime}
                onChange={handleChange}
              />
            </div>
            <div>
              <div className='flex flex-col items-end'>End Time</div>
              <input
                type='time'
                name='endTime'
                value={input?.endTime}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='flex flex-row gap-[0.5rem]'>
            <input
              type='checkbox'
              name='isYearly'
              value={input?.isYearly}
              onChange={handleChange}
            />
            <div>Yearly </div>
          </div>

          <Input
            name='webSite'
            placeholder='Web Site'
            value={input?.website}
            onChange={handleChange}
            title='Web Site'
          />

          <Input
            name='email'
            placeholder='Email'
            value={input?.email}
            onChange={handleChange}
            title='Email'
          />

          <Input
            name='facebook'
            placeholder='Facebook'
            value={input?.facebook}
            onChange={handleChange}
            title='Facebook'
          />

          <Input
            name='telNumber'
            placeholder='Telephone'
            value={input?.telNumber}
            onChange={handleChange}
            title='Telephone'
          />

          <Input
            name='address'
            placeholder='Address'
            value={input?.address}
            onChange={handleChange}
            title='Address'
          />

          <Input
            name='address2'
            placeholder='Address(optional)'
            value={input?.address2}
            onChange={handleChange}
            title='Address(optional)'
          />

          <Input
            name='province'
            placeholder='Province'
            value={input?.province}
            onChange={handleChange}
            title='Province'
          />

          <Input
            name='district'
            placeholder='District'
            value={input?.district}
            onChange={handleChange}
            title='District'
          />

          <Input
            name='subDistrict'
            placeholder='Sub District'
            value={input?.subDistrict}
            onChange={handleChange}
            title='Sub District'
          />

          <div className='flex flex-row justify-between'>
            <div className='flex flex-col gap-[0.25rem] bg-green-200'>
              <div className='flex flex-row gap-[0.5rem]'>
                <input
                  type='checkbox'
                  name='entranceFee'
                  value={input?.entranceFee}
                  onChange={handleCheckbox}
                />
                <div>Entrance Fee </div>
              </div>

              <div className='flex flex-row gap-[0.5rem]'>
                <input
                  type='checkbox'
                  name='food'
                  value={input?.food}
                  onChange={handleCheckbox}
                />
                <div>Food &Beverage</div>
              </div>

              <div className='flex flex-row gap-[0.5rem]'>
                <input
                  type='checkbox'
                  name='parking'
                  value={input?.parking}
                  onChange={handleCheckbox}
                />
                <div>Car Park</div>
              </div>

              <div className='flex flex-row gap-[0.5rem]'>
                <input
                  type='checkbox'
                  name='medicalService'
                  value={input?.medicalService}
                  onChange={handleCheckbox}
                />
                <div>Medical Service</div>
              </div>
            </div>
            <div className='flex flex-col gap-[0.25rem] bg-red-200'>
              <div className='flex flex-row gap-[0.5rem]'>
                <input
                  type='checkbox'
                  name='wifi'
                  value={input?.wifi}
                  onChange={handleCheckbox}
                />
                <div>Wifi</div>
              </div>

              <div className='flex flex-row gap-[0.5rem]'>
                <input
                  type='checkbox'
                  name='toilet'
                  value={input?.toilet}
                  onChange={handleCheckbox}
                />
                <div>Toilet</div>
              </div>

              <div className='flex flex-row gap-[0.5rem]'>
                <input
                  type='checkbox'
                  name='petFriendly'
                  value={input?.petFriendly}
                  onChange={handleCheckbox}
                />
                <div>Pet Friendly</div>
              </div>

              <div className='flex flex-row gap-[0.5rem]'>
                <input
                  type='checkbox'
                  name='meditationRoom'
                  onChange={handleCheckbox}
                />
                <div>Meditation Room</div>
              </div>
            </div>
          </div>
          <div className=' mx-auto flex flex-col justify-center text-center gap-[1.5rem] space-between w-full'>
            <button
              type='submit'
              className='btn bg-primary h-12 text-white text-[1rem] '
            >
              Create Event
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
