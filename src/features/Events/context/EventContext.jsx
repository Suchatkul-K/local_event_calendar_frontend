import { createContext, useMemo } from 'react';

export const EventContext = createContext();

export default function EventContextProvider({ children }) {
  const EventContextObject = useMemo(() => {}, []);

  return (
    <EventContext.Provider value={EventContextObject}>
      {children}
    </EventContext.Provider>
  );
}
