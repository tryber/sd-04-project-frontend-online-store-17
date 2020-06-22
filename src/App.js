import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ShoppingCartButton from './components/shoppingCartButton';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <ShoppingCartButton />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/product/:id/detail" component={ProductDetails} />
            <Route exact path="/ShoppingCart" component={ShoppingCartPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
