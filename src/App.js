import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import SearchInput from './components/header';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ShoppingCartButton from './components/shoppingCartButton';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <SearchInput />
          <ShoppingCartButton />
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/product/:id/detail" component={ProductDetails} />
            <Route exact path="/ShoppingCartPage" component={ShoppingCartPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
