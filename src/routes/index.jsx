import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import EventPage from '../pages/EventPage';

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
    path: '/Event',
    element: <EventPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
