import { useMemo, useState, createContext, useEffect } from 'react';
import { getAllEvent } from '../../../api/event';
import getStatistic from '../../../api/statistic';

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statisticUser, setStatisticUser] = useState([]);

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

  const fetchStatisticUser = async () => {
    try {
      setLoading(true);
      const statistic = await getStatistic();
      setStatisticUser(statistic.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
    fetchStatisticUser();
  }, []);

  const adminObj = useMemo(
    () => ({
      events,
      loading,
      setLoading,
      statisticUser,
      fetchEvents,
    }),
    [events, loading, statisticUser]
  );
  return (
    <AdminContext.Provider value={adminObj}>{children}</AdminContext.Provider>
  );
}
