import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const LoginForm = () => {
  const navigate = useNavigate();
  const { user, googleSignIn, setLoading, loginWithEmail, loginWithGithub } =
    useAuth();
  console.log(user);

  // form function here
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmail(email, password)
      .then(() => {
        setLoading(false);
        navigate(location?.state ? location.state : "/");
        toast.success("Login Successfully");
      })
      .catch(() => {
        setLoading(false);
        toast.error("Invalid email or password");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        setLoading(false);
        navigate(location?.state ? location.state : "/");
        console.log(result);
        toast.success("Login Successfully");
      })
      .catch(() => {
        setLoading(false);
        toast.error("Something went wrong");
      });
  };

  const handleGithubSignIn = () => {
    loginWithGithub()
      .then(() => {
        setLoading(false);
        navigate(location?.state ? location.state : "/");
        toast.success("Login Successfully");
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Something went wrong");
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center md:min-h-[750px] bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-xl">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-bold mb-2"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-red-600 focus:outline-none"
        >
          <span className="flex justify-center items-center gap-3">
            <FaGoogle />
            Login with Google
          </span>
        </button>
        <button
          onClick={handleGithubSignIn}
          className="w-full bg-gray-800 text-white py-2 px-4 mt-2 rounded-md hover:bg-gray-900 focus:outline-none"
        >
          <span className="flex justify-center items-center gap-3">
            <FaGithub />
            Login with Github
          </span>
        </button>

        <a
          href="/register"
          className="block text-center mt-4 text-gray-600 hover:text-indigo-500"
        >
          Don't have an account? Register here
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
