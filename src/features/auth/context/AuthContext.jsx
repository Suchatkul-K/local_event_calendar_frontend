import { createContext, useState, useMemo, useEffect } from 'react';
import { authMe } from '../../../api/auth';
import { getToken } from '../../../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  const allAuthObj = useMemo(
    () => ({
      authUser,
      setAuthUser,
    }),
    [authUser]
  );

  const fetchAuth = async () => {
    const token = getToken();
    const authResult = await authMe(token);
    setAuthUser(authResult.data);
  };

  useEffect(() => {
    fetchAuth();
  }, []);

  return (
    <AuthContext.Provider value={allAuthObj}>{children}</AuthContext.Provider>
  );
}
