import { useState, useRef, React, useEffect } from 'react';
import { SelectPicker } from 'rsuite';
import { v4 as uuid } from 'uuid';
import Input from '../../../global_components/Input';
import { PictureIcon } from '../../../icons';
import Button from '../../../global_components/Button';
import Map from '../../main/components/Map';
import { EVENT_FACILITY } from '../../../constance/index';
import categoryApi from '../../../api/category';
import provinceApi from '../../../api/province';
import InputDate from '../../../global_components/InputDate';

export default function CreateEventContainer() {
  const [input, setInput] = useState({});
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [subDistrict, setSubDistrict] = useState([]);
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [time, setTime] = useState({});

  const fileEl = useRef();
  const fileEl2 = useRef();

  console.log(input);

  // ------------------------fetch-----------------
  const fetchProvince = async () => {
    try {
      const provinces = await provinceApi();
      setProvince(provinces.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategory = async () => {
    try {
      const categories = await categoryApi();
      setCategory(categories.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProvince();
    fetchCategory();
  }, []);
  /// ///--------------------Handle---------------------------

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setInput({ ...input, [e.target.name]: 'true' });
    } else {
      setInput({ ...input, [e.target.name]: 'false' });
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
    console.log(el);
    console.log(input.image);
    const tempImage = image?.filter((file) => file.name !== el.name);

    setInput({ ...input, image: tempImage });
    setImage(tempImage);
  };

  const handleSelectPicker = (value, item, event) => {
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

  let tempTime = { startTime: '', endTime: '' };
  const handleTime = (e) => {
    if (e.target.name === 'startTime') {
      if (tempTime.startTime === '') {
        tempTime = { ...time };
      }
      tempTime = { ...tempTime, [e.target.name]: e.target.value };
    }
    if (e.target.name === 'endTime') {
      if (tempTime.endTime === '') {
        tempTime = { ...time };
      }
      tempTime = { ...tempTime, [e.target.name]: e.target.value };
    }
    if (tempTime.startTime && tempTime.endTime) {
      const { startTime, endTime } = tempTime;
      const timePeriod = `${tempTime.startTime}-${tempTime.endTime}`;
      setInput({ ...input, timePeriod });
      setTime({
        ...time,
        startTime,
        endTime,
      });
    }
  };
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

  const catagoryData = category?.map((catagories) => ({
    label: catagories?.name,
    value: catagories?.id,
    name: 'catagoryId',
  }));

  return (
    <form onSubmit={handleformSubmit}>
      <div>
        <div className=' mx-auto flex flex-col  gap-[1rem] w-full py-[2rem] px-[3rem]'>
          <div className='text-[1.75rem] font-semibold text-center pb-3'>
            Create An Event
          </div>
          <span className='text-[1.2rem] font-medium'>Cover Image</span>

          {coverImage ? (
            <div className=' flex justify-center items-center'>
              <img
                className='object-cover w-full h-[34vh] rounded-lg'
                src={URL.createObjectURL(coverImage)}
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

          <span className='text-[1.2rem] font-medium '>Image</span>
          <div />
          {image[0] ? (
            <div className=' flex flex-col gap-2 justify-center'>
              {image.map((el) => (
                <div className=' relative' key={uuid()}>
                  <img
                    id={uuid()}
                    name={el.name}
                    className='object-cover w-full h-[34vh] rounded-lg'
                    src={URL.createObjectURL(el)}
                    alt='cover pic'
                  />
                  <button
                    type='button'
                    className='absolute top-0 right-0 m-3 bg-white w-[1.5rem] font-bold h-[1.5rem] text-center rounded-[100%]'
                    onClick={() => handleDeleteImage(el)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className='flex flex-col items-center'>
              <PictureIcon />
            </div>
          )}
          <div className='flex flex-row justify-end'>
            <div className='md:w-[18%] sm:[30%]'>
              <input
                name='image'
                type='file'
                ref={fileEl2}
                className='hidden'
                onChange={handleUploadImage}
              />
            </div>

            <Button onClick={() => fileEl2.current.click()}>Upload </Button>
          </div>
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

          <div className='flex flex-row justify-between w-fit '>
            <InputDate
              name='startDate'
              title='Start Date'
              onChange={handleChange}
            />
            <div className='text-end'>
              <InputDate
                name='endDate'
                title='End Date'
                onChange={handleChange}
              />
            </div>
          </div>

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

          <Input
            name='website'
            placeholder='Web Site'
            value={input}
            onChange={handleChange}
            title='Web Site'
          />

          <Input
            name='email'
            placeholder='Email'
            value={input}
            onChange={handleChange}
            title='Email'
          />

          <Input
            name='facebook'
            placeholder='Facebook'
            value={input}
            onChange={handleChange}
            title='Facebook'
          />

          <Input
            name='telNumber'
            placeholder='Telephone'
            value={input}
            onChange={handleChange}
            title='Telephone'
          />

          <Input
            name='address'
            placeholder='Address'
            value={input}
            onChange={handleChange}
            title='Address'
          />

          <Input
            name='address2'
            placeholder='Address(optional)'
            value={input}
            onChange={handleChange}
            title='Address(optional)'
          />

          <div className='w-full '>
            <span className='font-semibold p-1'>Province</span>
            <SelectPicker
              block
              // valueKey='test'
              placeholder='Select Province'
              data={provinceData}
              // onChange={handleSelectPicker}
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

          <div className='w-full'>
            <span className='font-semibold p-1'>Category Event</span>
            <SelectPicker
              block
              data={catagoryData}
              onSelect={handleSelectPicker}
            />
          </div>

          <div className='grid grid-cols-2  gap-[0.25rem] font-medium w-full'>
            {EVENT_FACILITY.map((el) => (
              <div className='flex flex-row gap-[0.5rem]' key={el.id}>
                <input
                  type='checkbox'
                  name={el.name}
                  value={el.name}
                  onChange={handleCheckbox}
                />
                <div className='font-semibold'>{el.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Map />

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
