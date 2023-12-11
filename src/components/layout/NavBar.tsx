import { Search } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaStackOverflow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex h-14 w-screen items-center justify-center border-b-[1px] border-t-2 border-b-gray-500 border-t-navBarBorder bg-white">
      <div className="flex h-14 w-[96vw] max-w-[76rem] items-center justify-between  gap-6 text-[0.8rem]">
        <span>
          <MenuIcon />
        </span>
        <Link to={'/'} className="flex items-center justify-between text-[1.2rem]">
          <FaStackOverflow className="h-8 w-8" />
          <p>stack</p>
          <p className="font-bold">overflow</p>
        </Link>
        <ul className="flex gap-6 text-gray-500">
          <li>About</li>
          <li>Products</li>
          <li>Full Teams</li>
        </ul>
        <form className="flex flex-1 gap-2">
          <div className="flex h-8 flex-1 items-center justify-between gap-1 rounded border-[1px] border-gray-300 px-2">
            <Search />
            <input type="text" className="w-full border-0 text-gray-500  outline-0" placeholder="Search" />
          </div>
          <Link to={'/auth/login'} className="rounded-md border-[1px] border-buttonBlue px-2 py-1 text-buttonBlue">
            Log in
          </Link>
          <Link to={'/auth/register'} className='rounded-md border-[1px] border-buttonBlue bg-buttonBlue px-2 py-1 text-white'>
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default NavBar;
