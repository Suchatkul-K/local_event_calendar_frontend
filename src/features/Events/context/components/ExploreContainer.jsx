import { useState } from 'react';
import Button from '../../../../global_components/Button';
import SelectOption from '../../../../global_components/SelectOption';

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

  const [input, setInput] = useState(false);

  console.log(input);
  const handleClick = (e) => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className='px-[3rem]'>
      <SelectOption
        title='Category'
        forMap={mockupCateglory}
        name='categoryId'
        handleClick={handleClick}
      />
      <SelectOption
        title='Destination'
        forMap={mockupDestination}
        name='provinceId'
        handleClick={handleClick}
      />

      <span>Facility</span>
      <div>
        <Button>Clear</Button>
        <Button>Search</Button>
      </div>
    </div>
  );
}
