import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import AddTouristsSpot from "../pages/AddTouristsSpot";
import AllTouristsSpot from "../pages/AllTouristsSpot";
import Home from "../pages/Home";
import Login from "../pages/Login";
import MyList from "../pages/MyList";
import NotFound from "../pages/NotFound";
import Register from "../pages/Register";
import TouristSpotDetails from "../pages/TouristSpotDetails";
import TouristSpotDetailsv2 from "../pages/TouristSpotDetailsv2";
import Update from "../pages/Update";
import PrivateRoute from "../utility/PrivateRoute";
import CountryDetails from "../pages/CountryDetails";

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
        element: (
          <PrivateRoute>
            <AddTouristsSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "/MyList",
        element: (
          <PrivateRoute>
            <MyList />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <TouristSpotDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/v2/:id",
        element: (
          <PrivateRoute>
            <TouristSpotDetailsv2 />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/country/:id",
        element: (
          <PrivateRoute>
            <CountryDetails />
          </PrivateRoute>
        ),
      }
    ],
  },
]);

export default Routes;
