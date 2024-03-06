import { useState, createContext, useEffect, useMemo } from 'react';
import { getAllEvent } from '../../../api/event';

export const ExploreContext = createContext();

function ExploreContextProvider({ children }) {
  const [events, setEvents] = useState();

  const getAll = async () => {
    const response = await getAllEvent();
    setEvents(response.data);
  };

  useEffect(() => {
    getAll();
  }, []);

  const eventObj = useMemo(
    () => ({
      events,
    }),
    [events]
  );

  return (
    <ExploreContext.Provider value={eventObj}>
      {children}
    </ExploreContext.Provider>
  );
}

export default ExploreContextProvider;
