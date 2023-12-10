import { Outlet } from 'react-router-dom';
import NavBar from '../components/layout/NavBar';

const AuthLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
