import { Link, NavLink } from "react-router-dom";
import "../App.css";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    // log out code will be here
    logOut()
      .then(() => alert("Log Out Successfully"))
      .catch((error) => alert(error.message));
  };

  return (
    <div className="max-w-[1920px] bg-base-200 mx-auto">
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
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
            className="font-cookie text-blue-500 md:text-5xl text-2xl"
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
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://i.insider.com/54c26b986bb3f7304c3f9ba6?width=2000&format=jpeg&auto=webp"
                  />
                </div>
              </div>
              <div
                tabIndex={0}
                className="mt-3 z-[1]  shadow menu menu-sm dropdown-content bg-base-100 border rounded-box p-2 w-52"
              >
                <div className="h-32 flex flex-col items-center justify-evenly">
                  <p className="text-xl bold">Elon Musk</p>

                  <button onClick={handleLogOut} className="btn ">
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex font-semibold gap-6">
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
