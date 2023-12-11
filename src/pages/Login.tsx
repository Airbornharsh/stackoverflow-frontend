import { FaStackOverflow } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleGoogleSignIn = () => {
    console.log('Google Sign In');
  };

  return (
    <div className="flex h-[calc(100vh-3.5rem)] w-screen flex-col items-center justify-center gap-6 bg-authBackground">
      <div className="flex w-[90vw] max-w-[20rem] flex-col items-center justify-center gap-6">
        <FaStackOverflow className="h-8 w-8" />
        <button
          onClick={handleGoogleSignIn}
          className="flex h-10 w-[100%] items-center justify-center gap-[3px] rounded-md border-[1px] border-gray-200 bg-white">
          <FcGoogle className="h-5 w-5" />
          <span className="text-[0.84rem]">Log in with Google</span>
        </button>
        <form className="flex w-[100%] flex-col gap-5 rounded-md bg-white p-6 shadow-xl">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-[0.95rem] font-bold">
              Email
            </label>
            <input type="email" id="email" className="rounded-lg border-[1px] border-gray-400 p-1" />
          </div>
          <div className="relative flex flex-col gap-1">
            <label htmlFor="password" className="text-[0.95rem] font-bold">
              Password
            </label>
            <input type="password" id="password" className="rounded-lg border-[1px] border-gray-400 p-1" />
            <Link to={'/auth/forgot-password'} className="absolute right-0 top-2 text-[0.8rem] text-buttonBlue">
              Forgot password?
            </Link>
          </div>
          <button type="submit" className="h-10 rounded-lg bg-buttonBlue text-[0.9rem] text-white">
            Log In
          </button>
        </form>
        <div className="flex flex-col items-center text-[0.81rem] gap-3 mt-4">
          <div className="flex gap-2">
            <p>Don't have an account?</p>
            <Link to={'/auth/register'} className="text-buttonBlue">
              Sign Up
            </Link>
          </div>
          <div className="flex gap-2">
            <p>Are you an employer?</p>
            <Link to={'/auth/register'} className="text-buttonBlue">
              Sign up on Talent
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
