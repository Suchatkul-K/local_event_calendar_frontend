import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import EventPage from '../pages/EventPage';
import CreateEventPage from '../pages/CreateEventPage';
import ExplorePage from '../pages/ExplorePage';
import ProfilePage from '../pages/ProfilePage';
import Container from '../layouts/Container';
import MapPage from '../pages/MapPage';
import OrganizerRegisterPage from '../pages/OrganizerRegisterPage';
import UserRegisterPage from '../pages/UserRegisterPage';
import EventContextProvider from '../features/Events/context/EventContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Container />,
    children: [
      {
        path: '/home',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register/organizer',
        element: <OrganizerRegisterPage />,
      },
      {
        path: '/register',
        element: <UserRegisterPage />,
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
      {
        path: '/event/:eventId',
        element: <EventPage />,
      },
      {
        path: '',
        element: <Navigate to='/home' />,
      },
      {
        path: '/*',
        element: <Navigate to='/home' />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
