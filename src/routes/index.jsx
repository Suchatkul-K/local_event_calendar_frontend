import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import CreateEventPage from '../pages/CreateEventPage';
import ProfilePage from '../pages/ProfilePage';
import TestPage from '../pages/TestPage';
import OrganizerRegisterPage from '../pages/OrganizerRegisterPage';
import UserRegisterPage from '../pages/UserRegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/OrganizerRegister',
    element: <OrganizerRegisterPage />,
  },

  {
    path: '/UserRegister',
    element: <UserRegisterPage />,
  },

  {
    path: '/CreateEvent',
    element: <CreateEventPage />,
  },
  { path: '/profile', element: <ProfilePage /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
