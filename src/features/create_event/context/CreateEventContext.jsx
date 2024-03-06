import { createContext, useState, useEffect, useMemo } from 'react';
import axios from '../../../configs/axios';

import categoryApi from '../../../api/category';
import provinceApi from '../../../api/province';

export const CreateEventContext = createContext();

export default function CreateEventContextProvider({ children }) {
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [image, setImage] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [subDistrict, setSubDistrict] = useState([]);
  const [category, setCategory] = useState([]);
  const [time, setTime] = useState({});
  const [input, setInput] = useState({});

  console.log(input);
  //   console.log(coverImage);
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

  //  ================== handle time ======================= //
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
  //= =============================================================//

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
    console.log(input);
    setInput({ ...input, [item.name]: value });
    if (item.name === 'provinceId') {
      setDistrict(province[item.index].Districts);
      setSubDistrict([]);
      setInput((prev) => {
        console.log(prev);
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
      // toast.error(err.response?.data.message);
    }
  };

  const inputObject = useMemo(
    () => ({
      input,
      handleTime,
      handleChange,
      handleCheckbox,
      handleformSubmit,
      coverImage,
      handleUploadCover,
      handleUploadImage,
      image,
      handleDeleteImage,
    }),
    [input, coverImage, image]
  );

  const CategoryObject = useMemo(
    () => ({
      category,
      setCategory,
    }),
    [category]
  );

  const ProvinceObject = useMemo(
    () => ({
      province,
      district,
      subDistrict,
      handleSelectPicker,
      input,
    }),
    [province, district, subDistrict, input]
  );

  const contextValue = useMemo(
    () => ({ CategoryObject, ProvinceObject, inputObject }),
    [CategoryObject, ProvinceObject, inputObject]
  );

  useEffect(() => {
    fetchProvince();
    fetchCategory();
  }, []);

  return (
    <CreateEventContext.Provider value={contextValue}>
      {children}
    </CreateEventContext.Provider>
  );
}
