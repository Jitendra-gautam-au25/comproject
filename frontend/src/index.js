import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore, } from "@reduxjs/toolkit"
import { cartReducer, productReducer,orderReducer,userReducer } from './reducers/index.js';
import HomePage from './AllPages/Home';
import CardPage from './AllPages/CardPage';
//  import CartPage from './Components/Cart';
//  import  productReducer  from './reducers/index.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import CheckoutPage from './AllPages/CheckoutPage';
import OrderPage from './AllPages/OrderPage';
import ProductDetailPage from './AllPages/ProductDetailPage';
import LoginupPage from './AllPages/LoginPage';
const store = configureStore(
  {
    reducer: {
      product: productReducer,
      cart: cartReducer,
      order: orderReducer,
      user: userReducer
    }
  }
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CardPage/>}/>
          <Route path="checkout" element={<CheckoutPage/>}/>
          <Route path="myorders" element={<OrderPage/>}/>
          <Route path="login" element={<LoginupPage/>}/>
          <Route path="product/:productId" element={<ProductDetailPage/>}/>
       




        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
