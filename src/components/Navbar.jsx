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
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-2xl">
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
          {user ? (
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
