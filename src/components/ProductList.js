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
      random: 0,
      product: [],
      loading: false,
      inputText: '',
    };
  }

  async getInput(event) {
    this.setState({ inputText: event.target.value });
    setTimeout(() => {
      this.chamaApi();
    }, 2000);
  }

  async chamaApi() {
    const { inputText } = this.state;
    await api
      .getProductFromQuery(inputText)
      .then((data) => this.setState({ product: data.results, loading: true }));
  }

  render() {
    const { product, loading, inputText } = this.state;
    if (loading === false || inputText.length < 4) {
      return (
        <div>
          <div className="sidebar-categories">
            <SearchInput getInput={this.getInput} inputText={inputText} />
            <SideBar />
          </div>
          <span data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </span>
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
        {product.map((e) => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
    );
  }
}
