import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';

function App() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
