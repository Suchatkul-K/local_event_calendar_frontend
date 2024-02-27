import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <> 
        </>
      ),
    },
    {
      path: "/",
      element: (
        <>
            <Outlet />        
        </>
      ),
      children: [
        {
          path: "home",
          element: (
            <>        
            </>
          )
        },
      ],
    },
  ]);
  
  export default function Router() {
    return <RouterProvider router={router} />;
  }