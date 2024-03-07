import { useState, useEffect, createContext, useMemo } from 'react';
import { getAllEvent } from '../../../api/event';

export const HomeContext = createContext();

function HomeContextProvider({ children }) {
  const [event, setEvent] = useState();

  const getAll = async () => {
    try {
      const response = await getAllEvent();
      setEvent(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const allEventsObj = useMemo(
    () => ({
      event,
    }),
    [event]
  );

  useEffect(() => {
    getAll();
  }, []);

  return (
    <HomeContext.Provider value={allEventsObj}>{children}</HomeContext.Provider>
  );
}

export default HomeContextProvider;
