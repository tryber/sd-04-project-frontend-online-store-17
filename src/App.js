import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ProductList} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
