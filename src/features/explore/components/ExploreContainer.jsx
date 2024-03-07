import { SelectPicker } from 'rsuite';
import 'rsuite/SelectPicker/styles/index.css';
import Button from '../../../global_components/Button';
import ToggleOnButton from '../../../global_components/ToggleOnButton';
import Input from '../../../global_components/Input';
import { SearchIcon } from '../../../icons';
import EventCard from '../../../global_components/EventCard';
import useExploreContext from '../hook/useExplore';
import { FACILITY_LIST } from '../../../constance';

export default function ExploreContainer() {
  const ExploreContextObject = useExploreContext();

  const {
    input,
    setInput,
    open,
    setOpen,
    category,
    province,
    handleCheckbox,
    handleOnChange,
    handleOnSubmit,
    events,
  } = ExploreContextObject;

  const categoryData = category?.map((el, index) => ({
    label: el.name,
    value: el.id,
    name: 'categoryId',
  }));

  const provinceData = province?.map((el, index) => ({
    label: el.provinceNameEn,
    value: el.id,
    name: 'provinceId',
  }));

  const facilityData = Object.entries(FACILITY_LIST).map((el, index) => ({
    label: el[1],
    value: el[0],
    name: el[0],
    key: index,
  }));

  console.log(events);

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
                data={categoryData}
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
                data={provinceData}
                onChange={(value) => {
                  setInput({ ...input, provinceId: value });
                }}
              />
            </div>

            {/* facility checklist */}
            <div className='py-[2rem]'>
              <div className='flex flex-col gap-4 '>
                <span className='font-semibold'>Facility</span>
                <ToggleOnButton
                  forMap={facilityData}
                  onChange={handleCheckbox}
                  input={input}
                />
              </div>
            </div>

            {/* button group */}
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
        {events?.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
}
