import axios from 'axios';
import { useEffect, useState, useMemo, createContext } from 'react';
import { authMe } from '../../../api/auth';
import { getToken } from '../../../utils/local-storage';

export const ProfileContext = createContext();

export default function ProfileContextProvider({ children }) {
  // const [event, setEvent] = useState(null);
  const [authEvents, setAuthEvents] = useState(null);

  const fetchEvent = async () => {
    try {
      // const token = getToken();
      // const events = await axios('/event');
      const authEvent = await authMe();
      // console.log(events.data);
      setAuthEvents(authEvent.data);
      console.log(authEvent.data);
      // setEvent(events.data);
    } catch (error) {
      console.log(error);
    }
  };

  const ProfileContextObject = useMemo(
    () => ({
      authEvents,
    }),
    [authEvents]
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
