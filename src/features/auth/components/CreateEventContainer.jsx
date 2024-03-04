// import React from 'react'
import { useState } from 'react';
import { SelectPicker } from 'rsuite';
import Input from '../../../global_components/Input';
import { PictureIcon } from '../../../icons';
import Button from '../../../global_components/Button';

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

  const facilityMockup = [
    { id: 1, name: 'Entrance Fee' },
    { id: 2, name: 'Food &Beverage' },
    { id: 3, name: 'Car Park' },
    { id: 4, name: 'Medicl Service' },
    { id: 5, name: 'Wifi' },
    { id: 6, name: 'Toilet' },
    { id: 7, name: 'Pet Friendly' },
    { id: 8, name: 'Meditation room' },
  ];
  const [input, setInput] = useState({});
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [subdistrict, setSubdistrict] = useState([]);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            value={input}
            onChange={handleChange}
            title='Title'
          />

          <div>
            <span className='font-medium'>Description</span>
            <textarea
              placeholder='Description'
              className='textarea textarea-bordered textarea-md w-full'
              name='description'
              value={input.description}
              onChange={handleChange}
            />
          </div>

          <div className='flex flex-row justify-between '>
            <div>
              <div className='font-medium'>Start Date</div>
              <input
                className='bg-inherit border border-gray-300 rounded-btn px-2 py-1'
                type='date'
                name='startDate'
                onChange={handleChange}
              />
            </div>
            <div className='flex flex-col items-end'>
              <div className='font-medium'>End Date</div>
              <input
                className='bg-inherit border border-gray-300 rounded-btn px-2 py-1'
                type='date'
                name='endDate'
                onChange={handleChange}
              />
            </div>
          </div>

          <div className='flex flex-row justify-between'>
            <div className='font-medium'>
              <div>Start Time</div>
              <input
                className='bg-inherit border border-gray-300 rounded-btn px-2 py-1'
                type='time'
                name='startTime'
                onChange={handleChange}
              />
            </div>
            <div className='font-medium'>
              <div className='flex flex-col items-end'>End Time</div>
              <input
                className='bg-inherit border border-gray-300 rounded-btn px-2 py-1'
                type='time'
                name='endTime'
                onChange={handleChange}
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
            name='webSite'
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
            <h1 className='font-semibold p-1'>Province</h1>
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
            <h1 className='font-semibold p-1'>District</h1>
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
            <h1 className='font-semibold p-1'>Subdistrict</h1>
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

          <div className='grid grid-cols-2  gap-[0.25rem] font-medium w-full'>
            {facilityMockup.map((el) => (
              <div className='flex flex-row gap-[0.5rem]' key={el.id}>
                <input
                  type='checkbox'
                  name={el.name}
                  value={el.name}
                  onChange={handleCheckbox}
                />
                <div>{el.name}</div>
              </div>
            ))}
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
