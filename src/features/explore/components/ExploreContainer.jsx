import { useState } from 'react';
import { SelectPicker } from 'rsuite';

import 'rsuite/SelectPicker/styles/index.css';
import Button from '../../../global_components/Button';
import ToggleOnButton from '../../../global_components/ToggleOnButton';
import Input from '../../../global_components/Input';
import { SearchIcon } from '../../../icons';
import EventCard from '../../../global_components/EventCard';
import useExploreContext from '../hooks/useExploreContext';
import EventCardGanX from '../../../global_components/EventCardGanX';

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
  const [destinationValue, setDestinationValue] = useState();
  const [input, setInput] = useState({});
  const [open, setOpen] = useState(false);

  const eventObj = useExploreContext();
  console.log(eventObj.events);

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

  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  console.log(input);
  console.log(destination);
  console.log(destinationValue);

  const HandleOnSubmit = (e) => {
    // search
    console.log('onSubmit');
    e.preventDefault();
  };

  // const destinationValue = input?.provinceId
  //   ? destination.filter((el) => el.value === input.provinceId)[0].label
  //   : null;

  return (
    <div className='p-[0.5rem] flex flex-col gap-2'>
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
      <form onSubmit={HandleOnSubmit}>
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
            <div className='w-full'>
              <p className='font-semibold p-2'>Category</p>
              <SelectPicker
                block
                onSearch={updateData}
                onOpen={updateData}
                data={category}
                // value={input}
                onChange={(value, event) =>
                  setInput({ ...input, categoryId: value })
                }
              />
            </div>
            <div className='w-full '>
              <p className='font-semibold p-2'>Destination</p>
              <SelectPicker
                block
                onSearch={updateData}
                onOpen={updateData}
                data={destination}
                value={destinationValue}
                onChange={(event) => {
                  setInput({ ...input, provinceId: event });
                  setDestinationValue(
                    destination.filter((el) => el.value === input.provinceId)[0]
                      .label
                  );
                }}
              />
            </div>

            <div className='py-[2rem]'>
              <div className='flex flex-col gap-4 '>
                <span className='font-semibold'>Facility</span>
                <ToggleOnButton
                  forMap={mockupFacility}
                  onChange={handleCheckbox}
                />
              </div>
            </div>
            <div className='flex justify-end items-center gap-4'>
              <button
                className='hover:underline cursor-pointer'
                type='button'
                onClick={() => setInput({ title: '' })}
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
      {/* <div className='grid grid-cols-2 gap-4 py-[1rem]'> */}
      {eventObj?.events?.map((value) => (
        <EventCardGanX key={value.id} event={value} />
      ))}
      {/* </div> */}
    </div>
  );
}
