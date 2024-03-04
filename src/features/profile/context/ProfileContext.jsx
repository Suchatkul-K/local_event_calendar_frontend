import axios from 'axios';
import { useEffect, useState, useMemo, createContext } from 'react';

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  const [event, setEvent] = useState(null);

  const fetchEvent = async () => {
    try {
      const events = await axios('/event');

      console.log(events.data);
      setEvent(events.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ProfileContextObject = useMemo(
    () => ({
      event,
      setEvent,
    }),
    [event]
  );

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <ProfileContext.Provider value={ProfileContextObject}>
      {children}
    </ProfileContext.Provider>
  );
}
