import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import EventPage from '../pages/EventPage';
import CreateEventPage from '../pages/CreateEventPage';
import ExplorePage from '../pages/ExplorePage';
import ProfilePage from '../pages/ProfilePage';
import Container from '../layouts/Container';
import MapPage from '../pages/MapPage';
import HomeContextProvider from '../features/home/context/HomeContext';
import OrganizerRegisterPage from '../pages/OrganizerRegisterPage';
import UserRegisterPage from '../pages/UserRegisterPage';
import EventContextProvider from '../features/Events/context/EventContext';
import EditEventPage from '../pages/EditEventPage';

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
        path: '/OrganizerRegister',
        element: <OrganizerRegisterPage />,
      },
      {
        path: '/Userregister',
        element: <UserRegisterPage />,
      },
      {
        path: '/create-event',
        element: <CreateEventPage />,
      },
      {
        path: '/editevent/:eventId',
        element: <EditEventPage />,
      },

      {
        path: '/explore',
        element: <ExplorePage />,
      },
      { path: '/profile', element: <ProfilePage /> },
      { path: '/map', element: <MapPage /> },

      {
        path: '/event/:eventId',
        element: (
          <EventContextProvider>
            <EventPage />
          </EventContextProvider>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
