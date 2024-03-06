import { createContext, useMemo } from 'react'

export const ExploreContext = createContext()

export function ExploreContextProvider({ children }) {
    const ExploreContextObject = useMemo(() => {}, []);
    
  return (
    <ExploreContext.Provider value={ExploreContextObject}>
        {children}
    </ExploreContext.Provider>
  )
}