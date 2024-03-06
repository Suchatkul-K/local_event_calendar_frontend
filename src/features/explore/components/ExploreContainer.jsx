import { useState } from 'react';
import { SelectPicker } from 'rsuite';

import 'rsuite/SelectPicker/styles/index.css';
import Button from '../../../global_components/Button';
import ToggleOnButton from '../../../global_components/ToggleOnButton';
import Input from '../../../global_components/Input';
import { SearchIcon } from '../../../icons';
import EventCard from '../../../global_components/EventCard';

export default function ExploreContainer() {
  const mockupCategory = [
    { id: 1, name: 'festival' },
    { id: 2, name: 'culture' },
    { id: 3, name: 'music' },
    { id: 4, name: 'market' },
  ].map((category) => ({ label: category.name, value: category.id }));
  const mockupDestination = [
    { id: 1, name: 'hell' },
    { id: 2, name: 'heaven' },
    { id: 3, name: 'north' },
    { id: 4, name: 'haha' },
  ].map((destination) => ({ label: destination.name, value: destination.id }));
  const mockupFacility = [
    { id: 1, name: 'lamad' },
    { id: 2, name: 'toilet' },
    { id: 3, name: 'parking' },
    { id: 4, name: 'praying room' },
    { id: 5, name: 'sleep' },
    { id: 6, name: 'hotel' },
    { id: 7, name: 'pailamad' },
    { id: 8, name: 'faci' },
  ];
  const [category, setCategory] = useState([]);
  const [destination, setDestination] = useState([]);
  const [input, setInput] = useState({});
  const [open, setOpen] = useState(false);

  // console.log(input);

  const updateData = () => {
    if (category.length === 0) {
      setCategory(mockupCategory);
    }
    if (destination.length === 0) {
      setDestination(mockupDestination);
    }
  };

  // const handleSearch = (query) => {
  //   console.log('Search query:', query);
  // };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setInput({ ...input, [e.target.name]: true });
    } else {
      const tempSelected = { ...input };
      delete tempSelected[e.target.name];
      setInput(tempSelected);
      // setInput({ ...input, [e.target.name]: false });
    }
  };

  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  console.log(input);

  const handleOnSubmit = (e) => {
    console.log('onSubmit');
    e.preventDefault();

    // fetch event by input
  };

  return (
    <div className='p-[2rem] flex flex-col gap-2'>
      {open && (
        <button
          type='button'
          onClick={() => {
            setOpen(false);
            setInput({});
          }}
          className='rounded-full self-end'
        >
          x
        </button>
      )}

      {/* search event form */}
      <form onSubmit={handleOnSubmit}>
        <Input
          border='border-b-2'
          title='Search here'
          onClick={() => setOpen(true)}
          onChange={handleOnChange}
          name='title'
          value={input?.title}
        >
          <SearchIcon className='w-[1rem] h-[1.5rem]' />
        </Input>
        {open ? (
          <div className='flex flex-col gap-2'>
            {/* search by category */}
            <div className='w-full'>
              <p className='font-semibold p-2'>Category</p>
              <SelectPicker
                block
                // onSearch={handleSearch}
                onOpen={updateData}
                data={category}
                value={input.categoryId}
                onChange={(value) => {
                  setInput({ ...input, categoryId: value });
                }}
              />
            </div>

            {/* search by province */}
            <div className='w-full '>
              <p className='font-semibold p-2'>Destination</p>
              <SelectPicker
                block
                // onSearch={handleSearch}
                onOpen={updateData}
                data={destination}
                value={input.provinceId}
                onChange={(value) => {
                  setInput({ ...input, provinceId: value });
                }}
              />
            </div>

            <div className='py-[2rem]'>
              <div className='flex flex-col gap-4 '>
                <span className='font-semibold'>Facility</span>
                <ToggleOnButton
                  forMap={mockupFacility}
                  onChange={handleCheckbox}
                  input={input}
                />
              </div>
            </div>
            <div className='flex justify-end items-center gap-4'>
              <button
                className='hover:underline cursor-pointer'
                type='button'
                onClick={() => {
                  setInput({ title: '', provinceId: null, categoryId: null });
                }}
              >
                Clear
              </button>
              <div className='w-[5rem]'>
                <Button type='submit'>Search</Button>
              </div>
            </div>
          </div>
        ) : null}
      </form>

      {/* render searched event */}
      <div className='grid grid-cols-2 gap-2 py-[1rem]'>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}
