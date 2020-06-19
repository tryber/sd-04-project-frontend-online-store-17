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
      inputText: '',
    };
  }

  componentDidUpdate() {
    const { inputText } = this.state;
    api
      .getProductsFromCategoryAndQuery(inputText)
      .then((data) => this.setState({ products: data.results, loading: true }));
  }

  getInput(event) {
    this.setState({ inputText: event.target.value });
  }

  render() {
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
