import React from 'react';
import * as api from '../services/api';
import SearchInput from '../components/SearchInput';
import ProductList from '../components/ProductList';
import ShoppingCartButton from '../components/shoppingCartButton';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.getInput = this.getInput.bind(this);
    this.getProductsFromApi = this.getProductsFromApi.bind(this);
    this.selectedCategory = this.selectedCategory.bind(this);

    this.state = {
      product: '',
      category: '',
      inputText: '',
      selectedCategory: '',
    };
  }

  componentDidMount() {
    api.getCategories().then((data) => this.setState({ category: data }));
  }

  componentDidUpdate(prevState) {
    if (prevState.category !== this.state.category) {
      // this.getProductsFromApi();
      console.log(this.state);
    }
  }

  async getInput(event) {
    this.setState({ inputText: event.target.value });
  }

  async getProductsFromApi() {
    const { inputText, selectedCategory } = this.state;
    await api
      .getProductsFromCategoryAndQuery(selectedCategory, inputText)
      .then((data) => this.setState({ product: data.results }));
  }

  selectedCategory(event) {
    this.setState({ selectedCategory: event.target.value });
  }

  render() {
    const { category, inputText, product } = this.state;
    return (
      <div>
        <ShoppingCartButton />
        <SearchInput
          getInput={this.getInput}
          inputText={inputText}
          selectedCategory={this.selectedCategory}
          getProductsFromApi={this.getProductsFromApi}
          category={category}
        />
        <ProductList product={product} />
      </div>
    );
  }
}
