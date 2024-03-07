import { createContext, useState, useEffect, useMemo } from 'react';

export const CreateEventContext = createContext();

export default function CreateEventContextProvider({ children }) {
  // const [input, setInput] = useState({});

  //   console.log(coverImage);

  //  ================== handle time ======================= //

  //= =============================================================//

  // const inputObject = useMemo(
  //   () => ({
  //     input,
  //     handleTime,
  //     handleChange,
  //     handleCheckbox,
  //     handleformSubmit,
  //     coverImage,
  //     handleUploadCover,
  //     handleUploadImage,
  //     image,
  //     handleDeleteImage,
  //   }),
  //   [input, coverImage, image]
  // );

  // const CategoryObject = useMemo(
  //   () => ({
  //     category,
  //     setCategory,
  //   }),
  //   [category]
  // );

  // const ProvinceObject = useMemo(
  //   () => ({
  //     province,
  //     district,
  //     subDistrict,
  //     handleSelectPicker,
  //     input,
  //   }),
  //   [province, district, subDistrict, input]
  // );

  // const contextValue = useMemo(
  //   () => ({ CategoryObject, ProvinceObject, inputObject }),
  //   [CategoryObject, ProvinceObject, inputObject]
  // );

  return <CreateEventContext.Provider>{children}</CreateEventContext.Provider>;
}
