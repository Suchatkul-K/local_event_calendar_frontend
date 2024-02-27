import Router from "./routes";
import { Slide, ToastContainer } from 'react-toastify';


function App() {
  // console.log('api', import.meta.env);
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        // theme="light"
        transition={Slide}
      />
    </>
  );
}

export default App;
