import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import { PropsWithChildren } from 'react';

const ProtectedRoutes = (props: PropsWithChildren<unknown>) => {
  const [user, isLoading] = useAuthState(auth);
  const navigate = useNavigate();

  if (isLoading) {
    return <div className="flex h-screen w-screen items-center justify-center">Loading....</div>;
  }

  if (!user) {
    navigate('/auth/login');
  }

  return props.children;
};

export default ProtectedRoutes;
