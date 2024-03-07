import { createContext, useEffect, useMemo, useState } from 'react';
import getCategory from '../../../api/category';
import getProvince from '../../../api/province';
import { getFilteredEvent } from '../../../api/event';

export const ExploreContext = createContext();

export function ExploreContextProvider({ children }) {
  const [input, setInput] = useState({});
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [province, setProvince] = useState([]);
  const [events, setEvents] = useState([]);

  const fetchCategory = async () => {
    try {
      const categories = await getCategory();
      //   console.log(categories.data);
      setCategory(categories.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProvince = async () => {
    try {
      const provinces = await getProvince();
      setProvince(provinces.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchEvents = async () => {
    const response = await getFilteredEvent(input);
    // console.log(response.data);
    setEvents(response.data);
  };

  useEffect(() => {
    fetchCategory();
    fetchProvince();
    fetchEvents();
  }, []);

  const handleCheckbox = (e) => {
    if (e.target.checked) {
      setInput({ ...input, [e.target.name]: true });
    } else {
      const tempSelected = { ...input };
      delete tempSelected[e.target.name];
      setInput(tempSelected);
    }
  };

  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (e) => {
    console.log('onSubmit');
    e.preventDefault();

    console.log(input);

    // fetch event by input
    fetchEvents();
  };

  const ExploreContextObject = useMemo(
    () => ({
      input,
      setInput,
      open,
      setOpen,
      category,
      //   setCategory,
      province,
      //   setProvince,
      handleCheckbox,
      handleOnChange,
      handleOnSubmit,
      events,
    }),
    [category, province, input, open, events]
  );

  return (
    <ExploreContext.Provider value={ExploreContextObject}>
      {children}
    </ExploreContext.Provider>
  );
}
