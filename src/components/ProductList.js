import React from 'react';
import SideBar from '../pages/SideBar';
import * as api from '../services/api';
import ProductCard from './ProductCard';
import SearchInput from './header';
import Loading from '../pages/Loading';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.getInput = this.getInput.bind(this);
    this.fromCategories = this.fromCategories.bind(this);

    this.state = {
      product: [],
      loading: false,
      inputText: '',
      productOfCategory: [],
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

  async fromCategories(event) {
    const { value } = event.target;
    const products = await api.getProductFromCategories(value);
    this.setState({ productOfCategory: products.results, loading: true });
  }

  render() {
    const { product, loading, inputText } = this.state;
    if (loading === false || inputText.length < 4) {
      return (
        <div>
          <div className="sidebar-categories">
            <SearchInput getInput={this.getInput} inputText={inputText} />
            <SideBar fromCategories={this.fromCategories} />
          </div>
          <Loading />
        </div>
      );
    }

    return (
      <div>
        <div className="sidebar-categories">
          <SearchInput getInput={this.getInput} inputText={inputText} />
          <SideBar fromCategories={this.fromCategories} />
        </div>
        <div>Products</div>
        {product.map((e) => (
          <ProductCard key={e.id} product={e} />
        ))}
      </div>
    );
  }
}
