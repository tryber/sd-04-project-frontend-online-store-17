import React from 'react';
import SideBar from '../pages/SideBar';
import * as api from '../services/api';
import ProductCard from './ProductCard';
import SearchInput from './header';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.getInput = this.getInput.bind(this);

    this.state = {
      products: '',
      loading: false,
      inputText: 'computador',
    };
  }

  getInput(event) {
    console.log(event.target.value);
  }

  render() {
    console.log(this.state);
    const { products, loading, inputText } = this.state;
    if (loading === false || products === '') {
      return (
        <div className="sidebar-categories">
          <SearchInput props={this.onSubmit} />
          <SideBar />
          <div>
            <p>Nenhum produto encontrado!</p>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="sidebar-categories">
          <SearchInput getInput={this.getInput} inputText={inputText} />
          <SideBar />
        </div>
        <div>Products</div>
        {products.map((e) => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
    );
  }
}
