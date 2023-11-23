import { BrowserRouter } from 'react-router-dom';
import Login from './pages/login/login';
import Home from './pages/home/home';
import Profile from './pages/profile/profile';
import Error from './pages/error/error';
import './App.css'
import Inicial from './pages/inicial/inicial';
import AppRoutes from './routes/routes';

function App() {
  let authenticated = false;
  return (
    <>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </>
  )
}

export default App
