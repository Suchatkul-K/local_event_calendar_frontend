import { MapContainer } from 'react-leaflet';
import Input from '../../../global_components/Input';
import { FACILITY_LIST } from '../../../constance/index';
import EventMap from './EventMap';
import useCreateEvent from '../hook/useCreateEvent';
import CreateEventDropdown from './CreateEventDropdown';
import CreateEventTextInput from './CreateEventTextInput';
import CreateEventDateTime from './CreateEventDateTime';
import CreateEventImages from './CreateEventImages';

export default function CreateEventContainer() {
  const { CreateEventContextObject, CreateEventImageObject } = useCreateEvent();
  console.log(CreateEventContextObject);
  const { input, image, handleChange, handleCheckbox, handleformSubmit } =
    CreateEventContextObject;
  const { tempImage } = CreateEventImageObject;

  console.log(input);

  const BkkLatLon = [13.756329334391024, 100.50176927408629];

  return (
    <form onSubmit={handleformSubmit}>
      <div>
        <div className=' mx-auto flex flex-col  gap-[1rem] w-full py-[2rem] px-[3rem]'>
          <div className='text-[1.75rem] font-semibold text-center pb-3'>
            Create An Event
          </div>

          <CreateEventImages tempImage={tempImage} />

          {/* Title input */}
          <Input
            name='title'
            placeholder='Title'
            value={input}
            onChange={handleChange}
            title='Title'
          />

          {/* Description text area */}
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

          <CreateEventDateTime />

          {/* Yearly checkbox */}
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

          <CreateEventTextInput />

          <CreateEventDropdown />

          {/* select facility */}
          <div className='grid grid-cols-2  gap-[0.25rem] font-medium w-full'>
            {Object.entries(FACILITY_LIST).map((el) => (
              <div className='flex flex-row gap-[0.5rem]' key={el[0]}>
                <input
                  type='checkbox'
                  name={el[0]}
                  value={el[0]}
                  onChange={handleCheckbox}
                />
                <div className='font-semibold'>{el[1]}</div>
              </div>
            ))}
          </div>

          {/* Map & LatLong selector */}
          {/* <div className='-z-20 pt-4'> */}
          <MapContainer center={BkkLatLon} zoom={9} style={{ height: '300px' }}>
            <EventMap />
          </MapContainer>
          {/* </div> */}
        </div>
      </div>

      {/* Submit Button */}
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
