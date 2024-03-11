import { createContext, useState, useMemo, useEffect } from 'react';
import { authMe } from '../../../api/auth';
import { getToken } from '../../../utils/local-storage';

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  console.log('run');
  const allAuthObj = useMemo(
    () => ({
      setAuthUser,
      authUser,
    }),
    [authUser]
  );

  console.log(authUser);

  useEffect(() => {
    const fetchAuth = async () => {
      const storeToken = getToken();
      const authResult = await authMe(storeToken);
      setAuthUser(authResult.data);
    };
    fetchAuth();
  }, []);

  return (
    <AuthContext.Provider value={allAuthObj}>{children}</AuthContext.Provider>
  );
}
