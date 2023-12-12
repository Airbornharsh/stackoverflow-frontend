import { BrowserRouter } from 'react-router-dom';
import BrowserContainer from './Routes';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <div className="h-screen w-screen">
        <BrowserRouter>
          <BrowserContainer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
};

export default App;
