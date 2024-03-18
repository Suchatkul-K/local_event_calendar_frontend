import { useMemo, useState, createContext } from 'react';

import { getAllEventInScope } from '../../../api/event';

export const MapContext = createContext();

function MapContextProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data based on the specified bounds
  const fetchData = (bounds) => getAllEventInScope(bounds);

  const MapContextObj = useMemo(
    () => ({
      events,
      setEvents,
      fetchData,
      user,
      setUser,
      loading,
      setLoading,
    }),
    [events, user, loading]
  );

  return (
    <MapContext.Provider value={MapContextObj}>{children}</MapContext.Provider>
  );
}

export default MapContextProvider;
