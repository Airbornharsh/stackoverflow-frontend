import { BrowserRouter } from 'react-router-dom';
import BrowserContainer from './Routes';

const App = () => {
  return (
    <div className='w-screen h-screen'>
      <BrowserRouter>
        <BrowserContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
