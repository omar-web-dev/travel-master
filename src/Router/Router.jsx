import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Page/Contact";
import Destination from "../Page/Destination";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";


export const router = createBrowserRouter([
  {
    path : '/' ,
    element : <Main/>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : 'home',
        element : <Home/>
      },
      // {
      //   path : 'sing-in',
      //   element : <SingIn/>
      // },
      {
        path : 'contact',
        element : <Contact/>
      },
      {
        path : 'destination',
        element : <Destination/>
      },
    ],
    errorElement : <ErrorPage></ErrorPage>
  }
])