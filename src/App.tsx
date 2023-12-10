import { BrowserRouter } from 'react-router-dom';
import BrowserContainer from './Routes';

const App = () => {
  return (
    <BrowserRouter>
      <BrowserContainer />
    </BrowserRouter>
  );
};

export default App;
