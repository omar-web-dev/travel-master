import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Page/Contact";
import Destination from "../Page/Destination";
import ErrorPage from "../Page/ErrorPage";
import Home from "../Page/Home";
import Hotel from "../Page/Hotel";
import Blog from "../Page/Blog";
import News from "../Page/News";
import Login from "../SharePage/Login";
import Registration from "../SharePage/Registration";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://travel-master-server.vercel.app/hotels'),
      },
      {
        path: 'home', element: <Home />,
        loader: () => fetch('https://travel-master-server.vercel.app/hotels'),
      },
      {
        path: 'hotel/:id', element: <Hotel />,
        loader: ({ params }) => fetch(`https://travel-master-server.vercel.app/hotel/${params.id}`),
      },
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'destination',
        element: <Destination />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'log-in',
        element: <Login />
      },
      {
        path: 'sing-up',
        element: <Registration />
      },
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
])