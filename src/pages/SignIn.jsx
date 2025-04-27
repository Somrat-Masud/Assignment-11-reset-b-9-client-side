import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md ">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded mt-1"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <Link to="/register">
          create a register now?{" "}
          <span className="text-red-600 text-2xl">Register</span>
        </Link>
      </div>
    </div>
  );
};
export default SignIn;
// import { useContext } from "react";
//  import { Link, useLocation, useNavigate } from "react-router-dom";
//  import { AuthContext } from "../providers/AuthProviders";

//  const Login = () => {
//    const { signInUser } = useContext(AuthContext);
//    const handleSubmit = (e) => {
//      const navigate = useNavigate();
//      const location = useLocation();
//      e.preventDefault();
//      const form = e.target;
//      const email = form.email.value;
//      const password = form.password.value;
//      console.log(email, password);
//      signInUser(email, password)
//        .then((result) => {
//          console.log(result.user);
//          navigate(location?.state ? location.state : "/");
//        })
//        .catch((error) => {
//          console.log(error);
//        });
//    };

//    return (
//      <div className="flex justify-center items-center h-screen bg-gray-100">
//        <div className="bg-white p-8 rounded-lg shadow-md ">
//          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
//          <form onSubmit={handleSubmit}>
//            <div>
//              <label className="block text-gray-700">Email</label>
//              <input
//                type="email"
//                name="email"
//                className="w-full p-2 border rounded mt-1"
//                placeholder="Enter your email"
//                required
//              />
//            </div>
//            <div className="mt-4">
//              <label className="block text-gray-700">Password</label>
//              <input
//                type="password"
//                name="password"
//                className="w-full p-2 border rounded mt-1"
//                placeholder="Enter your password"
//                required
//              />
//            </div>
//            <button
//              type="submit"
//              className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
//            >
//              Login
//            </button>
//          </form>
//          <Link to="/register">
//            create a register now?{" "}
//            <span className="text-red-600 text-2xl">Register</span>
//          </Link>
//        </div>
//      </div>
//    );
//  };

//  export default Login;
