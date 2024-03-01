import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import CreateEventPage from '../pages/CreateEventPage';
import ProfilePage from '../pages/ProfilePage';

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
    path: '/Register',
    element: <RegisterPage />,
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
