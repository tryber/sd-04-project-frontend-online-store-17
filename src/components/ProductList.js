import React from 'react';
import SideBar from '../pages/SideBar';
import * as api from '../services/api';
import ProductCard from './ProductCard';
import SearchInput from './header';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.getInput = this.getInput.bind(this);
    this.fromCategories = this.fromCategories.bind(this);
    this.chamaApi = this.chamaApi.bind(this);
    this.selectedCategory = this.selectedCategory.bind(this);

    this.state = {
      product: [],
      loading: false,
      inputText: '',
      selectedCategory: '',
    };
  }

  async getInput(event) {
    this.setState({ inputText: event.target.value });
  }

  selectedCategory(event) {
    this.setState({ selectedCategory: event.target.value });
  }

  async searchAndCategory() {
    const { inputText, selectedCategory } = this.state;
    await api
      .getProductsFromCategoryAndQuery(selectedCategory, inputText)
      .then((data) => this.setState({ product: data.results, loading: true }));
  }

  async chamaApi() {
    console.log('foi chamada chamaapi');
    const { inputText } = this.state;
    await api
      .getProductFromQuery(inputText)
      .then((data) => this.setState({ product: data.results, loading: true }));
  }

  async fromCategories(event) {
    const { value } = event.target;
    const products = await api.getProductFromCategories(value);
    this.setState({ product: products.results, loading: true });
  }

  render() {
    const { product, loading, inputText } = this.state;
    if (loading === false) {
      return (
        <div>
          <div className="sidebar-categories">
            <SearchInput
              getInput={this.getInput}
              selectedCategory={this.selectedCategory}
              chamaApi={this.chamaApi}
              inputText={inputText}
            />
            <SideBar fromCategories={this.fromCategories} />
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
          <SearchInput
            getInput={this.getInput}
            selectedCategory={this.selectedCategory}
            chamaApi={this.chamaApi}
            inputText={inputText}
          />
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
