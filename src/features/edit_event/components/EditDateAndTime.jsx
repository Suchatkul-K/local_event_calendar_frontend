import InputDate from '../../../global_components/InputDate';

export default function EditDateAndTime({
  handleChange,
  handleTime,
  input,
  tempPeriodTime,
}) {
  return (
    <>
      <div className='flex justify-between w-full '>
        <InputDate
          name='startDate'
          title='Start Date'
          onChange={handleChange}
          value={input.startDate}
        />
        <div className='text-end '>
          <InputDate
            name='endDate'
            title='End Date'
            onChange={handleChange}
            value={input.endDate}
          />
        </div>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='font-semibold w-full'>
          <InputDate
            name='startTime'
            title='Start Time'
            type='time'
            value={tempPeriodTime[0]}
            onChange={handleTime}
          />
        </div>

        <div className='font-semibold w-full text-end'>
          <InputDate
            name='endTime'
            title='End Time'
            type='time'
            value={tempPeriodTime[1]}
            onChange={handleTime}
          />
        </div>
      </div>
    </>
  );
}
