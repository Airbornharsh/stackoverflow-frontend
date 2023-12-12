import { PropsWithChildren, createContext, useState } from 'react';
import { auth } from '../config/firebase';
import { User, onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext({
  user: null as User | null,
  setUser: () => {},
});

const AuthProvider = (props: PropsWithChildren<unknown>) => {
  const [user, setUser] = useState<User | null>(null);

  const setUserFn = async () => {
    const tempUser = auth.currentUser;
    setUser(tempUser);
  };

  onAuthStateChanged(auth, () => {
    setUserFn();
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser: setUserFn,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
