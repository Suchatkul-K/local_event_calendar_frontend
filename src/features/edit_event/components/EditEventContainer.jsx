import { useState, useRef, React, useEffect } from 'react';
import { SelectPicker } from 'rsuite';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Input from '../../../global_components/Input';
import { PictureIcon } from '../../../icons';
import Button from '../../../global_components/Button';
import InputDate from '../../../global_components/InputDate';
import Map from '../../map/components/Map';
import FacilityCheckbox from './FacilityCheckbox';
import UploadImageContainer from './UploadImageContainer';
import EditOption from './EditOption';
import useEditEvent from '../hooks/useEditEvent';
import EditInput from './EditInput';
import EditDateAndTime from './EditDateAndTime';

export default function EditEventContainer() {
  const { province, category, event, loading, setLoading, eventId } =
    useEditEvent();
  const [district, setDistrict] = useState([]);
  const [subDistrict, setSubDistrict] = useState([]);
  const [coverImage, setCoverImage] = useState();
  // const [image, setImage] = useState([]);
  const [time, setTime] = useState(null);
  const [input, setInput] = useState(null);
  const navigate = useNavigate();
  const fileEl = useRef();
  //  ====================== initial state ======================== //

  // ========================= map value ========================= //

  if (district.length < 1 && !loading) {
    setDistrict(
      province.find((value) => value.id === event?.EventAddress.provinceId)
        .Districts
    );
  }

  if (subDistrict.length < 1 && district.length > 1) {
    setSubDistrict(
      district.find((value) => value.id === event?.EventAddress.districtId)
        .SubDistricts
    );
  }

  //= =========================== Select Picker data =======================//
  let districtData;
  let subDistrictData;

  const provinceData = province?.map((provinces, index) => ({
    label: provinces.provinceNameEn,
    value: provinces.id,
    name: 'provinceId',
    index,
  }));

  if (district.length > 1) {
    districtData = district?.map((districts, index) => ({
      label: districts?.districtNameEn,
      value: districts?.id,
      name: 'districtId',
      index,
    }));
  }

  if (subDistrict.length > 1) {
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

  /// ========================== Handle ============================== ///
  // =========================== Handle change ==========================//
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
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

  // =========================== Handle CheckBox ==========================//
  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setInput({ ...input, [e.target.name]: true });
    } else {
      setInput({ ...input, [e.target.name]: false });
    }
  };

  // =========================== Handle coverImage ==========================//
  const handleUploadCover = (e) => {
    setInput({ ...input, [[e.target.name]]: e.target.value });
    setCoverImage(e.target.files[0]);
  };

  // const handleUploadImage = (e) => {
  //   const filesImage = e.target.files;
  //   setImage([...image, ...filesImage]);
  //   setInput({ ...input, [[e.target.name]]: [...image, ...filesImage] });
  // };
  // const handleDeleteImage = (el) => {
  //   const tempImage = image?.filter((file) => file.name !== el.name);

  //   setInput({ ...input, image: tempImage });
  //   setImage(tempImage);
  // };

  /// ========================== setTime ============================== ///

  let tempPeriodTime;
  if (event) {
    tempPeriodTime = event?.timePeriod?.split('-');
    if (!time) {
      setTime({ startTime: tempPeriodTime[0], endTime: tempPeriodTime[1] });
    }
  }

  // =========================== Handle time ==========================//
  let craetetimePeriod;
  const handleTime = (e) => {
    if (e.target.name === 'startTime') {
      setTime({ ...time, [e.target.name]: e.target.value });
      craetetimePeriod = `${e.target.value}-${time.endTime}`;
    }
    if (e.target.name === 'endTime') {
      setTime({ ...time, [e.target.name]: e.target.value });
      craetetimePeriod = `${time.startTime}-${e.target.value}`;
    }
    setInput({ ...input, timePeriod: craetetimePeriod });
  };

  // =========================== Handle Summit ==========================//
  const handleformSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const formData = new FormData();
      Object.keys(input).forEach((key) => formData.append(key, input[key]));
      toast.success('create successfully');
      // const event = await // apiupdate
      // const { eventId } = event.data.eventId;
    } catch (err) {
      console.log(err);
      setInput(null);
    } finally {
      setLoading(false);
      navigate(`/event/${eventId}`);
    }
  };

  // ========================== Loading Spinner =====================//
  if (loading) {
    return (
      <div className='h-dvh w-dvw flex justify-center items-center animate-pulse'>
        loading...
      </div>
    );
  }

  return (
    <form onSubmit={handleformSubmit}>
      <div>
        <div className=' mx-auto flex flex-col  gap-[1rem] w-full py-[2rem] px-[2rem]'>
          <div className='text-[1.75rem] font-semibold text-center pb-3'>
            Edit
          </div>
          <span className='text-[1.2rem] font-medium'>Cover Image</span>

          {/*  ============================= cover Image start ======================== */}
          <div className=' flex justify-center items-center'>
            <img
              className='object-cover w-full h-[34vh] rounded-lg'
              src={
                coverImage ? URL.createObjectURL(coverImage) : event?.coverImage
              }
              alt='cover pic'
            />
          </div>
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
          {/*  ============================= cover Image end ======================== */}

          {/*  ============================= Input start ======================== */}
          <Input
            name='title'
            placeholder='Title'
            value={input?.title ? input : event}
            onChange={handleChange}
            title='Title'
          />
          <div>
            <p className='font-semibold pl-2 pb-2 text-[1rem]'>Description</p>
            <textarea
              placeholder='Description'
              className='textarea textarea-bordered textarea-md w-full'
              name='description'
              value={input?.description || event.description}
              onChange={handleChange}
            />
          </div>
          {/* /////////////////// date and time /////////// */}
          <EditDateAndTime
            handleChange={handleChange}
            handleTime={handleTime}
            input={input}
            initData={event}
            tempPeriodTime={tempPeriodTime}
            time={time}
          />
          <div className='flex gap-[0.5rem] p-2 border rounded-lg'>
            <span className='font-medium'>Yearly</span>
            <input
              type='checkbox'
              // checked={input.isYearly}
              name='isYearly'
              value={input?.isYearly || event.isYearly}
              onChange={handleCheckbox}
            />
          </div>
          <EditInput onChange={handleChange} input={input} initData={event} />
          <EditOption
            data={{
              provinceData,
              districtData,
              subDistrictData,
              categoryData,
              event,
            }}
            onSelect={handleSelectPicker}
            input={input}
          />
          {/* <UploadImageContainer
            onChange={handleUploadImage}
            onClick={handleDeleteImage}
            image={image}
          /> */}
          <FacilityCheckbox
            onChange={handleCheckbox}
            input={input}
            initData={event}
          />
        </div>
      </div>
      <Map />

      <div className=' mx-auto flex flex-col justify-center text- gap-[1.5rem] space-between w-fit p-[1.5rem] '>
        <Button type='submit'>Save Edit</Button>
      </div>
    </form>
  );
}
