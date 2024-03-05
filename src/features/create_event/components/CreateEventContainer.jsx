// import React from 'react'
import { useState } from 'react';
import { SelectPicker } from 'rsuite';
import Input from '../../../global_components/Input';
import { PictureIcon } from '../../../icons';
import Button from '../../../global_components/Button';
import Map from '../../main/components/Map';
import { EVENT_FACILITY } from '../../../constance/index';

export default function CreateEventContainer() {
  const provinceMockup = [
    { id: 1, name: 'Samutprakarn' },
    { id: 2, name: 'Krungtep' },
    { id: 3, name: 'Nakorn patom' },
    { id: 4, name: 'Nakornrachasrima' },
    { id: 5, name: 'Burirum' },
    { id: 6, name: 'Pisnulok' },
    { id: 7, name: 'Rayong' },
    { id: 8, name: 'Chonburi' },
  ].map((province) => ({ label: province.name, value: province.id }));
  const districtMockup = [
    { id: 1, name: 'Samutprakarn' },
    { id: 2, name: 'Krungtep' },
    { id: 3, name: 'Nakorn patom' },
    { id: 4, name: 'Nakornrachasrima' },
    { id: 5, name: 'Burirum' },
    { id: 6, name: 'Pisnulok' },
    { id: 7, name: 'Rayong' },
    { id: 8, name: 'Chonburi' },
  ].map((district) => ({ label: district.name, value: district.id }));

  const subdistrictMockup = [
    { id: 1, name: 'Samutprakarn' },
    { id: 2, name: 'Krungtep' },
    { id: 3, name: 'Nakorn patom' },
    { id: 4, name: 'Nakornrachasrima' },
    { id: 5, name: 'Burirum' },
    { id: 6, name: 'Pisnulok' },
    { id: 7, name: 'Rayong' },
    { id: 8, name: 'Chonburi' },
  ].map((subDistrict) => ({ label: subDistrict.name, value: subDistrict.id }));

  const categoryMockup = [
    { id: 1, name: 'food' },
    { id: 2, name: 'Krungtep' },
    { id: 3, name: 'Nakorn patom' },
    { id: 4, name: 'Nakornrachasrima' },
    { id: 5, name: 'Burirum' },
    { id: 6, name: 'Pisnulok' },
    { id: 7, name: 'Rayong' },
    { id: 8, name: 'Chonburi' },
  ].map((category) => ({ label: category.name, value: category.id }));

  const [input, setInput] = useState({});
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [subdistrict, setSubdistrict] = useState([]);
  const [category, setCategory] = useState([]);
  const [time, setTime] = useState({});

  let tempTime = { startTime: '', endTime: '' };
  const handleTime = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    if (e.target.name === 'startTime') {
      if (tempTime.startTime === '') {
        tempTime = { ...time };
      }
      tempTime = { ...tempTime, [e.target.name]: e.target.value };
    }
    if (e.target.name === 'endTime') {
      if (tempTime.endTime === '') {
        tempTime = { ...time };
      }
      tempTime = { ...tempTime, [e.target.name]: e.target.value };
    }

    // console.log(tempTime);
    if (tempTime.startTime && tempTime.endTime) {
      const { startTime, endTime } = tempTime;
      const timePeriod = `${tempTime.startTime}-${tempTime.endTime}`;
      setInput({ ...input, timePeriod });
      setTime({
        ...time,
        startTime,
        endTime,
      });
    }
  };

  console.log(input);
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // const handleformSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     // const validateError = validateCreateEvent(input);
  //     // if (validateError) {
  //     //   return setError(validateError);
  //     // }
  //     const formData = new FormData();
  //     formData.append('title', input?.title);
  //     formData.append('description', input.description);
  //     formData.append('startDate', input.startDate);
  //     formData.append('timePeriod', input.timePeriod);
  //     formData.append('isYearly', input.isYearly);
  //     formData.append('website', input.website);
  //     formData.append('email', input.email);
  //     formData.append('facebook', input.facebook);
  //     formData.append('telephone', input.telephone);
  //     formData.append('address', input.address);
  //     formData.append('address2', input.address2);
  //     formData.append('provinceId', input.provinceId);
  //     formData.append('districtId', input.districtId);
  //     formData.append('subdistrictId', input.subdistrictId);
  //     formData.append('categoryId', input.categoryId);
  //     formData.append('parking', input.parking);
  //     formData.append('toilet', input.toilet);
  //     formData.append('meditationRoom', input.meditationRoom);
  //     formData.append('food', input.food);
  //     formData.append('entranceFee', input.entranceFee);
  //     formData.append('wifi', input.wifi);
  //     formData.append('mediaclService', input.mediaclService);
  //     formData.append('petFriendly', input.petFriendly);

  //     formData.append('profileImage', image);

  //     await createEvent(formData);
  //     toast.success('create successfully');
  //     // setError({});
  //     setInput(initial);
  //   } catch (err) {
  //     console.log(err);
  //     // toast.error(err.response?.data.message);
  //   }
  // };

  const updateData = () => {
    if (province.length === 0) {
      setProvince(provinceMockup);
    }

    if (district.length === 0) {
      setDistrict(districtMockup);
    }
    if (subdistrict.length === 0) {
      setSubdistrict(subdistrictMockup);
    }
    if (category.length === 0) {
      setCategory(categoryMockup);
    }
  };

  console.log(input);

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setInput({ ...input, [e.target.name]: 'true' });
    } else {
      setInput({ ...input, [e.target.name]: 'false' });
    }
  };

  return (
    <form>
      <div>
        <div className=' mx-auto flex flex-col  gap-[2rem] w-full py-[2rem] px-[3rem]'>
          <div className='text-[1.75rem] font-semibold text-center'>
            Create An Event
          </div>
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
            value={input}
            onChange={handleChange}
            title='Title'
          />

          <div>
            <p className='font-semibold pl-2 pb-2 text-[1rem]'>Description</p>
            <textarea
              placeholder='Description'
              className='textarea textarea-bordered textarea-md w-full'
              name='description'
              value={input?.description}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-row justify-around w-[100%]'>
            <div>
              <div className='font-semibold '>Start Date</div>
              <input
                className='bg-inherit border border-gray-300 rounded-btn px-1 py-1 w-[90%] text-center'
                type='date'
                name='startDate'
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col items-end'>
              <div className='font-semibold '>End Date</div>
              <input
                className='bg-inherit border border-gray-300 rounded-btn px-1  py-1 w-[90%] text-center'
                type='date'
                name='endDate'
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='flex flex-row justify-between'>
            <div className='font-semibold pb-2'>
              <div>Start Time</div>
              <input
                className='bg-inherit border border-gray-300 rounded-btn px-2 py-1'
                type='time'
                name='startTime'
                onChange={handleTime}
              />
            </div>
            <div className='font-semibold pb-2'>
              <div className='flex flex-col items-end'>End Time</div>
              <input
                className='bg-inherit border border-gray-300 rounded-btn px-2 py-1'
                type='time'
                name='endTime'
                onChange={handleTime}
              />
            </div>
          </div>

          <div className='flex flex-row gap-[0.5rem]'>
            <Input
              type='checkbox'
              title=''
              name='isYearly'
              onChange={handleCheckbox}
            >
              yearly
            </Input>
          </div>

          <Input
            name='website'
            placeholder='Web Site'
            value={input}
            onChange={handleChange}
            title='Web Site'
          />

          <Input
            name='email'
            placeholder='Email'
            value={input}
            onChange={handleChange}
            title='Email'
          />

          <Input
            name='facebook'
            placeholder='Facebook'
            value={input}
            onChange={handleChange}
            title='Facebook'
          />

          <Input
            name='telNumber'
            placeholder='Telephone'
            value={input}
            onChange={handleChange}
            title='Telephone'
          />

          <Input
            name='address'
            placeholder='Address'
            value={input}
            onChange={handleChange}
            title='Address'
          />

          <Input
            name='address2'
            placeholder='Address(optional)'
            value={input}
            onChange={handleChange}
            title='Address(optional)'
          />

          <div className='w-full '>
            <span className='font-semibold p-1'>Province</span>
            <SelectPicker
              block
              onSearch={updateData}
              onOpen={updateData}
              data={province}
              onChange={(value, event) =>
                setInput({ ...input, provinceId: value })
              }
            />
          </div>

          <div className='w-full'>
            <span className='font-semibold p-1'>District</span>
            <SelectPicker
              block
              onSearch={updateData}
              onOpen={updateData}
              data={district}
              onChange={(value, event) =>
                setInput({ ...input, districtId: value })
              }
            />
          </div>

          <div className='w-full'>
            <span className='font-semibold p-1'>Subdistrict</span>
            <SelectPicker
              block
              onSearch={updateData}
              onOpen={updateData}
              data={subdistrict}
              onChange={(value, event) =>
                setInput({ ...input, subDistrictId: value })
              }
            />
          </div>

          <div className='w-full'>
            <span className='font-semibold p-1'>Category Event</span>
            <SelectPicker
              block
              onSearch={updateData}
              onOpen={updateData}
              data={category}
              onChange={(value, event) =>
                setInput({ ...input, categoryId: value })
              }
            />
          </div>

          <div className='grid grid-cols-2  gap-[0.25rem] font-medium w-full'>
            {EVENT_FACILITY.map((el) => (
              <div className='flex flex-row gap-[0.5rem]' key={el.id}>
                <input
                  type='checkbox'
                  name={el.name}
                  value={el.name}
                  onChange={handleCheckbox}
                />
                <div className='font-semibold'>{el.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Map />

      <div className=' mx-auto flex flex-col justify-center text-center gap-[1.5rem] space-between w-fit p-[1.5rem] '>
        <button
          type='submit'
          className='btn bg-primary h-12 text-white text-[1rem] '
        >
          Create Event
        </button>
      </div>
    </form>
  );
}
