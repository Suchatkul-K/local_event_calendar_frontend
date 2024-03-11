import { Slide, ToastContainer } from 'react-toastify';
import Router from './routes';
import AuthContextProvider from './features/auth/context/AuthContext';

function App() {
  // console.log('api', import.meta.env);
  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
      <ToastContainer
        position='bottom-left'
        autoClose={5000}
        // theme="light"
        transition={Slide}
      />
    </>
  );
}

export default App;
