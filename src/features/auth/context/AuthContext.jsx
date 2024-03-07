import { createContext, useState, useMemo, useEffect } from 'react';
import { apiAuthMe } from '../../../api/auth';
import { getToken } from '../../../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const allAuthObj = useMemo(
    () => ({
      setAuthUser,
    }),
    []
  );

  useEffect(() => {
    const fetchAuth = async () => {
      const storeToken = getToken();
      const authResult = await apiAuthMe(storeToken);
      setAuthUser(authResult.data);
    };
    fetchAuth();
  }, []);

  return (
    <AuthContext.Provider value={allAuthObj}>{children}</AuthContext.Provider>
  );
}
