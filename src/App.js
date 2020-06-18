import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import SearchInput from './components/header'

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
        <SearchInput />
          <Switch>
            <Route path="/" component={ProductList} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
