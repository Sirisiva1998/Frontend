import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login/Login.js';
import Register from './Pages/Register/Register.js';
import BestSeller from './Pages/BestSellers/BestSeller.js';
import Cart from './Pages/Cart/Cart.js';
import NewArrivals from './Pages/NewArrivals/NewArrivals.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/BestSeller' element={<BestSeller/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
        <Route path='/NewArrivals' element={<NewArrivals/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

