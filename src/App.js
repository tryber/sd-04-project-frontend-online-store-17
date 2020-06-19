import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ShoppingCartButton from './components/shoppingCartButton';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <ShoppingCartButton />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/ShoppingCart" component={ShoppingCartPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
