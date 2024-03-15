import { useMemo, useState, createContext, useEffect } from 'react';
import { getAllEvent } from '../../../api/event';

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const event = await getAllEvent();
      setEvents(event.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const adminObj = useMemo(
    () => ({
      events,
      loading,
    }),
    [events, loading]
  );
  return (
    <AdminContext.Provider value={adminObj}>{children}</AdminContext.Provider>
  );
}
