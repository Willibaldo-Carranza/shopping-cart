import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import Shop from './shop';
import Product from './components/shop-components/product';
import About from './about';
import Bag from './bag';
import pin from './images/pin-icon.png';
import React, {useState} from 'react';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (product) => {
    let arr = items.filter(item => item !== product);
    setItems(arr);
  };

  const checkout = () => {
    setItems([]);
    alert('Thank You For Your Purchases!');
  }

  const incrementQuantity = (product) => {
    console.log('increment');
    let arr = items.map((item) => {
      if (item === product && product.quantity < 10) {
        item = {...item, quantity: item.quantity + 1}
      }
      return item;
    });
    setItems(arr);
  }

  const decrementQuantity = (product) => {
    console.log('decrement');
    let arr = items.map((item) => {
      if (item === product && product.quantity > 1) {
        item = {...item, quantity: product.quantity - 1};
      } 
      return item;
    });
    setItems(arr);
  }

  return (
    <BrowserRouter>
      <div className='app'>
        <Nav items={items}/>
        <Routes>
          <Route path='/shopping-cart/home' element={<Home />} />
          <Route path='/shopping-cart/shop' element={<Shop />} />
          <Route path='/shopping-cart/shop/:id' element={<Product addItem={addItem} items={items}/>} />
          <Route path='/shopping-cart/about' element={<About />} />
          <Route path='/shpping-cart/bag' element={<Bag items={items} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} deleteItem={deleteItem} checkout={checkout}/>} />
        </Routes>
        <footer>
          <div className='top-container'>
            <ul className='media-list'>
              <li>twitter</li>
              <li>facebook</li>
              <li>youtube</li>
              <li>instagram</li>
            </ul>
            <ul className='link-list'>
              <li>gift cards</li>
              <li>promotions</li>
              <li>find a store</li>
              <li>sign up for email</li>
              <li>become a member</li>
              <li>soul city journal </li>
              <li>send us feedback</li>
            </ul>
            <ul className='link-list'>
              <li>get help</li>
              <li>Order Status</li>
              <li>Shipping and Delivery</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Gift Card Balance</li>
              <li>Contact Us</li>
            </ul>
            <ul className='link-list'>
              <li>about Soul City</li>
              <li>News</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Purpose</li>
              <li>Sustainability</li>
            </ul>
          </div>
          <div className='bottom-container'>
            <div className='left-container'>
              <img alt='pin icon' className='pin-icon' src={pin} />
              <p className='location'>United States</p>
              <p className='copywrite'>@ 2022 Sole City, Inc. All Rights Reserved</p>
            </div>
            <ul className='right-container'>
              <li>Guides</li>
              <li>Terms of Sale</li>
              <li>Terms of Use</li>
              <li>Sole City Privacy Policy</li>
              <li>IL Supply Chains Act</li>
            </ul>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );

}

export default App;
