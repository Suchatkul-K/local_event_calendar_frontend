import { createContext, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import getProvince from '../../../api/province';
import getCategory from '../../../api/category';
import { createEvent } from '../../../api/event';
import { getToken } from '../../../utils/local-storage';
import { validateCreateEvent } from '../validation/validate-create-event';

export const CreateEventContext = createContext();

export function CreateEventContextProvider({ children }) {
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [subDistrict, setSubDistrict] = useState([]);
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [time, setTime] = useState({});

  // ------------------------fetch-----------------
  const fetchProvince = async () => {
    try {
      const provinces = await getProvince();
      setProvince(provinces.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategory = async () => {
    try {
      const categories = await getCategory();
      setCategory(categories.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProvince();
    fetchCategory();
  }, []);

  /// ///--------------------Handle--------------------------- ///

  const handleChange = (e) => {
    delete error[e.target.name];
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleDate = (e) => {
    delete error[e.target.name];
    setInput({
      ...input,
      [e.target.name]: new Date(e.target.value).toISOString(),
    });
  };

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setInput({ ...input, [e.target.name]: 'true' });
    } else {
      const temp = { ...input };
      delete temp[e.target.name];
      setInput(temp);
    }
  };

  const handleUploadCover = (e) => {
    delete error[e.target.name];
    setCoverImage(e.target.files[0]);
    setInput({ ...input, [[e.target.name]]: e.target.files[0] });
  };

  const handleUploadImage = (e) => {
    const filesImage = e.target.files[0];
    setImage([...image, filesImage]);
  };

  const handleDeleteImage = (el) => {
    console.log(el);
    console.log(input.image);
    const tempImage = image?.filter((file) => file.name !== el.name);

    setInput({ ...input, image: tempImage });
    setImage(tempImage);
  };

  const handleSelectPicker = (value, item, event) => {
    // console.log(typeof value);
    delete error[item.name];
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
      const token = getToken();
      if (!token) {
        toast.error('Please log in before creating an event');
        return;
      }

      const validateError = validateCreateEvent(input);
      if (validateError) {
        setError(validateError);
        return;
      }

      const formData = new FormData();
      if (image) {
        image.forEach((value, index) => {
          formData.append('image', value);
        });
      }
      Object.keys(input).forEach((key) => formData.append(key, input[key]));

      // console.log(...formData);
      await createEvent(formData);
      toast.success('create successfully');
      // setError({});
      setInput({});
    } catch (err) {
      console.log(err);
    }
  };

  let tempTime = { startTime: '', endTime: '' };
  const handleTime = (e) => {
    delete error.timePeriod;
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

  const tempImage = image;

  const CreateEventContextObject = useMemo(
    () => ({
      input,
      error,
      setInput,
      province,
      district,
      subDistrict,
      category,
      image,
      coverImage,
      time,
      setTime,
      handleChange,
      handleDate,
      handleCheckbox,
      handleUploadCover,
      handleUploadImage,
      handleDeleteImage,
      handleSelectPicker,
      handleformSubmit,
      handleTime,
    }),
    [
      input,
      error,
      province,
      district,
      subDistrict,
      category,
      image,
      coverImage,
      time,
    ]
  );

  // stop image re-render
  const CreateEventImageObject = useMemo(
    () => ({
      tempImage,
    }),
    [image]
  );

  // combine Memo
  const CombineMemo = useMemo(
    () => ({
      CreateEventImageObject,
      CreateEventContextObject,
    }),
    [CreateEventImageObject, CreateEventContextObject]
  );

  return (
    <CreateEventContext.Provider value={CombineMemo}>
      {children}
    </CreateEventContext.Provider>
  );
}
