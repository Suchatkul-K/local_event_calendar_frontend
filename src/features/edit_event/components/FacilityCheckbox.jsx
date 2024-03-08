import { EVENT_FACILITY } from '../../../constance';

export default function FacilityCheckbox({ input, onChange }) {
  return (
    <div className='grid grid-cols-2  gap-[0.5rem] font-medium w-full'>
      {EVENT_FACILITY.map((el) => (
        <label
          htmlFor={el.name}
          className='flex flex-row gap-[0.5rem] '
          key={el.id}
        >
          <input
            id={el.name}
            type='checkbox'
            name={el.name}
            value={el.name}
            checked={input[el.name]}
            onChange={onChange}
          />
          <div className='font-semibold'>{el.name}</div>
        </label>
      ))}
    </div>
  );
}
