
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./Signup";
import HomePage from "./HomePage";
import SigninPage from "./Signin";

function App() {

  const router = createBrowserRouter([
    {
      path : '/signin',
      element: <SigninPage />
    },
    {
      path: '/signup',
      element: <SignupPage />
    },
    {
      path: '/home',
      element: <HomePage />
    }
  ])
 

  return (
    <>
      
    <RouterProvider router={router} />

    </>
  )
}

export default App
