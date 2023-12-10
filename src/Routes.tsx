import { Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeLayout from './layout/HomeLayout';
import Home from './pages/Home';
import AuthLayout from './layout/AuthLayout';

const BrowserContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet />}>
        <Route path="" element={<HomeLayout />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default BrowserContainer;
