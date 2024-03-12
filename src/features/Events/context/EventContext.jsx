import { createContext, useMemo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEvent } from '../../../api/event';

export const EventContext = createContext();

export default function EventContextProvider({ children }) {
  const { eventId } = useParams();
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);

  const getEventByEventId = async () => {
    try {
      setLoading(true);
      const response = await getEvent(eventId);
      console.log(response.data);
      setEvent(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEventByEventId();
  }, []);

  const eventObj = useMemo(
    () => ({
      event,
      setLoading,
      loading,
    }),
    [event]
  );

  return (
    <EventContext.Provider value={eventObj}>{children}</EventContext.Provider>
  );
}
