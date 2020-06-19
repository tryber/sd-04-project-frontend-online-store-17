import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import SearchInput from './components/header';
import ShoppingCartPage from './pages/ShoppingCartPage';
import ShoppingCartButton from './components/shoppingCartButton';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <SearchInput />
          <ShoppingCartButton />
          <Switch>
            <Route path="/" component={ProductList} />
            <Route exact path="/ShoppingCartPage" component={ShoppingCartPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
