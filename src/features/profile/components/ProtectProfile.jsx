import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../../auth/hooks/auth';

function ProtectProfile({ children }) {
  const allAuthObj = useAuth();
  const { authUser } = allAuthObj;

  return (
    <div>
      {authUser ? (
        // Redirect to profile page if authenticated
        children
      ) : (
        // Redirect to home page if not authenticated
        <Navigate to='/home' />
      )}
    </div>
  );
}

export default ProtectProfile;
