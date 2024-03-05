import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import EventPage from '../pages/EventPage';
import CreateEventPage from '../pages/CreateEventPage';
import ExplorePage from '../pages/ExplorePage';
import ProfilePage from '../pages/ProfilePage';
import Container from '../layouts/Container';
import MapPage from '../pages/MapPage';
import HomeContextProvider from '../features/home/context/HomeContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    children: [
      {
        path: '/',
        element: (
          <HomeContextProvider>
            <HomePage />
          </HomeContextProvider>
        ),
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },

      {
        path: '/create-event',
        element: <CreateEventPage />,
      },
      {
        path: '/explore',
        element: <ExplorePage />,
      },
      { path: '/profile', element: <ProfilePage /> },
      { path: '/map', element: <MapPage /> },
      { path: '/event/:eventId', element: <EventPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
