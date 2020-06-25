import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product/:id/detail" component={ProductDetails} />
            <Route exact path="/ShoppingCart" component={ShoppingCartPage} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
