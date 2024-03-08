import { useMemo, useState, createContext, useEffect } from 'react';
import categoryApi from '../../../api/category';
import provinceApi from '../../../api/province';
import * as eventApi from '../../../api/event';

export const EditEventContext = createContext();

export default function EditEventContextProvider({ children }) {
  const [province, setProvince] = useState(null);
  const [category, setCategory] = useState([]);
  const [event, setEvent] = useState(null);

  const fetchProvince = async () => {
    try {
      const provinces = await provinceApi();
      setProvince(provinces.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchEventById = async () => {
    try {
      const res = await eventApi.getEvent(1);
      console.log(res.data);
      setEvent(res.data);
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
    fetchEventById();
  }, []);

  const selectObject = useMemo(
    () => ({
      province,
      category,
      event,
    }),
    [province, category, event]
  );

  return (
    <EditEventContext.Provider value={selectObject}>
      {children}
    </EditEventContext.Provider>
  );
}
