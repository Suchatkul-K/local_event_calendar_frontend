import { useState } from 'react';
import { SelectPicker } from 'rsuite';

import 'rsuite/SelectPicker/styles/index.css';
import Button from '../../../../global_components/Button';
import Input from '../../../../global_components/Input';
import { SearchIcon } from '../../../../icons';
import EventCard from '../../../../global_components/EventCard';
import ToggleOnButton from '../../../../global_components/ToggleOnButton';

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

  console.log(input);
  const updateData = () => {
    if (category.length === 0) {
      setCategory(mockupCategory);
    }
    if (destination.length === 0) {
      setDestination(mockupDestination);
    }
  };
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setInput({ ...input, [e.target.name]: 'true' });
    } else {
      // setSelected({ ...selected, [e.target.name]: 'false' });
      const tempSelected = { ...input };
      delete tempSelected[e.target.name];
      setInput(tempSelected);
    }
    // console.log(selected);
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

      <Input
        border='border-b-2'
        title='Search here'
        onClick={() => setOpen(true)}
      >
        <SearchIcon className='w-[1rem] h-[1.5rem]' />
      </Input>
      {open ? (
        <div>
          <div className='w-full'>
            <h1>Category</h1>
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
          <div className='w-full'>
            <h1>Destination</h1>
            <SelectPicker
              block
              onSearch={updateData}
              onOpen={updateData}
              data={destination}
              onChange={(value, event) =>
                setInput({ ...input, destinationId: value })
              }
            />
          </div>

          <span>Facility</span>
          <div className='flex justify-end items-center gap-4'>
            <div className='hover:underline cursor-pointer'>Clear</div>
            <div className='w-[5rem]'>
              <Button>Search</Button>
            </div>
          </div>
        </div>
      ) : null}
      <div className='grid grid-cols-2 gap-2 py-[1rem]'>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

      <div className='px-[3rem]'>
        <div className='flex flex-col gap-4 p-4'>
          <span className='font-semibold'>Facility</span>
          <ToggleOnButton forMap={mockupFacility} onChange={handleCheckbox} />
        </div>
      </div>
    </div>
  );
}
