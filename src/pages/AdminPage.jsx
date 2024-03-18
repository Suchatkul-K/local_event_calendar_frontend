import React from 'react';
import AdminContainer from '../features/admin/components/AdminContainer';
import AdminContextProvider from '../features/admin/context/AdminContext';

function AdminPage() {
  return (
    <AdminContextProvider>
      <AdminContainer />
    </AdminContextProvider>
  );
}

export default AdminPage;
