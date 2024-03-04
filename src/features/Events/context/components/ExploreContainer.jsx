import { useState } from 'react';
import Button from '../../../../global_components/Button';
import SelectOption from '../../../../global_components/SelectOption';
import ToggleOnButton from '../../../../global_components/ToggleOnButton';

export default function ExploreContainer() {
  const mockupCateglory = [
    { id: 1, name: 'festival' },
    { id: 2, name: 'culture' },
    { id: 3, name: 'music' },
    { id: 4, name: 'market' },
  ];
  const mockupDestination = [
    { id: 1, name: 'hell' },
    { id: 2, name: 'heaven' },
    { id: 3, name: 'north' },
    { id: 4, name: 'haha' },
  ];
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

  const [input, setInput] = useState([]);

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
    <div className='px-[3rem]'>
      <div className='flex flex-col gap-4 p-4'>
        <span className='font-semibold'>Facility</span>
        <ToggleOnButton forMap={mockupFacility} onChange={handleCheckbox} />
      </div>
    </div>
  );
}
