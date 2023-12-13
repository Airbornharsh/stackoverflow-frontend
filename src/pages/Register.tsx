import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {
  const handleGoogleSignUp = () => {};

  return (
    <div className="flex h-[calc(100vh-3.5rem)] w-screen justify-center gap-10 bg-authBackground">
      <div className="max800:hidden flex max-w-[26rem] flex-col justify-center gap-7">
        <h5 className="text-[1.64rem] font-medium">Join the Stack Overflow community</h5>
        <ul className="flex flex-col gap-5 text-[0.9rem] font-medium">
          <li>
            <p>Get unstuck — ask a question</p>
          </li>
          <li>
            <p>Unlock new privileges like voting and commenting</p>
          </li>
          <li>
            <p>Save your favorite questions, answers, watch tags, and more</p>
          </li>
          <li>
            <p>Earn reputation and badges</p>
          </li>
        </ul>
        <div className="text-[0.8rem]">
          <p className="text-gray-500">Collaborate and share knowledge with a private group for FREE.</p>
          <p className="text-buttonBlue">Get Stack Overflow for Teams free for up to 50 users. </p>
        </div>
      </div>
      <div className="flex w-[90vw] max-w-[20rem] flex-col items-center justify-center gap-6">
        <button
          onClick={handleGoogleSignUp}
          className="flex h-10 w-[100%] items-center justify-center gap-[3px] rounded-md border-[1px] border-gray-200 bg-white">
          <FcGoogle className="h-5 w-5" />
          <span className="text-[0.84rem]">Sign Up with Google</span>
        </button>
        <form className="flex w-[100%] flex-col gap-5 rounded-md bg-white p-6 shadow-xl">
          <div className="flex flex-col gap-1">
            <label htmlFor="displayName" className="text-[0.95rem] font-bold">
              Display Name
            </label>
            <input type="text" id="displayName" className="rounded-lg border-[1px] border-gray-400 p-1" />
          </div>
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
            <p className="text-[0.8rem] text-gray-500">
              {' '}
              Passwords must contain at least eight characters, including at least 1 letter and 1 number.
            </p>
          </div>
          <button type="submit" className="h-10 rounded-lg bg-buttonBlue text-[0.9rem] text-white">
            Sign Up
          </button>
        </form>
        <div className="mt-4 flex flex-col items-center gap-3 text-[0.81rem]">
          <div className="flex gap-2">
            <p>Already have an account?</p>
            <Link to={'/auth/register'} className="text-buttonBlue">
              Log In
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

export default Register;
