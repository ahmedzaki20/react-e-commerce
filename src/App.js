import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/products';
import { Button } from 'react-bootstrap';
import Cart from './components/cart';
import Navhead from './components/nav';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/react-bootstrap/dist/react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navhead />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
