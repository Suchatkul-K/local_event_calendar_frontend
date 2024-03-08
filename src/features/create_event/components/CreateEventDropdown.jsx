import { SelectPicker } from 'rsuite';
import useCreateEvent from '../hook/useCreateEvent';

function CreateEventDropdown() {
  const { CreateEventContextObject } = useCreateEvent();

  const { province, district, subDistrict, category, handleSelectPicker } =
    CreateEventContextObject;

  // ------------------------------map-----------------------------

  let districtData;
  let subDistrictData;

  const provinceData = province?.map((provinces, index) => ({
    label: provinces.provinceNameEn,
    value: provinces.id,
    name: 'provinceId',
    index,
  }));

  if (district) {
    districtData = district?.map((districts, index) => ({
      label: districts?.districtNameEn,
      value: districts?.id,
      name: 'districtId',
      index,
    }));
  }

  if (subDistrict) {
    subDistrictData = subDistrict?.map((subDistricts, index) => ({
      label: subDistricts?.subdistrictNameEn,
      value: subDistricts?.id,
      name: 'subDistrictId',
      index,
    }));
  }

  const categoryData = category?.map((catagories) => ({
    label: catagories?.name,
    value: catagories?.id,
    name: 'categoryId',
  }));

  return (
    <div className='flex flex-col  gap-[1rem] w-full'>
      {/* Address dropdown */}
      <div className='flex flex-col  gap-[1rem] w-full'>
        <div className='w-full '>
          <span className='font-semibold p-1'>Province</span>
          <SelectPicker
            block
            placeholder='Select Province'
            data={provinceData}
            onSelect={handleSelectPicker}
          />
        </div>

        <div className='w-full'>
          <span className='font-semibold p-1'>District</span>
          <SelectPicker
            block
            data={districtData}
            onSelect={handleSelectPicker}
          />
        </div>

        <div className='w-full'>
          <span className='font-semibold p-1'>Subdistrict</span>
          <SelectPicker
            block
            data={subDistrictData}
            onSelect={handleSelectPicker}
          />
        </div>
      </div>

      {/* Category dropdown */}
      <div className='w-full'>
        <span className='font-semibold p-1'>Category Event</span>
        <SelectPicker block data={categoryData} onSelect={handleSelectPicker} />
      </div>
    </div>
  );
}

export default CreateEventDropdown;
