import { Link, Navigate, NavLink } from "react-router-dom";
import logo from "../../assets/VBD_logo.png";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
const Navbar = () => {
  //    const navigate = useNavigate();
  //    const { user, signOutUser } = useContext(AuthContext)
  const { user, signOutUser } = useContext(AuthContext);
  const signOutHandle = () => {
    signOutUser()
      .then((result) => {
        // toast.success("user sign out successfully", result);
        console.log(result.user);
        Navigate("/login");
      })
      .catch((error) => {
        // toast.error("Error", error.message);
        console.log(error.message);
      });
  };
  const links = (
    <>
      <nav className="bg-white font-semibold  p-4">
        <div className="container mx-auto flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/allVolunteer"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            All volunteer Need posts
          </NavLink>
          {/* {user && (
            <>
              <NavLink
                to="/addNewCampaign"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                    : "text-gray-700 hover:text-blue-600"
                }
              >
                Add New Campaign
              </NavLink>
              <NavLink
                to="/myCampaign"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                    : "text-gray-700 hover:text-blue-600"
                }
              >
                My Campaign
              </NavLink>
              <NavLink
                to="/myDonations"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
                    : "text-gray-700 hover:text-blue-600"
                }
              >
                My Donations
              </NavLink>
            </>
          )} */}
        </div>
      </nav>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="text-2xl h-14 w-14   ">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      {/* <div className="navbar-end">
        <a className="btn">Button</a>
      </div> */}
      <div className="navbar-end">
        {user ? (
          <>
            <div className="flex justify-center items-center space-x-3">
              <img
                className="w-10 h-10 rounded-full border border-gray-300"
                src={user?.photoURL || "https://via.placeholder.com/50"}
                alt="User"
              />

              <a onClick={signOutHandle} className="btn">
                Sign Out
              </a>
            </div>
          </>
        ) : (
          <Link to="/signIn" className="btn bg-blue-400 ">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

// import { useContext } from "react";
//  import { Link, NavLink, useNavigate } from "react-router-dom";
//  import { AuthContext } from "../providers/AuthProviders";

//  const Navbar = () => {
//    const navigate = useNavigate();
//    const { user, signOutUser } = useContext(AuthContext);
//    const signOutHandle = () => {
//      signOutUser()
//        .then((result) => {
//          // toast.success("user sign out successfully", result);
//          console.log(result.user);
//          navigate("/login");
//        })
//        .catch((error) => {
//          // toast.error("Error", error.message);
//          console.log(error.message);
//        });
//    };
//    const links = (
//      <>
//        <nav className="bg-white font-semibold  p-4">
//          <div className="container mx-auto flex space-x-6">
//            <NavLink
//              to="/"
//              className={({ isActive }) =>
//                isActive
//                  ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
//                  : "text-gray-700 hover:text-blue-600"
//              }
//            >
//              Home
//            </NavLink>

//            <NavLink
//              to="/allCampaign"
//              className={({ isActive }) =>
//                isActive
//                  ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
//                  : "text-gray-700 hover:text-blue-600"
//              }
//            >
//              All Campaign
//            </NavLink>

//            {user && (
//              <>
//                <NavLink
//                  to="/addNewCampaign"
//                  className={({ isActive }) =>
//                    isActive
//                      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
//                      : "text-gray-700 hover:text-blue-600"
//                  }
//                >
//                  Add New Campaign
//                </NavLink>
//                <NavLink
//                  to="/myCampaign"
//                  className={({ isActive }) =>
//                    isActive
//                      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
//                      : "text-gray-700 hover:text-blue-600"
//                  }
//                >
//                  My Campaign
//                </NavLink>
//                <NavLink
//                  to="/myDonations"
//                  className={({ isActive }) =>
//                    isActive
//                      ? "text-blue-600 font-bold border-b-2 border-blue-600 pb-1"
//                      : "text-gray-700 hover:text-blue-600"
//                  }
//                >
//                  My Donations
//                </NavLink>
//              </>
//            )}
//          </div>
//        </nav>
//      </>
//    );
//    return (
//      <div className="navbar  shadow-sm">
//        <div className="navbar-start">
//          <div className="dropdown">
//            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//              <svg
//                xmlns="http://www.w3.org/2000/svg"
//                className="h-5 w-5"
//                fill="none"
//                viewBox="0 0 24 24"
//                stroke="currentColor"
//              >
//                {" "}
//                <path
//                  strokeLinecap="round"
//                  strokeLinejoin="round"
//                  strokeWidth="2"
//                  d="M4 6h16M4 12h8m-8 6h16"
//                />{" "}
//              </svg>
//            </div>
//            <ul
//              tabIndex={0}
//              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow"
//            >
//              {links}
//            </ul>
//          </div>
//          <div className="flex justify-center items-center gap-5">
//            <p className="w-[150px] h-[50px] object-cover  ">
//              <img
//                src="https://i.ibb.co.com/PsqxT8qm/crowdcube-logo.png"
//                alt=""
//              />
//            </p>
//            <p className="">Crowd Funding Application</p>
//          </div>
//        </div>
//        <div className="navbar-center hidden lg:flex ml-3">
//          <ul className="menu menu-horizontal px-1 gap-4  ">{links}</ul>
//        </div>
//        <div className="navbar-end">
//          {user ? (
//            <>
//              <div className="flex justify-center items-center space-x-3">
//                <img
//                  className="w-10 h-10 rounded-full border border-gray-300"
//                  src={user?.photoURL || "https://via.placeholder.com/50"}
//                  alt="User"
//                />

//                <a onClick={signOutHandle} className="btn">
//                  Sign Out
//                </a>
//              </div>
//            </>
//          ) : (
//            <Link to="/login" className="btn bg-blue-400 ">
//              Login
//            </Link>
//          )}
//        </div>
//      </div>
//    );
//  };

//  export default Navbar;
