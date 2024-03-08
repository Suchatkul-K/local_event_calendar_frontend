import { useState, useRef, React, useEffect } from 'react';
import { SelectPicker } from 'rsuite';

import Input from '../../../global_components/Input';
import { PictureIcon } from '../../../icons';
import Button from '../../../global_components/Button';

// import categoryApi from '../../../api/category';
// import provinceApi from '../../../api/province';
import InputDate from '../../../global_components/InputDate';
import Map from '../../map/components/Map';
import FacilityCheckbox from './FacilityCheckbox';
import UploadImageContainer from './UploadImageContainer';
import EditOption from './EditOption';
import useEditEvent from '../hooks/useEditEvent';
import EditInput from './EditInput';
import EditDateAndTime from './EditDateAndTime';

export default function EditEventContainer() {
  const [coverImage, setCoverImage] = useState();
  const { province, category, event } = useEditEvent();
  console.log(event);
  const [district, setDistrict] = useState(null);
  const [subDistrict, setSubDistrict] = useState(null);
  const [image, setImage] = useState([]);
  const [time, setTime] = useState(null);
  const [input, setInput] = useState(null);
  if (!input && event) {
    setInput(event);
    setCoverImage(event?.coverImage);
  }
  // coverImage: event?.coverImage,
  // title: 'Amazing Thailand Marathon',
  // description:
  //   'Experience the renowned hospitality of Thailand and join world-class ',
  // startDate: '2024-03-22',
  // telNumber: '0625958789',
  // endDate: '2024-03-24',
  // categoryId: 3,
  // category: 'Sports',
  // timePeriod: '06:00-10:00',
  // isYearly: true,
  // address: ' 14/9 Soi Bang Kapi',
  // provinceId: 10,
  // districtId: 1006,
  // subDistrictId: 100608,
  // toilet: true,
  // parking: true,
  // lat: 13.756,
  // long: 100.66,

  let tempPeriodTime;
  const fileEl = useRef();
  if (event) {
    console.log(event);
    tempPeriodTime = event?.timePeriod?.split('-');
    console.log(tempPeriodTime);

    console.log(input);

    if (!time) {
      setTime({ startTime: tempPeriodTime[0], endTime: tempPeriodTime[1] });
    }
  }

  /// ///--------------------Handle---------------------------

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setInput({ ...input, [e.target.name]: true });
    } else {
      setInput({ ...input, [e.target.name]: false });
    }
  };

  const handleUploadCover = (e) => {
    setInput({ ...input, [[e.target.name]]: e.target.value });
    setCoverImage(e.target.files[0]);
  };

  const handleUploadImage = (e) => {
    const filesImage = e.target.files;
    setImage([...image, ...filesImage]);
    setInput({ ...input, [[e.target.name]]: [...image, ...filesImage] });
  };

  const handleDeleteImage = (el) => {
    const tempImage = image?.filter((file) => file.name !== el.name);

    setInput({ ...input, image: tempImage });
    setImage(tempImage);
  };

  const handleSelectPicker = (value, item) => {
    setInput({ ...input, [item.name]: value });
    if (item.name === 'provinceId') {
      setDistrict(province[item.index].Districts);
      setSubDistrict([]);
      setInput((prev) => {
        delete prev.districtId;

        return prev;
      });
    }

    if (item.name === 'districtId') {
      setSubDistrict(district[item.index].SubDistricts);
    }
  };

  const handleformSubmit = async (e) => {
    try {
      e.preventDefault();
      // const validateError = validateCreateEvent(input);
      // if (validateError) {
      //   return setError(validateError);
      // }

      const formData = new FormData();
      Object.keys(input).forEach((key) => formData.append(key, input[key]));

      //       await createEvent(formData);
      //       toast.success('create successfully');
      //       // setError({});
      //       setInput(initial);
    } catch (err) {
      console.log(err);
    }
  };

  let tempTime;
  const handleTime = (e) => {
    if (!tempTime) {
      tempTime = { ...time };
    }
    if (e.target.name === 'startTime') {
      tempTime = { ...tempTime, [e.target.name]: e.target.value };
      console.log(tempTime);
    }
    if (e.target.name === 'endTime') {
      tempTime = { ...tempTime, [e.target.name]: e.target.value };
    }
    if (tempTime.startTime && tempTime.endTime) {
      const { startTime, endTime } = tempTime;
      const craetetimePeriod = `${tempTime.startTime}-${tempTime.endTime}`;
      setInput({ ...input, timePeriod: craetetimePeriod });
      setTime({
        ...time,
        startTime,
        endTime,
      });
    }
  };

  // ------------------------------map-----------------------------
  if (!district && province && input) {
    setDistrict([]);
    console.log(input);
    setDistrict(
      province.find((value) => value.id === input?.EventAddress.provinceId)
        .Districts
    );
  }

  if (!subDistrict && district && input) {
    setSubDistrict([]);
    setSubDistrict(
      district.find((value) => value.id === input?.EventAddress.districtId)
        .SubDistricts
    );
  }
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

  const categoryData = category?.map((categories) => ({
    label: categories?.name,
    value: categories?.id,
    name: 'categoryId',
  }));
  if (!event || !province || !coverImage || !input) {
    return <div>loading</div>;
  }

  return (
    <form onSubmit={handleformSubmit}>
      <div>
        <div className=' mx-auto flex flex-col  gap-[1rem] w-full py-[2rem] px-[2rem]'>
          <div className='text-[1.75rem] font-semibold text-center pb-3'>
            Edit
          </div>
          <span className='text-[1.2rem] font-medium'>Cover Image</span>

          {input.coverImage ? (
            <div className=' flex justify-center items-center'>
              <img
                className='object-cover w-full h-[34vh] rounded-lg'
                src={coverImage || input?.coverImage}
                alt='cover pic'
              />
            </div>
          ) : (
            <div className='flex flex-col items-center'>
              <PictureIcon />
            </div>
          )}

          <div className='flex flex-row justify-end'>
            <div className='md:w-[18%] sm:[30%]'>
              <input
                name='coverImage'
                type='file'
                multiple
                ref={fileEl}
                className='hidden'
                onChange={handleUploadCover}
              />
            </div>

            <Button onClick={() => fileEl.current.click()}>Upload </Button>
          </div>

          <div />

          <Input
            name='title'
            placeholder='Title'
            value={input}
            onChange={handleChange}
            title='Title'
          />

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

          {/* /////////////////// date and tim /////////// */}
          <EditDateAndTime
            handleChange={handleChange}
            handleTime={handleTime}
            input={input}
            tempPeriodTime={tempPeriodTime}
          />

          <div className='flex gap-[0.5rem] p-2 border rounded-lg'>
            <span className='font-medium'>Yearly</span>
            <input
              type='checkbox'
              checked={input.isYearly}
              name='isYearly'
              value={input}
              onChange={handleCheckbox}
            />
          </div>
          <EditInput onChange={handleChange} input={input} />

          <EditOption
            data={{ provinceData, districtData, subDistrictData, categoryData }}
            onSelect={handleSelectPicker}
            input={input}
          />

          <UploadImageContainer
            onChange={handleUploadImage}
            onClick={handleDeleteImage}
            image={image}
          />

          <FacilityCheckbox onChange={handleCheckbox} input={input} />
        </div>
      </div>
      <Map />

      <div className=' mx-auto flex flex-col justify-center text- gap-[1.5rem] space-between w-fit p-[1.5rem] '>
        <Button type='submit'>Save Edit</Button>
      </div>
    </form>
  );
}
