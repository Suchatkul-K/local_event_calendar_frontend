import React from 'react';
import DashBoardContainer from '../features/admin/components/DashBoardContainer';
import AdminContextProvider from '../features/admin/context/AdminContext';

function DashBoard() {
  return (
    <AdminContextProvider>
      <DashBoardContainer />
    </AdminContextProvider>
  );
}

export default DashBoard;
