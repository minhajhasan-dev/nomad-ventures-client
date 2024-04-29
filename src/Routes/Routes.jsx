import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyList from "../pages/MyList";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AllTouristsSpots",
        element: <AllTouristsSpot />,
      },
      {
        path: "/AddTouristsSpot",
        element: <AddTouristsSpot />,
      },
      {
        path: "/MyList",
        element: <MyList />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default Routes;
