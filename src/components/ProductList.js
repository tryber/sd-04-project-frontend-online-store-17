import React from 'react';
import SideBar from '../pages/SideBar';
import * as api from '../services/api';
import ProductCard from './ProductCard';
import SearchInput from './SearchBar';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.getInput = this.getInput.bind(this);
    this.fromCategories = this.fromCategories.bind(this);
    // this.onlySearch = this.onlySearch.bind(this);
    this.selectedCategory = this.selectedCategory.bind(this);
    this.getProductsFromApi = this.getProductsFromApi.bind(this);

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

  async getProductsFromApi() {
    const { inputText, selectedCategory } = this.state;
    if (selectedCategory === '') {
      await api
        .getProductFromQuery(inputText)
        .then((data) => this.setState({ product: data.results, loading: true }));
    }
    await api
      .getProductsFromCategoryAndQuery(selectedCategory, inputText)
      .then((data) => this.setState({ product: data.results, loading: true }));
  }

  selectedCategory(event) {
    this.setState({ selectedCategory: event.target.value });
  }

  async fromCategories(event) {
    const { value } = event.target;
    const products = await api.getProductFromCategories(value);
    this.setState({ product: products.results, loading: true });
  }

  render() {
    const { product, loading, inputText } = this.state;
    console.log(this.state);
    if (loading === false) {
      return (
        <div>
          <div className="sidebar-categories">
            <SearchInput
              getInput={this.getInput}
              selectedCategory={this.selectedCategory}
              inputText={inputText}
              getProductsFromApi={this.getProductsFromApi}
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
            inputText={inputText}
            getProductsFromApi={this.getProductsFromApi}
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
