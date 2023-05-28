import { Routes, Route } from 'react-router-dom';
import Products from './components/products';

import Cart from './components/cart';
import Navhead from './components/nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import SignUp from './components/sign-up';
import LogIn from './components/logIn';
import User from './components/user';

function App() {
  return (
    <div className='App'>
      <Navhead />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/:userName' element={<User />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/log-in' element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
