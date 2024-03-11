import { createContext, useMemo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEvent } from '../../../api/event';

export const EventContext = createContext();

export default function EventContextProvider({ children }) {
  const { eventId } = useParams();
  const [event, setEvent] = useState();

  const getEventByEventId = async () => {
    try {
      const response = await getEvent(eventId);
      console.log(response.data);
      setEvent(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEventByEventId();
  }, []);

  const eventObj = useMemo(
    () => ({
      event,
    }),
    [event]
  );

  return (
    <EventContext.Provider value={eventObj}>{children}</EventContext.Provider>
  );
}
