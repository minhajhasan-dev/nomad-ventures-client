import { Link, NavLink } from "react-router-dom";

import toast from "react-hot-toast";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "../App.css";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    // log out code will be here
    logOut()
      .then(() => {
        toast.success("Log Out Successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="max-w-[1920px] bg-base-200 mx-auto">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown z-10">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-2xl"
            >
              <HiOutlineMenuAlt2 />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] border shadow bg-base-100 rounded-box w-44 p-4 text-center space-y-4"
            >
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link-active"
                    : "nav-link-inactive"
                }
              >
                Home
              </NavLink>

              <NavLink
                to={"/AllTouristsSpots"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link-active"
                    : "nav-link-inactive"
                }
              >
                All Tourists Spot
              </NavLink>

              <NavLink
                to={"/AddTouristsSpot"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link-active"
                    : "nav-link-inactive"
                }
              >
                Add Tourists Spot
              </NavLink>

              <NavLink
                to={"/MyList"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link-active"
                    : "nav-link-inactive"
                }
              >
                My List
              </NavLink>
            </ul>
          </div>
          <Link
            to={"/"}
            className="font-cookie text-blue-500 md:text-5xl text-3xl"
          >
            Nomad Ventures
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-base font-semibold flex gap-6 menu-horizontal px-1">
            <NavLink
              to={"/"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-link-active"
                  : "nav-link-inactive "
              }
            >
              Home
            </NavLink>

            <NavLink
              to={"/AllTouristsSpots"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-link-active"
                  : "nav-link-inactive"
              }
            >
              All Tourists Spot
            </NavLink>

            <NavLink
              to={"/AddTouristsSpot"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-link-active"
                  : "nav-link-inactive"
              }
            >
              Add Tourists Spot
            </NavLink>

            <NavLink
              to={"/MyList"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "nav-link-active"
                  : "nav-link-inactive"
              }
            >
              My List
            </NavLink>
          </ul>
        </div>
        {/* user, login & register will be here */}
        <div className="navbar-end">
          {/* dark mode btn here */}
          {user ? (
            <>
              <div className="flex items-center mr-2">
                <label className="swap swap-rotate">
                  {/* this hidden checkbox controls the state */}
                  <input
                    type="checkbox"
                    className="theme-controller"
                    value="dark"
                  />

                  {/* sun icon */}
                  <svg
                    className="swap-off fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* moon icon */}
                  <svg
                    className="swap-on fill-current w-10 h-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>
              </div>
              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user.photoURL ||
                        "https://shkola9nyagan-r86.gosweb.gosuslugi.ru/netcat_files/8/168/1_9.jpg"
                      }
                    />
                  </div>
                </div>
                <div
                  tabIndex={0}
                  className="mt-3 z-[1]  shadow menu menu-sm dropdown-content bg-base-100 border rounded-box p-2 w-52"
                >
                  <div className="h-32 flex flex-col items-center justify-evenly">
                    <p className="text-xl bold"> {user.displayName} </p>

                    <button onClick={handleLogOut} className="btn ">
                      Log Out
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className=" text-base font-semibold flex gap-6 menu-horizontal px-1">
              <NavLink
                to={"/login"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link-active"
                    : "nav-link-inactive"
                }
              >
                {" "}
                Login{" "}
              </NavLink>
              <NavLink
                to={"/register"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "nav-link-active"
                    : "nav-link-inactive"
                }
              >
                {" "}
                Register{" "}
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
