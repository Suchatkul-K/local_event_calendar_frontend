import InputDate from '../../../global_components/InputDate';
import useCreateEvent from '../hook/useCreateEvent';

function CreateEventDateTime() {
  const { CreateEventContextObject } = useCreateEvent();

  const { handleChange, handleTime } = CreateEventContextObject;

  return (
    <div className='flex flex-col  gap-[1rem] w-full'>
      {/* Date Input */}
      <div className='flex flex-row justify-between w-fit '>
        <InputDate
          name='startDate'
          title='Start Date'
          onChange={handleChange}
        />
        <div className='text-end'>
          <InputDate name='endDate' title='End Date' onChange={handleChange} />
        </div>
      </div>

      {/* Time input */}
      <div className='flex flex-row justify-between'>
        <div className='font-semibold w-full'>
          <InputDate
            name='startTime'
            title='Start Time'
            type='time'
            onChange={handleTime}
          />
        </div>

        <div className='font-semibold w-full text-end'>
          <InputDate
            name='endTime'
            title='End Time'
            type='time'
            onChange={handleTime}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateEventDateTime;
